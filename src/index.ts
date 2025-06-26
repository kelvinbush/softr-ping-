import {Elysia} from "elysia";
import logger from "../utils/logger";

const app = new Elysia().get("/", () => "Hello Elysia").listen(3000);

logger.info(// @ts-ignore
  ` Elysia is running at ${app.server?.protocol}://${app.server?.hostname}:${app.server?.port}`,);
