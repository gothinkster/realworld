export async function createComment(slug: string, body: string): Promise<Comment> {
  const token = localStorage.getItem('token') as string;
  return fetch(`https://api.realworld.io/api/articles/${slug}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify({ comment: { body } }),
  })
    .then(res => res.json())
    .then(data => data.comment);
}

export async function deleteComment(slug: string, id: number): Promise<Response> {
  const token = localStorage.getItem('token') as string;
  return fetch(`https://api.realworld.io/api/articles/${slug}/comments/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  });
}
