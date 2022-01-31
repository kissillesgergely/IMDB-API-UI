export interface IResult {
  // property name casing is matching the format of the API responses
  Title: string,
  Year: string,
  imdbID: string,
  Type: string,
  Poster: string
}

export class Result implements IResult {
  Title: string = '';
  Year: string = '';
  imdbID: string = '';
  Type: string = '';
  Poster: string = '';
}

export type ResultMap = Map<string, IResult[]>;