import { createUser } from '../services/auth.service';
import { RegisteredUser } from '../models/registered-user.model';
import { addComment, createArticle } from '../services/article.service';
import { getProfile } from '../services/profile.service';

export const generateUser = async (): Promise<RegisteredUser> =>
  createUser({
    username: 'Gerome',
    email: 'gerome@me',
    password: (process.env.FAKE_PASSWORD as string) || '123456',
    image: 'https://api.realworld.io/images/demo-avatar.png',
    demo: true,
  });

export const generateFakeData = async (): Promise<void> => {
  const existingAdmin = await getProfile('Gerome');
  if (existingAdmin) {
    return;
  }

  const user = await generateUser();

  const introduction = await createArticle(
    {
      title: 'Welcome to RealWorld project',
      description:
        'Exemplary fullstack Medium.com clone powered by React, Angular, Node, Django, and many more',
      body: 'See how the exact same Medium.com clone (called Conduit) is built using different frontends and backends. Yes, you can mix and match them, because they all adhere to the same API spec',
      tagList: ['welcome', 'introduction'],
    },
    user.username,
  );

  await addComment(
    'While most "todo" demos provide an excellent cursory glance at a framework\'s capabilities, they typically don\'t convey the knowledge & perspective required to actually build real applications with it.',
    introduction.slug,
    user.username,
  );

  await addComment(
    'RealWorld solves this by allowing you to choose any frontend (React, Angular, & more) and any backend (Node, Django, & more) and see how they power a real-world, beautifully designed full-stack app called Conduit.',
    introduction.slug,
    user.username,
  );

  const codebaseShow = await createArticle(
    {
      title: 'Explore implementations',
      description: 'discover the implementations created by the RealWorld community',
      body:
        'Over 100 implementations have been created using various languages, libraries, and frameworks.\n' +
        '\n' +
        'Explore them on CodebaseShow.',
      tagList: ['codebaseShow', 'implementations'],
    },
    user.username,
  );

  await addComment(
    'There are 3 categories: Frontend, Backend and FullStack',
    codebaseShow.slug,
    user.username,
  );

  const implementationCreation = await createArticle(
    {
      title: 'Create a new implementation',
      description: 'join the community by creating a new implementation',
      body: 'Share your knowledge and enpower the community by creating a new implementation',
      tagList: ['implementations'],
    },
    user.username,
  );

  await addComment(
    'Before starting a new implementation, please check if there is any work in progress for the stack you want to work on.',
    implementationCreation.slug,
    user.username,
  );

  await addComment(
    'If someone else has started working on an implementation, consider jumping in and helping them! by contacting the author.',
    implementationCreation.slug,
    user.username,
  );
};
