"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFileUpload } from "@/hooks/use-file-upload";
import { removerRegistro, upsertRegistro } from "@/services/admin-content";
import type { ChavePagina, Secao } from "@/types/site";

interface SectionsFormProps {
  initialValue: Secao[];
  disabled?: boolean;
}

const paginas: ChavePagina[] = [
  "home",
  "quem-somos",
  "servicos",
  "trabalhe-conosco",
  "contato"
];

export function SectionsForm({
  initialValue,
  disabled = false
}: SectionsFormProps) {
  const [sections, setSections] = useState(initialValue);
  const [status, setStatus] = useState<string | null>(null);
  const [savingId, setSavingId] = useState<string | null>(null);
  const { upload, uploading } = useFileUpload();

  function updateSection(
    id: string,
    field: keyof Secao,
    value: string | boolean | number | null
  ) {
    setSections((current) =>
      current.map((section) =>
        section.id === id ? { ...section, [field]: value } : section
      )
    );
  }

  function addSection() {
    setSections((current) => [
      ...current,
      {
        id: crypto.randomUUID(),
        pagina_chave: "home",
        chave: "nova-secao",
        titulo: "Nova seção",
        subtitulo: "Subtítulo",
        descricao: "Descrição da seção",
        conteudo: "Conteúdo editável",
        imagem_url: null,
        cta_label: null,
        cta_href: null,
        ordem: current.length + 1,
        ativo: true
      }
    ]);
  }

  async function saveSection(section: Secao) {
    setSavingId(section.id);
    setStatus(null);

    try {
      await upsertRegistro("secoes", section);
      setStatus(`Seção "${section.titulo}" salva.`);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Erro ao salvar seção.");
    } finally {
      setSavingId(null);
    }
  }

  async function deleteSection(id: string) {
    try {
      await removerRegistro("secoes", id);
      setSections((current) => current.filter((section) => section.id !== id));
      setStatus("Seção removida.");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Erro ao remover seção.");
    }
  }

  async function handleImage(section: Secao, file?: File | null) {
    if (!file) {
      return;
    }

    const imageUrl = await upload(file, "secoes");
    updateSection(section.id, "imagem_url", imageUrl);
  }

  return (
    <div className="space-y-6">
      <Button variant="secondary" onClick={addSection} disabled={disabled}>
        Adicionar seção
      </Button>
      {[...sections]
        .sort((a, b) => a.ordem - b.ordem)
        .map((section) => (
          <Card key={section.id} className="rounded-[28px]">
            <div className="grid gap-5 md:grid-cols-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Página
                </label>
                <select
                  value={section.pagina_chave}
                  onChange={(event) =>
                    updateSection(
                      section.id,
                      "pagina_chave",
                      event.target.value as ChavePagina
                    )
                  }
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm"
                  disabled={disabled}
                >
                  {paginas.map((pageKey) => (
                    <option key={pageKey} value={pageKey}>
                      {pageKey}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Chave interna
                </label>
                <Input
                  value={section.chave}
                  onChange={(event) =>
                    updateSection(section.id, "chave", event.target.value)
                  }
                  disabled={disabled}
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Ordem
                </label>
                <Input
                  type="number"
                  value={section.ordem}
                  onChange={(event) =>
                    updateSection(section.id, "ordem", Number(event.target.value))
                  }
                  disabled={disabled}
                />
              </div>
              <div className="flex items-end">
                <label className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700">
                  <input
                    type="checkbox"
                    checked={section.ativo}
                    onChange={(event) =>
                      updateSection(section.id, "ativo", event.target.checked)
                    }
                    disabled={disabled}
                  />
                  Seção ativa
                </label>
              </div>
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Título
                </label>
                <Input
                  value={section.titulo}
                  onChange={(event) =>
                    updateSection(section.id, "titulo", event.target.value)
                  }
                  disabled={disabled}
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Subtítulo
                </label>
                <Input
                  value={section.subtitulo}
                  onChange={(event) =>
                    updateSection(section.id, "subtitulo", event.target.value)
                  }
                  disabled={disabled}
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Descrição
              </label>
              <Textarea
                value={section.descricao}
                onChange={(event) =>
                  updateSection(section.id, "descricao", event.target.value)
                }
                disabled={disabled}
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Conteúdo
              </label>
              <Textarea
                value={section.conteudo}
                onChange={(event) =>
                  updateSection(section.id, "conteudo", event.target.value)
                }
                disabled={disabled}
              />
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  CTA label
                </label>
                <Input
                  value={section.cta_label ?? ""}
                  onChange={(event) =>
                    updateSection(section.id, "cta_label", event.target.value)
                  }
                  disabled={disabled}
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  CTA link
                </label>
                <Input
                  value={section.cta_href ?? ""}
                  onChange={(event) =>
                    updateSection(section.id, "cta_href", event.target.value)
                  }
                  disabled={disabled}
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Imagem
              </label>
              <Input
                value={section.imagem_url ?? ""}
                onChange={(event) =>
                  updateSection(section.id, "imagem_url", event.target.value)
                }
                disabled={disabled}
              />
              <Input
                type="file"
                accept="image/*"
                className="mt-3"
                onChange={(event) => handleImage(section, event.target.files?.[0])}
                disabled={disabled}
              />
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                onClick={() => saveSection(section)}
                disabled={disabled || savingId === section.id || uploading}
              >
                {savingId === section.id || uploading ? "Salvando..." : "Salvar"}
              </Button>
              <Button
                variant="danger"
                onClick={() => deleteSection(section.id)}
                disabled={disabled}
              >
                Remover
              </Button>
            </div>
          </Card>
        ))}
      {status ? <p className="text-sm text-slate-600">{status}</p> : null}
    </div>
  );
}
