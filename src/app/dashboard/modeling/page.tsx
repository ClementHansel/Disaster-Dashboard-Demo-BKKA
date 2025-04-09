"use client";

import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { mockModels as initialModels } from "@/app/data/ai/modeling/mockModels";

// ✅ Component imports

import ModelTable from "@/app/components/modeling/ModelTable";
import ModelFilters from "@/app/components/modeling/ModelFilters";
import ModelForm from "@/app/components/modeling/ModelForm";
import ModelSearch from "@/app/components/modeling/ModelSearch";
import CompareModelDrawer from "@/app/components/modeling/CompareModelModal";
import ModelLogsModal from "@/app/components/modeling/ModelLogsModal";
import DeleteConfirmationModal from "@/app/components/modeling/DeleteConfirmationModal";
import { Model, ModelLog } from "@/app/types/ai/modeling/model";

const ModelingPage = () => {
  const router = useRouter();

  // Model management
  const [models, setModels] = useState(initialModels);
  const [selectedModelIds, setSelectedModelIds] = useState<string[]>([]);
  const [modelSearchTerm, setModelSearchTerm] = useState("");

  // UI states
  const [showCompareDrawer, setShowCompareDrawer] = useState(false);
  const [showLogsModal, setShowLogsModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [selectedModelId, setSelectedModelId] = useState<string | null>(null);
  const [selectedLogs, setSelectedLogs] = useState<ModelLog[]>([]);
  const [selectedModelName, setSelectedModelName] = useState<string>("");

  // Filtered models
  const filteredModels = useMemo(() => {
    return models.filter((model) =>
      model.name.toLowerCase().includes(modelSearchTerm.toLowerCase())
    );
  }, [models, modelSearchTerm]);

  return (
    <div className="p-6 space-y-10">
      {/* 🧠 Page Header */}
      <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Modeling Workspace
          </h1>
          <p className="text-gray-500 text-sm">
            Create, upload, and manage models. Connect them with dataset groups
            for training.
          </p>
        </div>
      </header>

      {/* 🧪 Model Creation */}
      <section>
        <ModelForm
          onSubmit={(data) => {
            const newModel: Model = {
              id: crypto.randomUUID(),
              name: data.name,
              version: data.version,
              description: data.description,
              createdAt: new Date().toISOString(),
              datasetsType: data.datasetsType,
              status: "Draft",
              ownerRole: "Admin",
              tags: [],
              accuracy: 0,
            };
            setModels((prev) => [...prev, newModel]);
          }}
        />
      </section>

      {/* 📋 Model Table + Filters */}
      <section className="space-y-6">
        <div className="bg-white shadow rounded-xl p-6 border border-gray-100 space-y-6">
          <div className="flex flex-col items-center justify-between gap-4">
            <ModelSearch
              value={modelSearchTerm}
              onChange={setModelSearchTerm}
              onSearch={setModelSearchTerm}
            />
          </div>

          <ModelFilters
            onFilterChange={(filters) => console.log("Filters:", filters)}
          />

          <div className="bg-white shadow rounded-xl p-4 border border-gray-100">
            <ModelTable
              models={filteredModels}
              selectedIds={selectedModelIds}
              onSelect={(id) =>
                setSelectedModelIds((prev) =>
                  prev.includes(id)
                    ? prev.filter((selectedId) => selectedId !== id)
                    : [...prev, id]
                )
              }
              searchTerm={modelSearchTerm}
              onRowClick={(id) => router.push(`/dashboard/models/${id}`)}
              onCompare={(model) => {
                setSelectedModelId(model.id);
                setShowCompareDrawer(true);
              }}
              onShowLogs={(model) => {
                setSelectedModelId(model.id);
                setSelectedModelName(model.name);
                setSelectedLogs(model.logs || []);
                setShowLogsModal(true);
              }}
              onDeleteModel={() => setShowDeleteModal(true)}
            />
          </div>
        </div>
      </section>

      {/* 🪟 Modals and Drawers */}
      <CompareModelDrawer
        isOpen={showCompareDrawer}
        onClose={() => setShowCompareDrawer(false)}
        currentModelId={selectedModelId ?? ""}
        models={models}
      />

      <ModelLogsModal
        isOpen={showLogsModal}
        onClose={() => setShowLogsModal(false)}
        logs={selectedLogs}
        modelName={selectedModelName}
      />

      <DeleteConfirmationModal
        open={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={() => {
          setModels((prev) =>
            prev.filter((model) => !selectedModelIds.includes(model.id))
          );
          setSelectedModelIds([]);
          setShowDeleteModal(false);
        }}
        title="Delete Model"
        message="Are you sure you want to delete this model?"
      />
    </div>
  );
};

export default ModelingPage;
