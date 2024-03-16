export type Response = {
  status: string;
  totalResults: number;
  articles: ArticlesType[];
};

export interface ArticlesType {
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
