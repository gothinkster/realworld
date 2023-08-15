import { Comment } from './comment.model';
import { User } from './user.model';

export interface Article {
  id: number;
  title: string;
  slug: string;
  description: string;
  comments: Comment[];
  favorited: boolean;
  unlikedBy: User[];
}
