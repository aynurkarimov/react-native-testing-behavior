/* eslint-disable prettier/prettier */
// Polyfills
import "fast-text-encoding";
import "react-native-url-polyfill/auto";

import { setupServer } from "msw/native";
import { http, HttpResponse } from "msw";

export const ORIGIN = "https://jsonplaceholder.typicode.com/";

const server = setupServer(
  http.get(`${ORIGIN}`, () => HttpResponse.json({ rootEndpoint: "server.js" })),
  http.get(`${ORIGIN}users`, () =>
    HttpResponse.json([{ id: 0, name: "global-user" }])
  )
);

export default server;
