import { ServiceReturnSuccess } from "../../../module.utils/service-return";
import { GetNextTransitionsParams, StepType } from "../../models/game.model";
import { getNextTransitions } from "../game.service";

describe("get next step", () => {
  test("get next step for blue", async () => {
    // Arrange
    const data: GetNextTransitionsParams = {
      nextStep: StepType.Blue,
      historicalSteps: []
    };

    // Act
    const result = await getNextTransitions(data);

    // Assert
    expect(result.isSucceed).toBeTruthy();
    const successResult= result as ServiceReturnSuccess<StepType[]>;
    expect(successResult.data.length).toBe(2);
    expect(successResult.data[0]).toBe(StepType.Green);
    expect(successResult.data[1]).toBe(StepType.Yellow);
  });

  test("get next step for blue, no consecutive yellow", async () => {
    // Arrange
    const data: GetNextTransitionsParams = {
      nextStep: StepType.Blue,
      historicalSteps: [StepType.Yellow]
    };

    // Act
    const result = await getNextTransitions(data);

    // Assert
    expect(result.isSucceed).toBeTruthy();
    const successResult= result as ServiceReturnSuccess<StepType[]>;
    expect(successResult.data.length).toBe(1);
    expect(successResult.data[0]).toBe(StepType.Green);
  });

});
