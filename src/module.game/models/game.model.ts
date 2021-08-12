export type GetNextTransitionsControllerRouteParams = {
  nextStep: StepType;
};

export type GetNextTransitionsControllerQueryParams = {
  histories: StepType[];
}

export type GetNextTransitionsParams = {
  nextStep: StepType;
  historicalSteps: StepType[];
}

export enum StepType {
  Blue = "blue",
  Green = "green",
  Yellow = "yellow"
}