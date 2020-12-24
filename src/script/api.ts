type hash = string;
type LOTR_Date = string | "TA XXXX" | "SR XXXX" | "Age Reference";


export interface DocItem {
  _id: hash;
}

export interface ApiResponse {
  total: number;
  limit: number;
  offset: number;
  page: number;
  pages: number;
}

export interface BookItem extends DocItem {
  name: string;
}

export interface BookResponse extends ApiResponse {
  docs: Array<BookItem>
}

export interface MovieItem {
  name: string;
  runtimeInMinutes: number;
  budgetInMillions: number;
  boxOfficeRevenueInMillions: number;
  academyAwardNominations: number;
  academyAwardWins: number;
  rottenTomatesScore: number;
}

export interface MovieResponse extends ApiResponse {
  docs: Array<MovieItem>
}

export interface ChapterItem extends DocItem {
  chapterName: string;
  book: hash;
}

export interface ChapterResponse extends ApiResponse {
  docs: Array<ChapterResponse>;
}

export interface CharacterItem extends DocItem {
  height: string;
  race: string;
  gender: "Male" | "Female" | "";
  birth: LOTR_Date;
  spouse: string;
  death: LOTR_Date;
  realm: string;
  hair: string;
  name: string;
  wikiUrl: string;
}

export interface CharacterResponse extends ApiResponse {
  docs: Array<CharacterResponse>;
}


export type toaResponse = BookResponse | MovieResponse | ChapterResponse | CharacterResponse
export const apiEndpoints = ["book", "chapter", "character"]
export const apiMenuItems = apiEndpoints.map(endpoint => endpoint.charAt(0).toLocaleUpperCase() + endpoint.substr(1))