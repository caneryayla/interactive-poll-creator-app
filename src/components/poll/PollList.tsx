"use client";

import { usePollStore } from "@/store/usePollStore";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function PollList() {
  const { polls, answers, answerPoll } = usePollStore();

  const handleVote = (pollId: string, optionIndex: number) => {
    if (answers[pollId] !== undefined) {
      toast.error("You have already voted in this poll.");
      return;
    }

    answerPoll(pollId, optionIndex);
    toast.success("Your vote has been recorded.");
  };

  if (polls.length === 0) {
    return (
      <p className="text-muted-foreground">No survey has been created yet.</p>
    );
  }

  return (
    <div className="space-y-6">
      {polls.map((poll) => (
        <Card key={poll.id} className="p-6">
          <p className="font-medium">Question: {poll.question}</p>

          <RadioGroup
            disabled={answers[poll.id] !== undefined}
            onValueChange={(val) => handleVote(poll.id, Number(val))}
            value={answers[poll.id]?.toString() ?? ""}
          >
            {poll.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem
                  value={index.toString()}
                  id={`${poll.id}-${index}`}
                />
                <Label htmlFor={`${poll.id}-${index}`}>{option}</Label>
              </div>
            ))}
          </RadioGroup>

          {answers[poll.id] !== undefined && (
            <p className="text-sm text-green-600">
              The option you voted for: {poll.options[answers[poll.id]]}
            </p>
          )}
        </Card>
      ))}
    </div>
  );
}
