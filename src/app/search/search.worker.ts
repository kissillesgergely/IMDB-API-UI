/// <reference lib="webworker" />

import { IResult } from "src/types/result.interface";

function groupResults(data: IResult[]) {
  const resultsInYearGroups = new Map<string, IResult[]>();

  for(const result of data) {
    if(!resultsInYearGroups.has(result.Year)) {
      resultsInYearGroups.set(result.Year, []);
    }
    resultsInYearGroups.get(result.Year)?.push(result);
  }

  console.log(resultsInYearGroups);
}

addEventListener('message', ({ data }) => {
  console.log('in the worker');
  //const response = groupResults(data)
  const response = 'hello';
  postMessage(response);
});
