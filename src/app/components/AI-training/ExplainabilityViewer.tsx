"use client";

import { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { ExplainabilityCard } from "@/app/types/ai/AI-training/training";
import { mockExplainabilityCards } from "@/app/data/ai/AI-training/mockExplainabilityCards";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type ExplainabilityViewerProps = {
  title?: string;
  modelId: string;
};

export default function ExplainabilityViewer({
  title = "Explainability Report",
  modelId,
}: ExplainabilityViewerProps) {
  const [cards, setCards] = useState<ExplainabilityCard[]>([]);

  useEffect(() => {
    // In the future this could fetch real data
    setCards(mockExplainabilityCards);
  }, []);

  const handleDownload = (markdown: string, filename: string) => {
    const blob = new Blob([markdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${modelId}_${filename}`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">{title}</h2>
      </div>

      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="border border-muted-foreground/10 shadow-sm hover:shadow-md transition-all">
            <CardHeader className="flex flex-row justify-between items-center">
              <CardTitle className="text-lg">{card.title}</CardTitle>
              <Button
                size="sm"
                variant="outline"
                onClick={() =>
                  handleDownload(card.markdownContent, card.exportFileName)
                }
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </CardHeader>

            <CardContent className="space-y-4">
              <ScrollArea className="max-h-48 pr-2">
                <div className="prose prose-sm text-muted-foreground max-w-none">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {card.markdownContent}
                  </ReactMarkdown>
                </div>
              </ScrollArea>

              {card.imageUrl && (
                <div className="border rounded-lg p-2 bg-muted/50">
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    className="w-full rounded"
                  />
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
