export interface IResult {
  // property name casing is matching the format of the API responses
  Title: string,
  Year: string,
  imdbID: string,
  Type: string,
  Poster: string
}

export enum ResultErrors {
  noResults = 'No results for the searched title',
  fetchError = 'Couldn\'t get the data, there might be a connection issue'
}

export class Result implements IResult {
  Title: string = '';
  Year: string = '';
  imdbID: string = '';
  Type: string = '';
  Poster: string = '';
}

export type ResultMap = Map<string, IResult[]>;