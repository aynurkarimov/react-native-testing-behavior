import groupPetsByType from "./groupPetsByType";
import type { Pet } from "./AsyncSectionList";

describe("groupPetsByType", () => {
  it("groups pets by their type", () => {
    const pets: Pet[] = [
      { id: 1, age: 3, name: "Odie", type: "Dogs" },
      { id: 2, age: 77, name: "Garfield", type: "Cats" },
      { id: 3, age: 5, name: "Rex", type: "Dogs" },
    ];

    expect(groupPetsByType(pets)).toEqual([
      {
        title: "Dogs",
        data: [
          { id: 1, age: 3, name: "Odie", type: "Dogs" },
          { id: 3, age: 5, name: "Rex", type: "Dogs" },
        ],
      },
      {
        title: "Cats",
        data: [{ id: 2, age: 77, name: "Garfield", type: "Cats" }],
      },
    ]);
  });

  describe("when input is an empty array", () => {
    it("returns empty array", () => {
      expect(groupPetsByType([])).toEqual([]);
    });
  });
});
