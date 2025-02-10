import Presenter from "@/__lib__/Presenter";
import Screen from "@/__lib__/Screen";

import AsyncSectionList from "./AsyncSectionList";

export default function Lists() {
  return (
    <Screen>
      <Presenter label="AsyncSectionList" path="lists/AsyncSectionList">
        <AsyncSectionList
          injectedData={[
            { id: 1, age: 3, name: "Odie", type: "Dogs" },
            { id: 2, age: 77, name: "Garfield", type: "Cats" },
          ]}
        />
      </Presenter>
    </Screen>
  );
}
