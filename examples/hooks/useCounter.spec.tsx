import { renderHook } from "@testing-library/react-native";
import useCounter from "./useCounter";
import { act } from "react";

describe("useCounter", () => {
  it("returns empty counter", () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.counter).toBe(0);
  });

  describe("when incremented", () => {
    it("returns incremented value", () => {
      const { result } = renderHook(() => useCounter());

      act(() => {
        result.current.increment();
        result.current.increment();
        result.current.increment();
      });

      expect(result.current.counter).toBe(3);
    });
  });

  describe("when decremented", () => {
    it("returns decremented value", () => {
      const { result } = renderHook(() => useCounter());

      act(() => {
        result.current.decrement();
        result.current.decrement();
      });

      expect(result.current.counter).toBe(-2);
    });
  });
});
