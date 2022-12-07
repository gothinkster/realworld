import { Article } from './article.model';

export interface Comment {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  body: string;
  article?: Article;
}
