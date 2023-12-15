import React from 'react';
import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { router } from '@site/routes';
import '@site/style/global.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(<RouterProvider router={router} />);
