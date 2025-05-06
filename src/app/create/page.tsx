"use client";

import PollForm from "@/components/poll/PollForm";
import PollPreview from "@/components/poll/PollPreview";
import { useState } from "react";

export default function CreatePollPage() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", ""]);

  return (
    <main className="max-w-4xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold">Create a Poll</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <PollForm
          question={question}
          setQuestion={setQuestion}
          options={options}
          setOptions={setOptions}
        />
        <PollPreview question={question} options={options} />
      </div>
    </main>
  );
}
