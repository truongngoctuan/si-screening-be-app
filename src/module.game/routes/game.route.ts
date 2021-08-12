import { getNextTransitionsAction } from "../controllers/game.controller";
import { getNextTransitionsQueryParamsSchema } from "../validations/game.validation";
import { ServerRoute } from "@hapi/hapi";
import { basicResponseSchema } from "../../util/basic.response";

const gameRoutes: ServerRoute[] = [
  {
    method: "GET",
    path: "/transition/{nextStep}",
    options: {
      tags: ["api"],
      description: "Get game next transition based on current state and histories",
      validate: {
        params: getNextTransitionsQueryParamsSchema,
        failAction: "ignore"
      },
      response: {
        schema: basicResponseSchema,
        failAction: "ignore"
      }
    },
    handler: getNextTransitionsAction
  }
];

export default gameRoutes;
