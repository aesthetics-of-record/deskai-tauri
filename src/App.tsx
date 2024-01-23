import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/global/layout';
import { ThemeProvider } from './providers/theme-provider';
import { RecoilRoot } from 'recoil';
import AiChatPage from './pages/ai-chat-page';
import PromptSettingPage from './pages/prompt-setting-page';

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
        element: <AiChatPage />,
      },
      {
        path: 'setting',
        element: <PromptSettingPage />,
      },
      {
        path: 'dashboard',
        element: <div>dashboard</div>,
      },
      {
        path: 'extensions',
        element: <div>extensions</div>,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RecoilRoot>
        <ThemeProvider defaultTheme='dark' storageKey='deskai-ui-theme'>
          <RouterProvider router={router} />
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
