"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { removerRegistro, upsertRegistro } from "@/services/admin-content";
import type { Vaga } from "@/types/site";

interface JobsFormProps {
  initialValue: Vaga[];
  disabled?: boolean;
}

export function JobsForm({ initialValue, disabled = false }: JobsFormProps) {
  const [jobs, setJobs] = useState(initialValue);
  const [status, setStatus] = useState<string | null>(null);
  const [savingId, setSavingId] = useState<string | null>(null);

  function updateJob(
    id: string,
    field: keyof Vaga,
    value: string | boolean | number | null
  ) {
    setJobs((current) =>
      current.map((job) => (job.id === id ? { ...job, [field]: value } : job))
    );
  }

  function addJob() {
    setJobs((current) => [
      ...current,
      {
        id: crypto.randomUUID(),
        titulo: "Nova vaga",
        localizacao: "Remoto",
        modalidade: "CLT",
        descricao: "Descrição da vaga",
        requisitos: "Requisitos da vaga",
        link_candidatura: "mailto:rh@empresa.com",
        ordem: current.length + 1,
        ativo: true
      }
    ]);
  }

  async function saveJob(job: Vaga) {
    setSavingId(job.id);
    setStatus(null);

    try {
      await upsertRegistro("vagas", job);
      setStatus(`Vaga "${job.titulo}" salva.`);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Erro ao salvar vaga.");
    } finally {
      setSavingId(null);
    }
  }

  async function deleteJob(id: string) {
    try {
      await removerRegistro("vagas", id);
      setJobs((current) => current.filter((job) => job.id !== id));
      setStatus("Vaga removida.");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Erro ao remover vaga.");
    }
  }

  return (
    <div className="space-y-6">
      <Button variant="secondary" onClick={addJob} disabled={disabled}>
        Adicionar vaga
      </Button>
      {[...jobs]
        .sort((a, b) => a.ordem - b.ordem)
        .map((job) => (
          <Card key={job.id} className="rounded-[28px]">
            <div className="grid gap-5 md:grid-cols-4">
              <Input
                value={job.titulo}
                onChange={(event) => updateJob(job.id, "titulo", event.target.value)}
                disabled={disabled}
              />
              <Input
                value={job.localizacao}
                onChange={(event) =>
                  updateJob(job.id, "localizacao", event.target.value)
                }
                disabled={disabled}
              />
              <Input
                value={job.modalidade}
                onChange={(event) =>
                  updateJob(job.id, "modalidade", event.target.value)
                }
                disabled={disabled}
              />
              <Input
                type="number"
                value={job.ordem}
                onChange={(event) =>
                  updateJob(job.id, "ordem", Number(event.target.value))
                }
                disabled={disabled}
              />
            </div>

            <div className="mt-5">
              <Textarea
                value={job.descricao}
                onChange={(event) =>
                  updateJob(job.id, "descricao", event.target.value)
                }
                disabled={disabled}
              />
            </div>

            <div className="mt-5">
              <Textarea
                value={job.requisitos}
                onChange={(event) =>
                  updateJob(job.id, "requisitos", event.target.value)
                }
                disabled={disabled}
              />
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-[1fr_auto]">
              <Input
                value={job.link_candidatura ?? ""}
                onChange={(event) =>
                  updateJob(job.id, "link_candidatura", event.target.value)
                }
                disabled={disabled}
              />
              <div className="flex items-end">
                <label className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700">
                  <input
                    type="checkbox"
                    checked={job.ativo}
                    onChange={(event) =>
                      updateJob(job.id, "ativo", event.target.checked)
                    }
                    disabled={disabled}
                  />
                  Vaga ativa
                </label>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                onClick={() => saveJob(job)}
                disabled={disabled || savingId === job.id}
              >
                {savingId === job.id ? "Salvando..." : "Salvar"}
              </Button>
              <Button
                variant="danger"
                onClick={() => deleteJob(job.id)}
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
