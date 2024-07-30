import { Hono } from "hono";
import { handle } from "hono/vercel";

export const config = {
  runtime: "edge",
};

const app = new Hono().basePath("/api");
app.get("/", (c) => c.json({ stauts: "ok" }));

export default handle(app);
