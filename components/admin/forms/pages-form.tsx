"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFileUpload } from "@/hooks/use-file-upload";
import { upsertRegistro } from "@/services/admin-content";
import type { Pagina } from "@/types/site";

interface PagesFormProps {
  initialValue: Pagina[];
  disabled?: boolean;
}

export function PagesForm({ initialValue, disabled = false }: PagesFormProps) {
  const [pages, setPages] = useState(initialValue);
  const [status, setStatus] = useState<string | null>(null);
  const [savingId, setSavingId] = useState<string | null>(null);
  const { upload, uploading } = useFileUpload();

  function updatePage(id: string, field: keyof Pagina, value: string | boolean | null) {
    setPages((current) =>
      current.map((page) => (page.id === id ? { ...page, [field]: value } : page))
    );
  }

  async function savePage(page: Pagina) {
    setSavingId(page.id);
    setStatus(null);

    try {
      await upsertRegistro("paginas", page);
      setStatus(`Página "${page.subtitulo}" salva.`);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Erro ao salvar página.");
    } finally {
      setSavingId(null);
    }
  }

  async function handleImage(page: Pagina, file?: File | null) {
    if (!file) {
      return;
    }

    const imageUrl = await upload(file, "paginas");
    updatePage(page.id, "imagem_url", imageUrl);
  }

  return (
    <div className="grid gap-6">
      {pages.map((page) => (
        <Card key={page.id} className="rounded-[28px]">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Título
              </label>
              <Input
                value={page.titulo}
                onChange={(event) => updatePage(page.id, "titulo", event.target.value)}
                disabled={disabled}
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Subtítulo
              </label>
              <Input
                value={page.subtitulo}
                onChange={(event) =>
                  updatePage(page.id, "subtitulo", event.target.value)
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
              value={page.descricao}
              onChange={(event) =>
                updatePage(page.id, "descricao", event.target.value)
              }
              disabled={disabled}
            />
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                SEO título
              </label>
              <Input
                value={page.seo_titulo ?? ""}
                onChange={(event) =>
                  updatePage(page.id, "seo_titulo", event.target.value)
                }
                disabled={disabled}
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                SEO descrição
              </label>
              <Input
                value={page.seo_descricao ?? ""}
                onChange={(event) =>
                  updatePage(page.id, "seo_descricao", event.target.value)
                }
                disabled={disabled}
              />
            </div>
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-[1fr_auto]">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Imagem da página
              </label>
              <Input
                value={page.imagem_url ?? ""}
                onChange={(event) =>
                  updatePage(page.id, "imagem_url", event.target.value)
                }
                placeholder="URL da imagem"
                disabled={disabled}
              />
              <Input
                type="file"
                accept="image/*"
                className="mt-3"
                onChange={(event) => handleImage(page, event.target.files?.[0])}
                disabled={disabled}
              />
            </div>
            <div className="flex items-end">
              <label className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700">
                <input
                  type="checkbox"
                  checked={page.ativo}
                  onChange={(event) =>
                    updatePage(page.id, "ativo", event.target.checked)
                  }
                  disabled={disabled}
                />
                Página ativa
              </label>
            </div>
          </div>

          {page.imagem_url ? (
            <img
              src={page.imagem_url}
              alt={page.titulo}
              className="mt-4 h-32 w-full rounded-2xl object-cover"
            />
          ) : null}

          <div className="mt-6">
            <Button
              onClick={() => savePage(page)}
              disabled={disabled || savingId === page.id || uploading}
            >
              {savingId === page.id || uploading ? "Salvando..." : "Salvar página"}
            </Button>
          </div>
        </Card>
      ))}
      {status ? <p className="text-sm text-slate-600">{status}</p> : null}
    </div>
  );
}
