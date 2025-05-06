"use client";

import { usePollStore } from "@/store/usePollStore";
import { Card } from "@/components/ui/card";

export default function PollResult() {
  const { polls, answers } = usePollStore();

  const answeredPolls = polls.filter((poll) => answers[poll.id] !== undefined);

  if (answeredPolls.length === 0) {
    return (
      <p className="text-muted-foreground">
        You haven&apos;t voted in any polls yet.
      </p>
    );
  }

  return (
    <div className="space-y-6">
      {answeredPolls.map((poll) => {
        const selectedIndex = answers[poll.id];
        const selectedOption = poll.options[selectedIndex];

        return (
          <Card key={poll.id} className="p-6 gap-3">
            <p className="font-medium">Question: {poll.question}</p>
            <p className="text-sm text-muted-foreground">
              Your answer:{" "}
              <span className="text-primary font-semibold">
                {selectedOption}
              </span>
            </p>
          </Card>
        );
      })}
    </div>
  );
}
