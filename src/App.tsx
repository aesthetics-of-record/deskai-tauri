import { Button } from "./components/ui/button";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import WindowTitlebar from "./components/titlebar/window-titlebar";
import Layout from "./components/global/layout";
import { ThemeProvider } from "./providers/theme-provider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // loader: rootLoader,
    children: [
      {
        index: true,
        element: <div>Home Page Content</div>,
      },
      {
        path: "ai",
        element: <div>ai</div>,
      },
      {
        path: "setting",
        element: <div>setting</div>,
      },
      {
        path: "dashboard",
        element: <div>dashboard</div>,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="deskai-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
