"use client";

import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface PollPreviewProps {
  question: string;
  options: string[];
}

export default function PollPreview({ question, options }: PollPreviewProps) {
  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold">Poll Preview</h2>

      {question ? (
        <p className="text-base font-medium">{question}</p>
      ) : (
        <p className="text-muted-foreground">What is your question ?</p>
      )}

      <RadioGroup className="space-y-2">
        {options.map((option, index) => (
          <div key={index} className="flex items-center space-x-2">
            <RadioGroupItem
              value={`preview-${index}`}
              id={`preview-${index}`}
              disabled
            />
            <Label htmlFor={`preview-${index}`}>
              {option || `Seçenek ${index + 1}`}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </Card>
  );
}
