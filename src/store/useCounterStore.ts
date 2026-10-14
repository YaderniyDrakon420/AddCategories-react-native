import { create } from "zustand";

type TypeActionWithPayload = (payload: number) => void;
type TypeAction = () => void;

type CounterStore = {
  count: number;
  up: TypeActionWithPayload;
  down: TypeActionWithPayload;
  reset: TypeAction;
};

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  up: (payload) => {
    set((state) => ({
      count: state.count + payload,
    }));
  },
  down: (payload) => {
    set((state) => ({
      count: state.count - payload > 0 ? state.count - payload : 0,
    }));
  },
  reset: () => {
    set({ count: 0 });
  },
}));