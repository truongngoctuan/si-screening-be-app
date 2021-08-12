import { ServiceReturn } from "../module.utils/service-return";
import Joi = require("@hapi/joi");

export const basicResponseSchema = Joi.object({
});

const basicResponse = {
  200: {
    description: "Success",
    schema: basicResponseSchema
  }
};

export const BasicResponseUtils = {
  Success: function(data: object) {
    return data;
  }
};

export function ServiceReturnHandler<T>(serviceReturn: ServiceReturn<T>) {
  if (serviceReturn.isSucceed == false) {
    return serviceReturn;
  }

  return BasicResponseUtils.Success(serviceReturn.data);
}

export default basicResponse;
