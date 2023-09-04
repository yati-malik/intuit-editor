import React from 'react';
import { Provider } from 'react-redux';
import { setupStore } from './redux/store';
import { Home } from './components/pages/home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Editor } from './components/organisms/editor/Editor';
import styles from './App.module.scss';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>Something went wrong</div>,
    children: [
      {
        path: 'content/:contentId',
        element: <Editor></Editor>
      }
    ]
  },
]);

function App() {
  return (
    <div data-testid='app-container' className={styles['app-container']}>
      <Provider store={setupStore()}>
        <RouterProvider router={router} />
      </Provider >
    </div>
  );
}

export default App;
