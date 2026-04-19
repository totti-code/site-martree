"use client";

import { createBrowserClient } from "@supabase/ssr";

import { env } from "@/lib/env";

let client: ReturnType<typeof createBrowserClient> | null = null;

export function createClient() {
  if (!env.supabaseUrl || !env.supabaseAnonKey) {
    throw new Error("As variáveis públicas do Supabase não foram configuradas.");
  }

  if (!client) {
    client = createBrowserClient(env.supabaseUrl, env.supabaseAnonKey);
  }

  return client;
}
