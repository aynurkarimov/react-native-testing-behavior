/* eslint-disable prettier/prettier */
import {
  fireEvent,
  render,
  screen,
  within,
} from "@testing-library/react-native";
import LibraryBasedInput from "./LibraryBasedInput";

describe("LibraryBasedInput", () => {
  it("be accessible from screens", () => {
    render(<LibraryBasedInput testID="libraryBasedInput" />);

    expect(screen.getByTestId("libraryBasedInput")).toBeOnTheScreen();
  });

  it("shows input-adapter", () => {
    render(<LibraryBasedInput />);

    const container = within(screen.getByTestId("adapterPaperInput"));
    expect(container.getByTestId("input")).toBeOnTheScreen();
  });

  it("shows placeholder", () => {
    render(<LibraryBasedInput placeholder="Boring placeholder" />);

    expect(screen.getByPlaceholderText("Boring placeholder")).toBeOnTheScreen();
  });

  describe("when value is changed", () => {
    it("calls `onChangeText` function with new value", () => {
      const onChangeText = jest.fn();
      render(
        <LibraryBasedInput
          placeholder="emptiness"
          onChangeText={onChangeText}
        />
      );

      const input = screen.getByPlaceholderText("emptiness");
      fireEvent(input, "changeText", "new value");

      expect(onChangeText).toHaveBeenCalledTimes(1);
      expect(onChangeText).toHaveBeenCalledWith("new value");
    });
  });

  describe("when mode is provided", () => {
    it("shows mode in requested value", () => {
      render(<LibraryBasedInput mode="outlined" />);

      // This one is interesting...
      expect(screen.getByTestId("adapterPaperInput")).toHaveStyle({
        backgroundColor: "outlined",
      });
    });
  });
});
