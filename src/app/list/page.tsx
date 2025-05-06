"use client";
import PollList from "@/components/poll/PollList";
import React from "react";

export default function ListPage() {
  return (
    <main className="max-w-4xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold">Created Polls</h1>
      <PollList />
    </main>
  );
}
