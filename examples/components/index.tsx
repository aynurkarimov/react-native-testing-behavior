import Presenter from "@/__lib__/Presenter";
import Screen from "@/__lib__/Screen";

import SvgIcon from "./SvgIcon";
import InteractiveA11y from "./InteractiveA11y";
import PressableButton from "./PressableButton";
import NestedComponent from "./NestedComponent";

export default function Components() {
  return (
    <Screen scrollable>
      <Presenter label="InteractiveA11y" path="components/InteractiveA11y">
        <InteractiveA11y />
      </Presenter>

      <Presenter label="SVG" path="components/SvgIcon">
        <SvgIcon />
      </Presenter>

      <Presenter label="Pressable button" path="components/PressableButton">
        <PressableButton text="Press on me!" />
      </Presenter>

      <Presenter
        label="Nested & Library input"
        path="components/NestedComponent"
      >
        <NestedComponent
          onSuccess={(answer) => {
            console.log("was submitted value hardcoded?", answer.isHardcoded);
          }}
        />
      </Presenter>
    </Screen>
  );
}
