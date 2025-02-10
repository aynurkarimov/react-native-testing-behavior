import { renderHook, waitFor } from "@testing-library/react-native";
import { act } from "react";

import useAsyncCounter from "./useAsyncCounter";

describe("useAsyncCounter", () => {
  it("returns empty counter", () => {
    const { result } = renderHook(() => useAsyncCounter());

    expect(result.current.counter).toBe(0);
  });

  // With fake timers (delay is big, but test is fast)
  describe("when incremented", () => {
    it("returns incremented value", async () => {
      jest.useFakeTimers();
      const { result } = renderHook(() => useAsyncCounter());

      act(() => {
        result.current.increment();
        result.current.increment();
        result.current.increment();
      });
      jest.advanceTimersByTime(10_000);

      await waitFor(() => expect(result.current.counter).toBe(3));

      jest.useRealTimers();
    });
  });

  // With real timers (delay is small, but test is slow)
  describe("when decremented", () => {
    it("returns decremented value", async () => {
      const { result } = renderHook(() => useAsyncCounter());

      act(() => {
        result.current.decrement();
        result.current.decrement();
      });

      await waitFor(() => expect(result.current.counter).toBe(-2));
    });
  });
});
