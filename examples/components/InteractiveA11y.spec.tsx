import { fireEvent, render, screen } from "@testing-library/react-native";

import InteractiveA11y from "./InteractiveA11y";

describe("InteractiveA11y", () => {
  it("be accessible from screens", () => {
    render(<InteractiveA11y testID="interactiveA11y" />);

    expect(screen.getByTestId("interactiveA11y")).toBeOnTheScreen();
  });

  it("shows three options for frequency selection", () => {
    render(<InteractiveA11y />);

    const options = screen.getAllByRole("radio");
    const [daily, weekly, monthly] = options;
    expect(daily).toHaveTextContent("Daily");
    expect(weekly).toHaveTextContent("Weekly");
    expect(monthly).toHaveTextContent("Monthly");
  });

  it("shows daily as the only checked option", () => {
    render(<InteractiveA11y />);

    expect(screen.getByRole("radio", { name: "daily" })).toBeChecked();
    expect(screen.getByRole("radio", { name: "weekly" })).not.toBeChecked();
    expect(screen.getByRole("radio", { name: "monthly" })).not.toBeChecked();
  });

  it("shows checked option in active color", () => {
    render(<InteractiveA11y />);

    expect(screen.getByRole("radio", { checked: true })).toHaveStyle({
      backgroundColor: "#FC6DAB",
    });
  });

  describe("when weekly option is pressed", () => {
    it("shows weekly as the only checked option", () => {
      render(<InteractiveA11y />);

      const weeklyOption = screen.getByRole("radio", { name: "weekly" });
      fireEvent.press(weeklyOption);

      expect(screen.getByRole("radio", { name: "daily" })).not.toBeChecked();
      expect(screen.getByRole("radio", { name: "weekly" })).toBeChecked();
      expect(screen.getByRole("radio", { name: "monthly" })).not.toBeChecked();
    });
  });

  describe("when monthly option is pressed", () => {
    it("shows monthly as the only checked option", () => {
      render(<InteractiveA11y />);

      const monthlyOption = screen.getByRole("radio", { name: "monthly" });
      fireEvent.press(monthlyOption);

      expect(screen.getByRole("radio", { name: "daily" })).not.toBeChecked();
      expect(screen.getByRole("radio", { name: "weekly" })).not.toBeChecked();
      expect(screen.getByRole("radio", { name: "monthly" })).toBeChecked();
    });
  });

  describe("when daily option is pressed", () => {
    it("shows daily as the only checked option", () => {
      render(<InteractiveA11y />);
      const monthlyOption = screen.getByRole("radio", { name: "monthly" });
      fireEvent.press(monthlyOption);
      expect(screen.getByRole("radio", { name: "monthly" })).toBeChecked();

      const dailyOption = screen.getByRole("radio", { name: "daily" });
      fireEvent.press(dailyOption);

      expect(screen.getByRole("radio", { name: "daily" })).toBeChecked();
      expect(screen.getByRole("radio", { name: "weekly" })).not.toBeChecked();
      expect(screen.getByRole("radio", { name: "monthly" })).not.toBeChecked();
    });
  });
});
