# React-Native-Testing-Behavior

A showcase of testing techniques that prioritize behavior over implementation details. By implementation details, means the concrete logic behind certain behaviors — things like props, state, refs, lifecycle methods, and specific renders. Testing close to implementation details is harmful and discouraged by best practices, [React Native](https://reactnative.dev/docs/testing-overview#testing-user-interactions), [React Testing Library](https://testing-library.com/docs/#what-you-should-avoid-with-testing-library), and [React Native Testing Library](https://callstack.github.io/react-native-testing-library/docs/start/intro#the-problem).

## Tradeoffs

### Not Everything is Tested

This might seem like common sense, but it's worth emphasizing. A "test everything" mindset leads to redundant test cases that couple specs to a component's internals. This prevents easy refactoring and locks future solutions into a narrow tunnel dictated by these tests. Occasionally, such tests are still written, but to preserve flexibility, I mark them with a 🚨 emoji. If a test marked this way and breaks, it's a sign that it can be deleted or replaced with something lighter. At the end of the day, it's better to not have a test, than having one which is painful to maintain.

### Adapters and Fakes

Adapters are wrappers around third-party APIs and core components. They allow you to avoid directly mocking code you don't own by giving you a custom interface that you can fake or mock. For example, `LibraryBasedInput` adapter wraps a UI library under the hood and still testable.

The main benefit of adapters is that they can be reused across a project and have a behavior-driven representation in tests. This means you can avoid relying on anti-patterns like `toHaveProp`. However, there's a tradeoff. Technically, you can write an adapter, fake it in the test environment, and pass all your tests without actually implementing the real functionality. Your tests will be green, but your app might crash in production. The good news is that such bugs are isolated to the adapter itself. Fixing it only requires updating one file: the adapter. Without the adapter, you'd have to fix every individual mock and test file.
