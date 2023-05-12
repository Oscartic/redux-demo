import { create } from 'zustand';

const useCounterStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => {
    if (state.count === 0) return ({ count: 0 })
    return ({ count: state.count - 1 })
  }),
}));

export default useCounterStore;