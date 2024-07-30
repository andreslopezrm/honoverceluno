import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { configRoutes } from "./config";

const app = new Hono();

const port = 3000;
configRoutes(app);
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
