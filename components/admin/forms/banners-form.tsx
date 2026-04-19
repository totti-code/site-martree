"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFileUpload } from "@/hooks/use-file-upload";
import { removerRegistro, upsertRegistro } from "@/services/admin-content";
import type { Banner } from "@/types/site";

interface BannersFormProps {
  initialValue: Banner[];
  disabled?: boolean;
}

export function BannersForm({
  initialValue,
  disabled = false
}: BannersFormProps) {
  const [banners, setBanners] = useState(initialValue);
  const [status, setStatus] = useState<string | null>(null);
  const [savingId, setSavingId] = useState<string | null>(null);
  const { upload, uploading } = useFileUpload();

  function updateBanner(
    id: string,
    field: keyof Banner,
    value: string | boolean | number | null
  ) {
    setBanners((current) =>
      current.map((banner) =>
        banner.id === id ? { ...banner, [field]: value } : banner
      )
    );
  }

  function addBanner() {
    setBanners((current) => [
      ...current,
      {
        id: crypto.randomUUID(),
        chave: "novo-banner",
        titulo: "Novo banner",
        subtitulo: "Subtítulo",
        descricao: "Descrição do banner",
        imagem_url: null,
        cta_label: "Saiba mais",
        cta_href: "/contato",
        ordem: current.length + 1,
        ativo: true
      }
    ]);
  }

  async function saveBanner(banner: Banner) {
    setSavingId(banner.id);
    setStatus(null);

    try {
      await upsertRegistro("banners", banner);
      setStatus(`Banner "${banner.titulo}" salvo.`);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Erro ao salvar banner.");
    } finally {
      setSavingId(null);
    }
  }

  async function deleteBanner(id: string) {
    try {
      await removerRegistro("banners", id);
      setBanners((current) => current.filter((banner) => banner.id !== id));
      setStatus("Banner removido.");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Erro ao remover banner.");
    }
  }

  async function handleImage(banner: Banner, file?: File | null) {
    if (!file) {
      return;
    }

    const imageUrl = await upload(file, "banners");
    updateBanner(banner.id, "imagem_url", imageUrl);
  }

  return (
    <div className="space-y-6">
      <Button variant="secondary" onClick={addBanner} disabled={disabled}>
        Adicionar banner
      </Button>
      {[...banners]
        .sort((a, b) => a.ordem - b.ordem)
        .map((banner) => (
          <Card key={banner.id} className="rounded-[28px]">
            <div className="grid gap-5 md:grid-cols-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Chave
                </label>
                <Input
                  value={banner.chave}
                  onChange={(event) =>
                    updateBanner(banner.id, "chave", event.target.value)
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
                  value={banner.ordem}
                  onChange={(event) =>
                    updateBanner(banner.id, "ordem", Number(event.target.value))
                  }
                  disabled={disabled}
                />
              </div>
              <div className="md:col-span-2 flex items-end">
                <label className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700">
                  <input
                    type="checkbox"
                    checked={banner.ativo}
                    onChange={(event) =>
                      updateBanner(banner.id, "ativo", event.target.checked)
                    }
                    disabled={disabled}
                  />
                  Banner ativo
                </label>
              </div>
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <Input
                value={banner.titulo}
                onChange={(event) =>
                  updateBanner(banner.id, "titulo", event.target.value)
                }
                disabled={disabled}
              />
              <Input
                value={banner.subtitulo}
                onChange={(event) =>
                  updateBanner(banner.id, "subtitulo", event.target.value)
                }
                disabled={disabled}
              />
            </div>

            <div className="mt-5">
              <Textarea
                value={banner.descricao}
                onChange={(event) =>
                  updateBanner(banner.id, "descricao", event.target.value)
                }
                disabled={disabled}
              />
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <Input
                value={banner.cta_label ?? ""}
                onChange={(event) =>
                  updateBanner(banner.id, "cta_label", event.target.value)
                }
                placeholder="Texto do botão"
                disabled={disabled}
              />
              <Input
                value={banner.cta_href ?? ""}
                onChange={(event) =>
                  updateBanner(banner.id, "cta_href", event.target.value)
                }
                placeholder="Link do botão"
                disabled={disabled}
              />
            </div>

            <div className="mt-5">
              <Input
                value={banner.imagem_url ?? ""}
                onChange={(event) =>
                  updateBanner(banner.id, "imagem_url", event.target.value)
                }
                placeholder="URL da imagem"
                disabled={disabled}
              />
              <Input
                type="file"
                accept="image/*"
                className="mt-3"
                onChange={(event) => handleImage(banner, event.target.files?.[0])}
                disabled={disabled}
              />
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                onClick={() => saveBanner(banner)}
                disabled={disabled || savingId === banner.id || uploading}
              >
                {savingId === banner.id || uploading ? "Salvando..." : "Salvar"}
              </Button>
              <Button
                variant="danger"
                onClick={() => deleteBanner(banner.id)}
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
