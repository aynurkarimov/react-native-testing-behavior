import useCounter from "./useCounter";

export default function useAsyncCounter() {
  const { counter, increment, decrement } = useCounter();

  const delay = async (ms: number) => {
    await new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, ms);
    });
  };

  return {
    counter,
    increment: async () => {
      await delay(10_000);
      increment();
    },
    decrement: async () => {
      await delay(50);
      decrement();
    },
  };
}
