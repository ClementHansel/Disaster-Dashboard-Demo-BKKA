"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type ModelFormProps = {
  onSubmit: (data: { name: string; version: string }) => void;
  initialData?: { name: string; version: string };
};

export default function ModelForm({ onSubmit, initialData }: ModelFormProps) {
  const [name, setName] = useState(initialData?.name || "");
  const [version, setVersion] = useState(initialData?.version || "");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ name, version });
      }}
      className="space-y-4"
    >
      <input
        className="w-full p-2 border rounded-lg"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Model Name"
      />
      <input
        className="w-full p-2 border rounded-lg"
        value={version}
        onChange={(e) => setVersion(e.target.value)}
        placeholder="Version"
      />
      <Button type="submit">Save</Button>
    </form>
  );
}
