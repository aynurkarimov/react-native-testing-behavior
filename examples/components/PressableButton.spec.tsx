import { fireEvent, render, screen } from "@testing-library/react-native";

import PressableButton from "./PressableButton";

describe("PressableButton", () => {
  it("be accessible from screens", () => {
    render(<PressableButton testID="button" />);

    expect(screen.getByTestId("button")).toBeOnTheScreen();
  });

  it("be enabled", () => {
    render(<PressableButton />);

    expect(screen.getByRole("button")).toBeEnabled();
  });

  it("shows given text", () => {
    render(<PressableButton text="hello from test" />);

    const button = screen.getByRole("button", { name: "hello from test" });
    expect(button).toBeOnTheScreen();
  });

  describe("when button is pressed", () => {
    it("calls `onPress` function", () => {
      const onPress = jest.fn();
      render(<PressableButton onPress={onPress} />);

      const button = screen.getByRole("button");
      fireEvent.press(button);

      expect(onPress).toHaveBeenCalledTimes(1);
    });

    it("changes background to pressed state", () => {
      render(<PressableButton testOnly_pressed />);

      const button = screen.getByRole("button");
      fireEvent.press(button);

      expect(button).toHaveStyle({
        backgroundColor: "red",
      });
    });
  });

  describe("when button is disabled", () => {
    it("prevents calling `onPress` function", () => {
      const onPress = jest.fn();
      render(<PressableButton onPress={onPress} disabled />);

      const button = screen.getByRole("button");
      fireEvent.press(button);

      expect(onPress).toHaveBeenCalledTimes(0);
      expect(button).toBeDisabled();
    });

    it("changes background to disabled state", () => {
      render(<PressableButton disabled />);

      const button = screen.getByRole("button");
      fireEvent.press(button);

      expect(button).toHaveStyle({
        backgroundColor: "#aa422f",
      });
    });
  });
});
