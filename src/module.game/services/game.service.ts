import { ServiceReturn, ServiceReturnFail, ServiceReturnSuccess } from "../../module.utils/service-return";
import { JoiValidationHandler } from "../../module.utils/joi-validation";
import { getNextTransitionsParamsSchema } from "../validations/game.validation";
import { GetNextTransitionsParams, StepType } from "../models/game.model";

export const getNextTransitions: (p: GetNextTransitionsParams) => Promise<ServiceReturn<StepType[]>> = async (p) => {
  //business validation
  const schemaValidationResult = getNextTransitionsParamsSchema.validate(p);
  const joiValidationResult = JoiValidationHandler(schemaValidationResult);
  if (!joiValidationResult.isSucceed) return joiValidationResult as ServiceReturnFail;

  // business logic
  let data: StepType[] = [];

  switch (p.nextStep) {
    case StepType.Blue:
      if (p.historicalSteps.length > 1 && p.historicalSteps[p.historicalSteps.length - 2] === StepType.Yellow) {
        data = [StepType.Green];
      }
      else {
        data = [StepType.Green, StepType.Yellow];
      }
      break;
    case StepType.Green:
    case StepType.Yellow:
      data = [StepType.Blue];
      break;
    default:
      data = [];
  }

  return await ServiceReturnSuccess(data);
};
