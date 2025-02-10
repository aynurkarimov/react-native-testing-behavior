export default {
  // TODO: this is terrible, but works for now.
  // The issue comes that jest.fn() breaks the
  // application during runtime, since jest isn't
  // defined in global scope.
  announce: process.env.NODE_ENV === "test" ? jest.fn() : () => {},
};
