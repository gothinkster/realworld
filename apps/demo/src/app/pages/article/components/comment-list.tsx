import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Comment } from '../../../models/comment.model';
import { createComment, deleteComment, getComments } from '../../../services/comment.service';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AuthContext } from '../../../auth/auth.context';

interface Props {
  slug: string;
}

export default function CommentList({ slug }: Props) {
  const queryClient = useQueryClient();
  const { user } = useContext(AuthContext);
  const { data } = useQuery<Comment[]>({
    queryKey: ['comments', slug],
    queryFn: () => getComments(slug),
  });

  const createMutate = useMutation({
    mutationFn: (comment: string) => createComment(slug, comment),
    onMutate: async comment => {
      await queryClient.cancelQueries(['comments', slug]);

      const previousComments = queryClient.getQueryData(['comments', slug]);

      queryClient.setQueryData(
        ['comments', slug],
        [
          ...(data
            ? [
                ...data,
                {
                  id: 0,
                  body: comment,
                  createdAt: new Date().toISOString(),
                  updatedAt: new Date().toISOString(),
                  author: {
                    username: user?.username,
                    bio: '',
                    image: '',
                    following: false,
                  },
                } as Comment,
              ]
            : []),
        ],
      );

      return { previousComments };
    },
    onError: (err, id, context) => {
      queryClient.setQueryData(['comments', slug], context?.previousComments);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['comments', slug] });
    },
  });

  const deleteMutate = useMutation({
    mutationFn: (id: number) => deleteComment(slug, id),
    onMutate: async id => {
      await queryClient.cancelQueries(['comments', slug]);

      const previousComments = queryClient.getQueryData(['comments', slug]);

      queryClient.setQueryData(
        ['comments', slug],
        [...(data ? data.filter(comment => comment.id !== id) : [])],
      );

      return { previousComments };
    },
    onError: (err, id, context) => {
      queryClient.setQueryData(['comments', slug], context?.previousComments);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['comments', slug] });
    },
  });

  async function create(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    const comment = (event.target as HTMLFormElement).comment.value;
    createMutate.mutate(comment);
    (event.target as HTMLFormElement).comment.value = '';
  }

  async function deleteC(id: number): Promise<void> {
    await deleteMutate.mutate(id);
  }

  if (!user) {
    return (
      <div className="row">
        <div className="col-xs-12 col-md-8 offset-md-2">
          <p>
            <Link to="/login">Sign in</Link>
            &nbsp; or &nbsp;
            <Link to="/register">Sign up</Link>
            &nbsp; to add comments on this article.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="row">
      <div className="col-xs-12 col-md-8 offset-md-2">
        <form className="card comment-form" onSubmit={create}>
          <div className="card-block">
            <textarea
              name="comment"
              className="form-control"
              placeholder="Write a comment..."
              rows={3}
            ></textarea>
          </div>
          <div className="card-footer">
            <img src={user.image} className="comment-author-img" alt={`${user.username} avatar`} />
            <button type="submit" className="btn btn-sm btn-primary">
              Post Comment
            </button>
          </div>
        </form>

        {data &&
          data.map((comment: Comment) => (
            <div key={comment.body} className="card">
              <div className="card-block">
                <p className="card-text">{comment.body}</p>
              </div>
              <div className="card-footer">
                <Link to={'/profile/' + comment.author.username} className="comment-author">
                  <img
                    src={comment.author.image}
                    className="comment-author-img"
                    alt={`${comment.author.username} avatar`}
                  />
                </Link>
                &nbsp;
                <Link to={'/profile/' + comment.author.username} className="comment-author">
                  {comment.author.username}
                </Link>
                <span className="date-posted">{comment.createdAt}</span>
                <span className="mod-options">
                  <i className="ion-trash-a" onClick={() => deleteC(comment.id)}></i>
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
