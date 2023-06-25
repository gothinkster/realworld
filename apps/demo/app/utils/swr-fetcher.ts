export function swrFetcher(url: string) {
  return fetch(url).then(res => res.json());
}
