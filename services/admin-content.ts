"use client";

import { z } from "zod";

import { createClient } from "@/lib/supabase/browser";

const registroSchema = z.record(z.any());

export async function upsertRegistro<T extends object>(
  tabela: string,
  registro: T
) {
  registroSchema.parse(registro as Record<string, unknown>);

  const supabase = createClient();
  const payload = {
    ...registro,
    updated_at: new Date().toISOString()
  };

  const { data, error } = await supabase
    .from(tabela)
    .upsert(payload)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function removerRegistro(tabela: string, id: string) {
  const supabase = createClient();
  const { error } = await supabase.from(tabela).delete().eq("id", id);

  if (error) {
    throw error;
  }
}

export async function uploadImagem(file: File, pasta: string) {
  const supabase = createClient();
  const fileName = `${crypto.randomUUID()}-${file.name.replace(/\s+/g, "-")}`;
  const filePath = `${pasta}/${fileName}`;

  const { error } = await supabase.storage
    .from("site-assets")
    .upload(filePath, file, {
      cacheControl: "3600",
      upsert: false
    });

  if (error) {
    throw error;
  }

  const {
    data: { publicUrl }
  } = supabase.storage.from("site-assets").getPublicUrl(filePath);

  return publicUrl;
}
