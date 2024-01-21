import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/global/layout';
import { ThemeProvider } from './providers/theme-provider';
import LoginProvider from './providers/login-provider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    // loader: rootLoader,
    children: [
      {
        index: true,
        element: <div>Home Page Content</div>,
      },
      {
        path: 'ai',
        element: <div>ai</div>,
      },
      {
        path: 'setting',
        element: <div>setting</div>,
      },
      {
        path: 'dashboard',
        element: <div>dashboard</div>,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <ThemeProvider defaultTheme='dark' storageKey='deskai-ui-theme'>
        <LoginProvider>
          <RouterProvider router={router} />
        </LoginProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
