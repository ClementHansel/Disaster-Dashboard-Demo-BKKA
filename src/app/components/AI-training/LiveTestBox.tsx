"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, UploadCloud } from "lucide-react";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  HistoryEntry,
  InputValues,
  RegionType,
} from "@/app/types/ai/AI-training/training";

export default function LiveTestBox({ modelId }: { modelId?: string }) {
  const [inputs, setInputs] = useState<InputValues>({
    region: "coastal",
    rainfall: 50,
    temperature: 25,
    soilMoisture: 40,
  });

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [prediction, setPrediction] = useState<string | null>(null);
  const [explanation, setExplanation] = useState<string | null>(null);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [loading, setLoading] = useState(false);

  const runTest = () => {
    setLoading(true);
    setPrediction(null);
    setExplanation(null);

    console.log("🧠 Mock testing with model ID:", modelId);
    console.log("📦 Inputs:", inputs);
    if (uploadedFile) {
      console.log("📄 Uploaded File:", uploadedFile.name);
    }

    // Mock delay to simulate model inference
    setTimeout(() => {
      const { rainfall, temperature, soilMoisture } = inputs;

      // Mock logic using modelId to modify risk weight multipliers
      const weights =
        modelId === "model-v2"
          ? { rain: 0.4, temp: 0.3, soil: 0.3 }
          : { rain: 0.5, temp: 0.2, soil: 0.3 };

      const riskScore =
        rainfall * weights.rain +
        temperature * weights.temp +
        soilMoisture * weights.soil;

      const result =
        riskScore > 100
          ? "High Risk"
          : riskScore > 50
          ? "Moderate Risk"
          : "Low Risk";

      const explanationText = `Risk score of ${riskScore.toFixed(2)} (Model: ${
        modelId || "default"
      }) — based on rainfall (${rainfall}mm), temperature (${temperature}°C), and soil moisture (${soilMoisture}%).`;

      setPrediction(result);
      setExplanation(explanationText);
      setHistory((prev) => [
        ...prev,
        {
          inputs,
          result,
          explanation: explanationText,
          timestamp: new Date().toLocaleString(),
        },
      ]);
      setLoading(false);
    }, 1000);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Live Model Test</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <Label>Region</Label>
            <Select
              value={inputs.region}
              onValueChange={(val: RegionType) =>
                setInputs({ ...inputs, region: val })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="coastal">Coastal</SelectItem>
                <SelectItem value="inland">Inland</SelectItem>
                <SelectItem value="mountain">Mountain</SelectItem>
              </SelectContent>
            </Select>

            <Label>Upload CSV or Image</Label>
            <Input
              type="file"
              accept=".csv,image/*"
              onChange={(e) => setUploadedFile(e.target.files?.[0] ?? null)}
            />
            {uploadedFile && (
              <p className="text-sm text-muted-foreground">
                <UploadCloud className="inline-block mr-2 w-4 h-4" />
                {uploadedFile.name}
              </p>
            )}
          </div>

          <div className="space-y-4">
            <Label>Rainfall (mm)</Label>
            <Slider
              value={[inputs.rainfall]}
              onValueChange={([val]: number[]) =>
                setInputs({ ...inputs, rainfall: val })
              }
              max={200}
            />
            <Label>Temperature (°C)</Label>
            <Slider
              value={[inputs.temperature]}
              onValueChange={([val]: number[]) =>
                setInputs({ ...inputs, temperature: val })
              }
              max={50}
            />
            <Label>Soil Moisture (%)</Label>
            <Slider
              value={[inputs.soilMoisture]}
              onValueChange={([val]: number[]) =>
                setInputs({ ...inputs, soilMoisture: val })
              }
              max={100}
            />
          </div>
        </div>

        <Button onClick={runTest} disabled={loading} className="w-full">
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Testing...
            </>
          ) : (
            "Run Test"
          )}
        </Button>

        {prediction && (
          <div
            className={cn(
              "p-4 rounded-md text-white font-semibold text-center",
              prediction === "High Risk"
                ? "bg-red-500"
                : prediction === "Moderate Risk"
                ? "bg-yellow-500"
                : "bg-green-500"
            )}
          >
            Prediction: {prediction}
          </div>
        )}

        {explanation && (
          <p className="text-sm text-muted-foreground text-center">
            Why? {explanation}
          </p>
        )}

        {history.length > 0 && (
          <div className="mt-6">
            <h4 className="font-semibold mb-2">Previous Tests</h4>
            <div className="space-y-2 max-h-48 overflow-auto">
              {history.map((h, i) => (
                <div
                  key={i}
                  className="border rounded p-2 text-sm bg-muted text-muted-foreground"
                >
                  <p>{h.timestamp}</p>
                  <p>
                    Inputs: R={h.inputs.rainfall}, T={h.inputs.temperature}, S=
                    {h.inputs.soilMoisture}
                  </p>
                  <p>Prediction: {h.result}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
