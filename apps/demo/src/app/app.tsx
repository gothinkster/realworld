import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Header from './components/header';
import HomePage from './pages/home/home.page';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ArticlePage, { loader as articleLoader } from './pages/article/article.page';
import LoginPage from './pages/login/login.page';
import RegisterPage from './pages/register/register.page';
import SettingsPage from './pages/settings/settings.page';
import ProfilePage, { ProfileTab, loader as profileLoader } from './pages/profile/profile.page';
import EditorPage, { loader as editorLoader } from './pages/editor/editor.page';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import AuthProvider from './auth/auth.context';
import Footer from './components/footer';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
      {
        path: 'profile/:username',
        element: <ProfilePage defaultTab={ProfileTab.MyArticles} />,
        loader: async ({ params }) => profileLoader(queryClient)(params.username as string),
      },
      {
        path: 'profile/:username/favorites',
        element: <ProfilePage defaultTab={ProfileTab.FavoritedArticles} />,
        loader: async ({ params }) => profileLoader(queryClient)(params.username as string),
      },
      {
        path: 'editor',
        element: <EditorPage />,
        loader: async () =>
          Promise.resolve({
            data: {
              title: '',
              description: '',
              body: '',
              tagList: [],
            },
          }),
      },
      {
        path: 'editor/:slug',
        element: <EditorPage />,
        loader: async ({ params }) => editorLoader(params.slug as string),
      },
      {
        path: 'settings',
        element: <SettingsPage />,
      },
      {
        path: 'article/:slug',
        element: <ArticlePage />,
        loader: async ({ params }) => articleLoader(queryClient)(params.slug as string),
      },
    ],
  },
]);

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
