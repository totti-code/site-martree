"use client";

import type { FormEvent } from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFileUpload } from "@/hooks/use-file-upload";
import { upsertRegistro } from "@/services/admin-content";
import type { ConfiguracaoEmpresa } from "@/types/site";

interface CompanySettingsFormProps {
  initialValue: ConfiguracaoEmpresa;
  disabled?: boolean;
}

export function CompanySettingsForm({
  initialValue,
  disabled = false
}: CompanySettingsFormProps) {
  const [form, setForm] = useState(initialValue);
  const [status, setStatus] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const { upload, uploading } = useFileUpload();

  function setField<K extends keyof ConfiguracaoEmpresa>(
    field: K,
    value: ConfiguracaoEmpresa[K]
  ) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleImageChange(file?: File | null) {
    if (!file) {
      return;
    }

    const imageUrl = await upload(file, "empresa");
    setField("logo_url", imageUrl);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setStatus(null);

    try {
      await upsertRegistro("configuracoes_empresa", form);
      setStatus("Configurações salvas com sucesso.");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Erro ao salvar.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <Card className="rounded-[32px]">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Nome da empresa
            </label>
            <Input
              value={form.nome}
              onChange={(event) => setField("nome", event.target.value)}
              disabled={disabled}
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Slogan
            </label>
            <Input
              value={form.slogan}
              onChange={(event) => setField("slogan", event.target.value)}
              disabled={disabled}
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Resumo institucional
          </label>
          <Textarea
            value={form.resumo}
            onChange={(event) => setField("resumo", event.target.value)}
            disabled={disabled}
          />
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Missão</label>
            <Textarea
              value={form.missao}
              onChange={(event) => setField("missao", event.target.value)}
              disabled={disabled}
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Visão</label>
            <Textarea
              value={form.visao}
              onChange={(event) => setField("visao", event.target.value)}
              disabled={disabled}
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Valores</label>
            <Textarea
              value={form.valores}
              onChange={(event) => setField("valores", event.target.value)}
              disabled={disabled}
            />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              CTA principal
            </label>
            <Input
              value={form.cta_primario_label}
              onChange={(event) => setField("cta_primario_label", event.target.value)}
              disabled={disabled}
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Link CTA principal
            </label>
            <Input
              value={form.cta_primario_href}
              onChange={(event) => setField("cta_primario_href", event.target.value)}
              disabled={disabled}
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              CTA secundário
            </label>
            <Input
              value={form.cta_secundario_label}
              onChange={(event) => setField("cta_secundario_label", event.target.value)}
              disabled={disabled}
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Link CTA secundário
            </label>
            <Input
              value={form.cta_secundario_href}
              onChange={(event) => setField("cta_secundario_href", event.target.value)}
              disabled={disabled}
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Logo ou imagem institucional
          </label>
          <Input
            value={form.logo_url ?? ""}
            onChange={(event) => setField("logo_url", event.target.value)}
            placeholder="URL da imagem"
            disabled={disabled}
          />
          <Input
            type="file"
            accept="image/*"
            className="mt-3"
            onChange={(event) => handleImageChange(event.target.files?.[0])}
            disabled={disabled}
          />
          {form.logo_url ? (
            <img
              src={form.logo_url}
              alt={form.nome}
              className="mt-4 h-28 w-40 rounded-2xl object-cover"
            />
          ) : null}
        </div>

        {status ? <p className="text-sm text-slate-600">{status}</p> : null}

        <Button type="submit" disabled={disabled || saving || uploading}>
          {saving || uploading ? "Salvando..." : "Salvar empresa"}
        </Button>
      </form>
    </Card>
  );
}
