import { APIRequestContext } from 'playwright';

export const createPost = async (request: APIRequestContext, token) => {
  return request.post('/api/articles', {
    headers: {
      Authorization: `Token ${token}`,
    },
    data: {
      article: {
        title: `ggn-title-${new Date().getTime()}`,
        description: 'bar',
        body: 'bar',
        tagList: ['foo'],
      },
    },
  });
};
