import { Elysia } from "elysia";
import logger from "../utils/logger";
import { data } from "../mock/data";
import swagger from "@elysiajs/swagger";
import cors from "@elysiajs/cors";

const PORT = process.env.PORT || 8080;
const appUrl = process.env.SOFTR_APP_URL || "http://localhost:3000";

const app = new Elysia()
  .use(
    cors({
      origin: ["http://localhost:3000", appUrl],
    }),
  )
  .use(swagger())
  .get("/", () => "Hello Elysia")
  .get("/ping", () => data)
  .listen(PORT);

logger.info(
  // @ts-ignore
  `Elysia is running at ${app.server?.protocol}://${app.server?.hostname}:${app.server?.port}`,
);
