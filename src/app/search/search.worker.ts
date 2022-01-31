/// <reference lib="webworker" />

import { IResult } from "src/types/result";

function groupResults(ungroupedData: IResult[]) {
  const resultsInYearGroups = new Map<string, IResult[]>();

  for(const result of ungroupedData) {
    if(!resultsInYearGroups.has(result.Year)) {
      resultsInYearGroups.set(result.Year, []);
    }
    resultsInYearGroups.get(result.Year)?.push(result);
  }

  return resultsInYearGroups;
}

addEventListener('message', ({ data }) => {
  const response = groupResults(data)
  postMessage(response);
});
