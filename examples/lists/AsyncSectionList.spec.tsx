/* eslint-disable prettier/prettier */
import {
  render,
  screen,
  waitForElementToBeRemoved,
  within,
} from "@testing-library/react-native";

import AsyncSectionList, {
  type AsyncSectionListProps,
} from "./AsyncSectionList";
import a11y from "@/adapters/a11y";

const predefinedRender = (props: Partial<AsyncSectionListProps> = {}) => {
  const predefinedProps = {
    injectedData: [],
    ...props,
  };

  render(<AsyncSectionList {...predefinedProps} />);
};

describe("AsyncSectionList", () => {
  it("be accessible from screens", async () => {
    predefinedRender({ testID: "asyncSectionList" });

    expect(await screen.findByTestId("asyncSectionList"));
  });

  it("shows loader", async () => {
    predefinedRender();

    const loader = await screen.findByRole("progressbar");
    expect(loader).toBeOnTheScreen();
  });

  it("shows section title", async () => {
    predefinedRender();

    expect(
      await screen.findByText("Pets in our neighborhood")
    ).toBeOnTheScreen();
  });

  describe("when data is received", () => {
    it("hides loader", async () => {
      jest.useFakeTimers();
      predefinedRender({
        injectedData: [{ id: 1, name: "Cheshire", age: 30, type: "Cats" }],
      });
      jest.advanceTimersByTime(1000);

      await waitForElementToBeRemoved(() => screen.queryByRole("progressbar"));
      expect(screen.getAllByTestId(/pet-/).length).toBeGreaterThanOrEqual(1);

      jest.useRealTimers();
    });

    it("notifies a11y", async () => {
      jest.useFakeTimers();
      predefinedRender({
        injectedData: [{ id: 1, age: 30, name: "Cheshire", type: "Cats" }],
      });
      jest.advanceTimersByTime(1000);

      await waitForElementToBeRemoved(() => screen.queryByRole("progressbar"));
      expect(a11y.announce).toHaveBeenCalledWith("Loading is complete!");

      (a11y.announce as jest.Mock).mockClear();
      jest.useRealTimers();
    });

    it("shows pets", async () => {
      jest.useFakeTimers();
      predefinedRender({
        injectedData: [
          { id: 1, age: 3, name: "Odie", type: "Dogs" },
          { id: 2, age: 77, name: "Garfield", type: "Cats" },
        ],
      });
      jest.advanceTimersByTime(1000);

      const pets = await screen.findAllByTestId(/pet-/);
      expect(pets.length).toBe(2);
      const odie = within(screen.getByTestId(/pet-1/));
      const garfield = within(screen.getByTestId(/pet-2/));
      expect(odie.getByText("Odie")).toBeOnTheScreen();
      expect(odie.getByText("3")).toBeOnTheScreen();
      expect(garfield.getByText("Garfield")).toBeOnTheScreen();
      expect(garfield.getByText("77")).toBeOnTheScreen();

      jest.useRealTimers();
    });

    it("sets different backgrounds to cats and dogs", async () => {
      jest.useFakeTimers();
      predefinedRender({
        injectedData: [
          { id: 1, age: 3, name: "Odie", type: "Dogs" },
          { id: 2, age: 77, name: "Garfield", type: "Cats" },
        ],
      });
      jest.advanceTimersByTime(1000);

      const cat = await screen.findByTestId(/-Cats/);
      expect(cat).toHaveStyle({ backgroundColor: "#CA907E" });
      const dog = screen.getByTestId(/-Dogs/);
      expect(dog).toHaveStyle({ backgroundColor: "#7692FF" });
    });
  });
});
