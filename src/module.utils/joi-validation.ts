import Joi from "@hapi/joi";
import _ from "lodash";
import { ErrorCode, ServiceReturnFail, ServiceReturnSuccess } from "./service-return";

export function JoiValidationHandler(schemaValidationResult: Joi.ValidationResult) {
  if (schemaValidationResult.error) {
    const details = schemaValidationResult.error.details;
    // console.log(details);
    if (_.isEmpty(details)) throw new Error("Unknown validation error");
    const firstDetail = details[0];
    if (firstDetail.type == "any.required") {
      return ServiceReturnFail(ErrorCode.FieldMissing, firstDetail.context.key);
    }
    if (_.find(["string.length"], item => item == firstDetail.type)) {
      return ServiceReturnFail(ErrorCode.InvalidFieldFormat, firstDetail.context.key);
    }

    throw new Error(`Joi validation type is not handled ${firstDetail.type}`);
    // todo wrong format issues
  }

  return ServiceReturnSuccess(true);
}