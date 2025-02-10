import { render, screen } from "@testing-library/react-native";
import Spinner from "./Spinner";

describe("Spinner", () => {
  it("shows 50x50 spinner", () => {
    jest.useFakeTimers();
    render(<Spinner />);

    expect(screen.getByRole("progressbar")).toHaveAnimatedStyle({
      width: 50,
      height: 50,
    });

    jest.useRealTimers();
  });

  it("sets borders", () => {
    jest.useFakeTimers();
    render(<Spinner />);

    expect(screen.getByRole("progressbar")).toHaveAnimatedStyle({
      borderWidth: 5,
      borderColor: "#ff6347",
      borderTopColor: "transparent",
      borderRadius: 25,
    });

    jest.useRealTimers();
  });

  it("sets rotation at 0deg", () => {
    jest.useFakeTimers();
    render(<Spinner />);

    expect(screen.getByRole("progressbar")).toHaveAnimatedStyle({
      transform: [{ rotate: "0deg" }],
    });

    jest.useRealTimers();
  });

  describe("when animation is half way", () => {
    it("sets rotation at 180deg", () => {
      jest.useFakeTimers();
      render(<Spinner />);

      jest.advanceTimersByTime(500);

      expect(screen.getByRole("progressbar")).toHaveAnimatedStyle({
        transform: [{ rotate: "180deg" }],
      });

      jest.useRealTimers();
    });
  });

  describe("when animation is finished", () => {
    it("sets rotation at 360deg", () => {
      jest.useFakeTimers();
      render(<Spinner />);

      jest.advanceTimersByTime(1000);

      expect(screen.getByRole("progressbar")).toHaveAnimatedStyle({
        transform: [{ rotate: "360deg" }],
      });

      jest.useRealTimers();
    });
  });
});
