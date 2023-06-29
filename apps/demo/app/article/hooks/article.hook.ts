import useSWR from 'swr';

export function useArticle(slug: string) {
  const token = localStorage.getItem('token') as string;
  const { data, error, isLoading } = useSWR(`/api/articles/${slug}`, url =>
    fetch('https://api.realworld.io' + url, {
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Token ${token}` } : {}),
      },
    }).then(res => res.json()),
  );

  return {
    article: data?.article,
    isLoading,
    isError: error,
  };
}
