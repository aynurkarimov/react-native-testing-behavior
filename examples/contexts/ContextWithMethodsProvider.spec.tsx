/* eslint-disable prettier/prettier */
import { fireEvent, render, screen } from "@testing-library/react-native";
import ContextWithMethodsProvider, {
  ContextWithMethods,
  type Auth,
} from "./ContextWithMethodsProvider";
import { Pressable, Text, View } from "react-native";

describe("ContextWithMethodsProvider", () => {
  it("shows no data", () => {
    render(
      <ContextWithMethodsProvider>
        <ContextWithMethods.Consumer>
          {({ user }: Auth) => (
            <View>
              <Text>{user?.name ?? "Name is empty"}</Text>
              <Text>{user?.id ?? "ID is empty"}</Text>
            </View>
          )}
        </ContextWithMethods.Consumer>
      </ContextWithMethodsProvider>
    );

    expect(screen.getByText("Name is empty")).toBeOnTheScreen();
    expect(screen.getByText("ID is empty")).toBeOnTheScreen();
  });

  describe("when user data is set", () => {
    it("overrides data except name", () => {
      render(
        <ContextWithMethodsProvider>
          <ContextWithMethods.Consumer>
            {({ user, setUserInformation }: Auth) => (
              <View>
                <Text>{user?.name}</Text>
                <Text>{user?.id}</Text>

                <Pressable
                  onPress={() => {
                    setUserInformation({
                      id: 98,
                      name: "Leo",
                    });
                  }}
                >
                  <Text>Press to set user data!</Text>
                </Pressable>
              </View>
            )}
          </ContextWithMethods.Consumer>
        </ContextWithMethodsProvider>
      );

      const populateUserButton = screen.getByText("Press to set user data!");
      fireEvent.press(populateUserButton);

      expect(screen.getByText("Bob")).toBeOnTheScreen();
      expect(screen.getByText("98")).toBeOnTheScreen();
    });
  });
});
