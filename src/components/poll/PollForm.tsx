"use client";

import { Dispatch, SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePollStore } from "@/store/usePollStore";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

interface PollFormProps {
  question: string;
  setQuestion: Dispatch<SetStateAction<string>>;
  options: string[];
  setOptions: Dispatch<SetStateAction<string[]>>;
}

export default function PollForm({
  question,
  setQuestion,
  options,
  setOptions,
}: PollFormProps) {
  const { addPoll } = usePollStore();

  const handleOptionChange = (value: string, index: number) => {
    const updated = [...options];
    updated[index] = value;
    setOptions(updated);
  };

  const addOption = () => {
    if (options.length < 6) {
      setOptions([...options, ""]);
    }
  };

  const removeOption = (index: number) => {
    if (options.length > 2) {
      const updated = options.filter((_, i) => i !== index);
      setOptions(updated);
    }
  };

  const handleSubmit = () => {
    const trimmedOptions = options.map((o) => o.trim());
    const hasEmpty = trimmedOptions.some((o) => o === "");
    const hasDuplicates =
      new Set(trimmedOptions).size !== trimmedOptions.length;

    if (!question.trim()) {
      toast.error("Question cannot be empty.");
      return;
    }

    if (hasEmpty) {
      toast.error("All options must be filled.");
      return;
    }

    if (hasDuplicates) {
      toast.error("Options must be unique.");
      return;
    }

    addPoll(question.trim(), trimmedOptions);
    toast.success("Anket oluşturuldu");

    setQuestion("");
    setOptions(["", ""]);
  };

  return (
    <Card className="p-6 gap-4">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Poll Question</label>
        <Input
          placeholder="Enter the survey question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>

      {options.map((option, index) => (
        <div key={index} className="flex flex-col gap-2">
          <label className="text-sm font-medium">Option {index + 1}</label>

          <div className="flex gap-2">
            <Input
              placeholder={`Option ${index + 1}`}
              value={option}
              onChange={(e) => handleOptionChange(e.target.value, index)}
            />
            {options.length > 2 && (
              <Button
                variant="destructive"
                className="cursor-pointer"
                onClick={() => removeOption(index)}
              >
                Remove
              </Button>
            )}
          </div>
        </div>
      ))}

      <div className="flex flex-col justify-between gap-4">
        <Button
          variant="outline"
          className={`${
            options.length >= 6 ? "cursor-not-allowed" : "cursor-pointer"
          } `}
          onClick={addOption}
        >
          Add Option
        </Button>
        <Button className="cursor-pointer" onClick={handleSubmit}>
          Submit Poll
        </Button>
      </div>
    </Card>
  );
}
