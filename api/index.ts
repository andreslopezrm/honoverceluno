import { Hono } from "hono";
import { handle } from "hono/vercel";
import { configRoutes } from "../src/config";

export const config = {
  runtime: "edge",
};

const app = new Hono().basePath("/api");
configRoutes(app);

export default handle(app);
