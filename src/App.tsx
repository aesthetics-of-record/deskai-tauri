import { Button } from './components/ui/button';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import WindowTitlebar from './components/titlebar/window-titlebar';
import Home from './pages/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    // loader: rootLoader,
    children: [
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
      <RouterProvider router={router} />
    </>
  );
}

export default App;
