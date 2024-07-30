import { Hono } from "hono";
import { book, user } from "./routes";

export const configRoutes = (app: Hono) =>
  app
    .get("/", (c) => c.json({ status: "ok" }))
    .route("/", book)
    .route("/", user);
