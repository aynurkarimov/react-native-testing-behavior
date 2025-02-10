/* eslint-disable prettier/prettier */
import { render, screen, waitFor } from "@testing-library/react-native";

import server, { ORIGIN } from "@/__mocks__/server";
import NetworkRequest from "./NetworkRequest";
import { http, HttpResponse } from "msw";

describe("NetworkRequest", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("shows loader", async () => {
    render(<NetworkRequest />);

    // eslint-disable-next-line testing-library/prefer-find-by
    await waitFor(() =>
      expect(screen.getByRole("progressbar")).toBeOnTheScreen()
    );
  });

  describe("when data is received", () => {
    it("shows users", async () => {
      server.use(
        http.get(`${ORIGIN}users`, () =>
          HttpResponse.json([
            { id: 1, name: "Alex" },
            { id: 2, name: "Xela" },
          ])
        )
      );
      render(<NetworkRequest />);

      const [alex, xela] = await waitFor(() => [
        screen.getByText("Alex"),
        screen.getByText("Xela"),
      ]);
      expect(alex).toBeOnTheScreen();
      expect(xela).toBeOnTheScreen();
    });
  });
});
