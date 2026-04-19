"use client";

import { useState } from "react";

import { uploadImagem } from "@/services/admin-content";

export function useFileUpload() {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function upload(file: File, folder: string) {
    setUploading(true);
    setError(null);

    try {
      return await uploadImagem(file, folder);
    } catch (uploadError) {
      const message =
        uploadError instanceof Error ? uploadError.message : "Falha no upload.";
      setError(message);
      throw uploadError;
    } finally {
      setUploading(false);
    }
  }

  return {
    upload,
    uploading,
    error
  };
}
