import {
  getNextTransitions
} from "../services/game.service";
import { GetNextTransitionsControllerQueryParams, GetNextTransitionsControllerRouteParams, GetNextTransitionsParams, StepType } from "../models/game.model";
import { Lifecycle } from "@hapi/hapi";
import { ServiceReturnHandler } from "../../util/basic.response";

export const getNextTransitionsAction: Lifecycle.Method = async request => {
  try {

    const routeData = request.params as GetNextTransitionsControllerRouteParams;
    const queryData = request.query as GetNextTransitionsControllerQueryParams;
    const historicalSteps = queryData.histories ?
      (typeof(queryData.histories) === "string" ? ([queryData.histories]) as unknown as StepType[] : queryData.histories) :
      [];
    const inputParams: GetNextTransitionsParams = {
      nextStep: routeData.nextStep,
      historicalSteps
    };
    console.log("request params", inputParams);
    const verificationResult = await getNextTransitions(inputParams);
    return ServiceReturnHandler(verificationResult);
  }
  catch (e) {
    console.error(e);
  }
};
