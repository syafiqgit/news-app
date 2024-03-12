export type Response = {
  status: string;
  totalResults: number;
  articles: articlesType[];
};

export interface articlesType {
  source: {
    id: number;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
