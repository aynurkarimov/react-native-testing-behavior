import "@testing-library/react-native/extend-expect";
require("react-native-reanimated").setUpTests();

// These aren't mocks, they're closer to fakes.
// Fakes provide behavior that can be tested. They are not
// supposed to differ in independent tests and therefore
// "faked" globally.
jest.mock("./adapters/AdapterPaperInput");
jest.mock("./adapters/a11y");
