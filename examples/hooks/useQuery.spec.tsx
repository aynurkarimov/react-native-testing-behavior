/* eslint-disable prettier/prettier */
import { renderHook, waitFor } from "@testing-library/react-native";
import useQuery from "./useQuery";

import server, { ORIGIN } from "../../__mocks__/server";
import { http, HttpResponse } from "msw";

describe("useQuery", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("returns empty data", async () => {
    const {
      result: { current },
    } = renderHook(() => useQuery("users"));

    await waitFor(() => expect(current.data).toBeUndefined());
  });

  it("returns positive loading", async () => {
    const {
      result: { current },
    } = renderHook(() => useQuery("users"));

    await waitFor(() => expect(current.loading).toBe(true));
  });

  describe("when data is received", () => {
    it("returns data", async () => {
      server.use(
        http.get(`${ORIGIN}users`, () =>
          HttpResponse.json([{ id: 1, name: "Bob" }])
        )
      );
      const { result } = renderHook(() => useQuery("users"));

      await waitFor(() =>
        expect(result.current).toHaveProperty("data", [{ id: 1, name: "Bob" }])
      );
    });

    it("returns negative loading", async () => {
      server.use(
        http.get(`${ORIGIN}users`, () => HttpResponse.json([{ id: 999 }]))
      );
      const { result } = renderHook(() => useQuery("users"));

      await waitFor(() => expect(result.current.data).toHaveLength(1));
      expect(result.current.loading).toBe(false);
    });
  });
});
