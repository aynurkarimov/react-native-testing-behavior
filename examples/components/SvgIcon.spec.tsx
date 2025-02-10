import { render, screen } from "@testing-library/react-native";

import SvgIcon from "./SvgIcon";

describe("SvgIcon", () => {
  it("be accessible from screens", () => {
    render(<SvgIcon testID="svg" />);

    expect(screen.getByTestId("svg")).toBeOnTheScreen();
  });

  it("shows the download SVG", () => {
    render(<SvgIcon />);

    const iconDownload = screen.getByTestId("iconDownload");
    expect(iconDownload).toHaveProp("width", 24); // 🚨
    expect(iconDownload).toHaveProp("height", 24); // 🚨
  });
});
