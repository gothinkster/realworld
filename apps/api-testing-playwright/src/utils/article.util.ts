import { APIRequestContext } from 'playwright';
import { uuid } from 'uuidv4';

export const createPost = async (request: APIRequestContext, token) => {
  return request.post('/api/articles', {
    headers: {
      Authorization: `Token ${token}`,
    },
    data: {
      article: {
        title: `ggn-title-${uuid()}`,
        description: 'bar',
        body: 'bar',
        tagList: ['foo'],
      },
    },
  });
};
