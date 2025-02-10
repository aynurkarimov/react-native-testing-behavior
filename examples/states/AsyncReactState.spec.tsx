import {
  render,
  screen,
  userEvent,
  waitFor,
  within,
} from "@testing-library/react-native";
import AsyncReactState from "./AsyncReactState";

describe("AsyncReactState", () => {
  it("shows counter as zero", () => {
    render(<AsyncReactState />);

    expect(screen.getByText("0")).toBeOnTheScreen();
  });

  it("shows increment button and its text", () => {
    render(<AsyncReactState />);

    const incrementButton = screen.getByRole("button", { name: "increment" });
    expect(incrementButton).toBeOnTheScreen();
    expect(within(incrementButton).getByText(/Increment/)).toBeOnTheScreen();
  });

  it("shows decrement button and its text", () => {
    render(<AsyncReactState />);

    const decrementButton = screen.getByRole("button", { name: "decrement" });
    expect(decrementButton).toBeOnTheScreen();
    expect(within(decrementButton).getByText(/Decrement/)).toBeOnTheScreen();
  });

  // With fake timers (delay is big, but test is fast)
  describe("when increment button is pressed", () => {
    it("shows incremented value", async () => {
      jest.useFakeTimers();
      render(<AsyncReactState />);

      const incrementButton = screen.getByRole("button", { name: "increment" });
      const user = userEvent.setup({
        advanceTimers: () => jest.advanceTimersByTime(10_000),
      });
      await user.press(incrementButton);
      await user.press(incrementButton);
      await user.press(incrementButton);

      // eslint-disable-next-line testing-library/prefer-find-by
      await waitFor(() => expect(screen.getByText(/3/)).toBeOnTheScreen());

      jest.useRealTimers();
    });
  });

  // With real timers (delay is small, but test is slow)
  describe("when decrement button is pressed", () => {
    it("shows decremented value", async () => {
      render(<AsyncReactState />);

      const decrementButton = screen.getByRole("button", { name: "decrement" });
      const user = userEvent.setup();
      await user.press(decrementButton);
      await user.press(decrementButton);

      // eslint-disable-next-line testing-library/prefer-find-by
      await waitFor(() => expect(screen.getByText(/-2/)).toBeOnTheScreen());
    });
  });
});
