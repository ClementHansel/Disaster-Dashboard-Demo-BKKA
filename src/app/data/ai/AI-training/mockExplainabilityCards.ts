import { ExplainabilityCard } from "@/app/types/ai/AI-training/training";

export const mockExplainabilityCards: ExplainabilityCard[] = [
  {
    id: "card-001",
    title: "Model Explanation",
    description: `This section explains the machine learning model, its architecture, and how it was trained.
It also outlines the role of various features and how the model makes key decisions.`,
    imageUrl: "https://via.placeholder.com/300x200",
    markdownContent: `### Model Architecture  
The model uses a multi-layer neural network trained with a supervised learning algorithm. It incorporates regularization and dropout to prevent overfitting.`,
    exportFileName: "model-explanation.md",
    createdAt: "2025-04-01T10:00:00Z",
  },
  {
    id: "card-002",
    title: "Evaluation Metrics",
    description: `This card provides insights into the performance of the model using key metrics such as accuracy, precision, recall, and F1-score.`,
    imageUrl: "https://via.placeholder.com/300x200",
    markdownContent: `### Evaluation Results  
- **Accuracy:** 94.2%  
- **Precision:** 92.8%  
- **Recall:** 93.5%  
- **F1-score:** 93.1%`,
    exportFileName: "evaluation-metrics.md",
    createdAt: "2025-04-02T14:20:00Z",
  },
  {
    id: "card-003",
    title: "Training History",
    description: `Displays the model's learning journey, highlighting the training and validation loss over time.`,
    imageUrl: "https://via.placeholder.com/300x200",
    markdownContent: `### Training History  
The model was trained over 50 epochs with early stopping applied. Loss steadily decreased and validation accuracy stabilized around epoch 42.`,
    exportFileName: "training-history.md",
    createdAt: "2025-04-03T11:40:00Z",
  },
  {
    id: "card-004",
    title: "Feature Importance",
    description: `Highlights the relative importance of each input feature in the model’s predictions.`,
    imageUrl: "https://via.placeholder.com/300x200",
    markdownContent: `### Top Features  
1. Sea Temperature  
2. Wind Speed  
3. Sensor Depth  
4. Timestamp  
5. Salinity`,
    exportFileName: "feature-importance.md",
    createdAt: "2025-04-04T16:10:00Z",
  },
  {
    id: "card-005",
    title: "Confusion Matrix",
    description: `Visual representation of true vs predicted classifications, showcasing the model’s strengths and weaknesses.`,
    imageUrl: "https://via.placeholder.com/300x200",
    markdownContent: `### Confusion Matrix  
|          | Predicted Positive | Predicted Negative |  
|----------|--------------------|--------------------|  
| Actual Positive | TP: 92 | FN: 8 |  
| Actual Negative | FP: 5 | TN: 95 |`,
    exportFileName: "confusion-matrix.md",
    createdAt: "2025-04-05T09:30:00Z",
  },
];
