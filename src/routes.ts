import { Hono } from "hono";

export const book = new Hono();
book.get("/book", (c) => c.text("List Books"));
book.post("/book", (c) => c.text("Create Book"));

export const user = new Hono().basePath("/user");
user.get("/", (c) => c.text("List Users"));
user.post("/", (c) => c.text("Create User"));
