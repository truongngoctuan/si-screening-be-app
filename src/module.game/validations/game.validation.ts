import Joi from "@hapi/joi";
import { GetNextTransitionsControllerQueryParams, GetNextTransitionsParams } from "../models/game.model";

export const getNextTransitionsQueryParamsSchema = Joi.object<GetNextTransitionsControllerQueryParams>({
  histories: Joi.array().items(Joi.string())
});

export const getNextTransitionsParamsSchema = Joi.object<GetNextTransitionsParams>({
  nextStep: Joi.string(),
  historicalSteps: Joi.array().items(Joi.string())
});

export default getNextTransitionsQueryParamsSchema;