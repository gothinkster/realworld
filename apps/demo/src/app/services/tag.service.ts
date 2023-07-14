export async function getPopularTags(): Promise<string[]> {
  return fetch('https://conduit.productionready.io/api/tags')
    .then(res => res.json())
    .then(res => res.tags);
}
