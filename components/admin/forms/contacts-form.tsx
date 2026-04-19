"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { removerRegistro, upsertRegistro } from "@/services/admin-content";
import type { Contato } from "@/types/site";

interface ContactsFormProps {
  initialValue: Contato[];
  disabled?: boolean;
}

export function ContactsForm({
  initialValue,
  disabled = false
}: ContactsFormProps) {
  const [contacts, setContacts] = useState(initialValue);
  const [status, setStatus] = useState<string | null>(null);
  const [savingId, setSavingId] = useState<string | null>(null);

  function updateContact(
    id: string,
    field: keyof Contato,
    value: string | boolean | number | null
  ) {
    setContacts((current) =>
      current.map((contact) =>
        contact.id === id ? { ...contact, [field]: value } : contact
      )
    );
  }

  function addContact() {
    setContacts((current) => [
      ...current,
      {
        id: crypto.randomUUID(),
        tipo: "email",
        rotulo: "Novo contato",
        valor: "",
        href: "",
        icone: "mail",
        ordem: current.length + 1,
        ativo: true
      }
    ]);
  }

  async function saveContact(contact: Contato) {
    setSavingId(contact.id);
    setStatus(null);

    try {
      await upsertRegistro("contatos", contact);
      setStatus(`Contato "${contact.rotulo}" salvo.`);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Erro ao salvar contato.");
    } finally {
      setSavingId(null);
    }
  }

  async function deleteContact(id: string) {
    try {
      await removerRegistro("contatos", id);
      setContacts((current) => current.filter((contact) => contact.id !== id));
      setStatus("Contato removido.");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Erro ao remover contato.");
    }
  }

  return (
    <div className="space-y-6">
      <Button variant="secondary" onClick={addContact} disabled={disabled}>
        Adicionar contato
      </Button>
      {[...contacts]
        .sort((a, b) => a.ordem - b.ordem)
        .map((contact) => (
          <Card key={contact.id} className="rounded-[28px]">
            <div className="grid gap-5 md:grid-cols-4">
              <Input
                value={contact.tipo}
                onChange={(event) =>
                  updateContact(contact.id, "tipo", event.target.value)
                }
                disabled={disabled}
              />
              <Input
                value={contact.rotulo}
                onChange={(event) =>
                  updateContact(contact.id, "rotulo", event.target.value)
                }
                disabled={disabled}
              />
              <Input
                value={contact.icone ?? ""}
                onChange={(event) =>
                  updateContact(contact.id, "icone", event.target.value)
                }
                disabled={disabled}
              />
              <Input
                type="number"
                value={contact.ordem}
                onChange={(event) =>
                  updateContact(contact.id, "ordem", Number(event.target.value))
                }
                disabled={disabled}
              />
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-[1fr_1fr_auto]">
              <Input
                value={contact.valor}
                onChange={(event) =>
                  updateContact(contact.id, "valor", event.target.value)
                }
                disabled={disabled}
              />
              <Input
                value={contact.href ?? ""}
                onChange={(event) =>
                  updateContact(contact.id, "href", event.target.value)
                }
                disabled={disabled}
              />
              <div className="flex items-end">
                <label className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700">
                  <input
                    type="checkbox"
                    checked={contact.ativo}
                    onChange={(event) =>
                      updateContact(contact.id, "ativo", event.target.checked)
                    }
                    disabled={disabled}
                  />
                  Ativo
                </label>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                onClick={() => saveContact(contact)}
                disabled={disabled || savingId === contact.id}
              >
                {savingId === contact.id ? "Salvando..." : "Salvar"}
              </Button>
              <Button
                variant="danger"
                onClick={() => deleteContact(contact.id)}
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
