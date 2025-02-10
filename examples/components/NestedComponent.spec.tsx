/* eslint-disable prettier/prettier */
import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react-native";
import NestedComponent, { type NestedComponentProps } from "./NestedComponent";

const predefinedRender = (props: Partial<NestedComponentProps> = {}) => {
  const predefinedProps = {
    onSuccess: jest.fn(),
    ...props,
  };

  render(<NestedComponent {...predefinedProps} />);
};

describe("NestedComponent", () => {
  it("shows input with initial value", () => {
    predefinedRender();

    const input = within(screen.getByTestId("libraryBasedInput"));
    expect(input.getByDisplayValue("hello")).toBeOnTheScreen();
  });

  it("uses outlined version of input", () => {
    predefinedRender();

    const input = within(screen.getByTestId("libraryBasedInput"));
    expect(input.getByTestId("adapterPaperInput")).toHaveStyle({
      backgroundColor: "outlined",
    });
  });

  it("show submit button", () => {
    predefinedRender();

    const submitButton = within(screen.getByTestId("submitButton"));
    expect(submitButton.getByText("An async submit")).toBeOnTheScreen();
  });

  describe("when input value is changed", () => {
    it("reflects new value", () => {
      predefinedRender();

      const input = screen.getByTestId("libraryBasedInput");
      fireEvent(input, "changeText", "wow, new value");

      expect(
        within(input).getByDisplayValue("wow, new value")
      ).toBeOnTheScreen();
    });
  });

  describe("when submit button is pressed", () => {
    it("disables submit button", () => {
      predefinedRender();

      const submitButton = screen.getByTestId("submitButton");
      fireEvent.press(submitButton);

      expect(submitButton).toBeDisabled();
    });

    it("calls `onSuccess` function with a `true` response", async () => {
      jest.useFakeTimers();
      const onSuccess = jest.fn();
      predefinedRender({ onSuccess });

      const submitButton = screen.getByTestId("submitButton");
      fireEvent.press(submitButton);
      jest.advanceTimersByTime(1000);

      await waitFor(() => expect(onSuccess).toHaveBeenCalledTimes(1));
      expect(onSuccess).toHaveBeenCalledWith({
        isHardcoded: true,
      });

      jest.useRealTimers();
    });

    it("enables submit button back", async () => {
      jest.useFakeTimers();
      const onSuccess = jest.fn();
      predefinedRender({ onSuccess });

      const submitButton = screen.getByTestId("submitButton");
      fireEvent.press(submitButton);
      jest.advanceTimersByTime(1000);
      await waitFor(() => expect(onSuccess).toHaveBeenCalledTimes(1));

      expect(submitButton).toBeEnabled();

      jest.useRealTimers();
    });

    describe("when value is changed", () => {
      it("calls `onSuccess` function with a `false` response", async () => {
        jest.useFakeTimers();
        const onSuccess = jest.fn();
        predefinedRender({ onSuccess });

        const input = screen.getByTestId("libraryBasedInput");
        fireEvent(input, "changeText", "wow, new value");
        const submitButton = screen.getByTestId("submitButton");
        fireEvent.press(submitButton);
        jest.advanceTimersByTime(1000);
        await waitFor(() => expect(onSuccess).toHaveBeenCalledTimes(1));

        expect(onSuccess).toHaveBeenCalledWith({
          isHardcoded: false,
        });

        jest.useRealTimers();
      });
    });
  });
});
