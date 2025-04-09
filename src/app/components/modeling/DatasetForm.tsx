"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type DatasetFormProps = {
  onSubmit: (data: { name: string; file: File }) => void;
};

export default function DatasetForm({ onSubmit }: DatasetFormProps) {
  const [name, setName] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Dataset name is required.");
      return;
    }

    if (!file) {
      setError("Please upload a file.");
      return;
    }

    setError("");
    onSubmit({ name, file });

    // Optional: reset form
    setName("");
    setFile(null);
    (document.getElementById("dataset-file") as HTMLInputElement).value = "";
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="dataset-name"
          className="block mb-1 text-sm font-medium"
        >
          Dataset Name
        </label>
        <input
          id="dataset-name"
          className="w-full p-2 border rounded-lg"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter dataset name"
        />
      </div>

      <div>
        <label
          htmlFor="dataset-file"
          className="block mb-1 text-sm font-medium"
        >
          Upload File
        </label>
        <input
          id="dataset-file"
          type="file"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="w-full p-2 border rounded-lg"
        />
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <Button type="submit" disabled={!name.trim() || !file}>
        Upload
      </Button>
    </form>
  );
}
