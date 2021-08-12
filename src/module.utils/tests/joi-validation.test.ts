import Joi from "@hapi/joi";
import { JoiValidationHandler } from "../joi-validation";
import { ServiceReturnFail, ErrorCode } from "../service-return";

describe("joi validation result handler", () => {
  test("missing field", async () => {
    // Arrange
    const schema = Joi.object({
      fieldA: Joi.string().required()
    });

    const data = {};

    // Act
    const result = await JoiValidationHandler(schema.validate(data));

    // Assert
    expect(result.isSucceed).toBeFalsy();
    expect((result as ServiceReturnFail).errorCode).toBe(
      ErrorCode.FieldMissing
    );
    expect((result as ServiceReturnFail).errorData).toBe("fieldA");
  });

  test("wrong string length format", async () => {
    // Arrange
    const schema = Joi.object({
      fieldA: Joi.string()
        .required()
        .length(1)
    });

    const data = {
      fieldA: "aa"
    };

    // Act
    const result = await JoiValidationHandler(schema.validate(data));

    // Assert
    expect(result.isSucceed).toBeFalsy();
    expect((result as ServiceReturnFail).errorCode).toBe(
      ErrorCode.InvalidFieldFormat
    );
    expect((result as ServiceReturnFail).errorData).toBe("fieldA");
  });
});
