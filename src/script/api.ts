type hash = string

export interface DocItem {
  _id: hash;
  chapterName: string;
  book: hash;
}

export interface toaResponse {
  docs: Array<DocItem>;
  total: number;
  limit: number;
  offset: number;
  page: number;
  pages: number;
}