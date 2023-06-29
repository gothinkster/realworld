import useSWR from 'swr';

export function useComments(slug: string) {
  const { data, error, isLoading, mutate } = useSWR(`/api/articles/${slug}/comments`, url =>
    fetch('https://api.realworld.io' + url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`,
      },
    }).then(res => res.json()),
  );
  console.log({ data });
  return {
    comments: data?.comments,
    isLoading,
    isError: error,
    mutate,
  };
}
