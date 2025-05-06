import { create } from "zustand";
import { persist } from "zustand/middleware";
import { nanoid } from "nanoid";
import { Poll } from "@/types";

interface PollStore {
  polls: Poll[];
  answers: Record<string, number>;
  addPoll: (question: string, options: string[]) => void;
  answerPoll: (pollId: string, optionIndex: number) => void;
  resetAnswers: () => void;
}

export const usePollStore = create<PollStore>()(
  persist(
    (set) => ({
      polls: [],
      answers: {},

      addPoll: (question, options) =>
        set((state) => ({
          polls: [
            ...state.polls,
            {
              id: nanoid(),
              question,
              options,
            },
          ],
        })),

      answerPoll: (pollId, optionIndex) =>
        set((state) => ({
          answers: {
            ...state.answers,
            [pollId]: optionIndex,
          },
        })),

      resetAnswers: () => set({ answers: {} }),
    }),
    {
      name: "poll-storage",
    }
  )
);
