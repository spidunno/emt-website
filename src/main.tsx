import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
	createBrowserRouter,
	RouterProvider
} from 'react-router-dom';
import Root from './Root';
import Home from './pages/Home';
import { CssBaseline, CssVarsProvider } from '@mui/joy';
import Servers from './pages/Servers';
import './index.css';
import ErrorPage from './pages/error-page';
import Mods from './pages/Mods';
import Games from './pages/Games';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root/>,
		errorElement: <ErrorPage/>,
		children: [
			{
				index: true,
				element: <Home/>
			},
			{
				path: '/servers',
				element: <Servers/>
			},
			{
				path: '/mods',
				element: <Mods/>
			},
			{
				path: '/games',
				element: <Games/>
			}
		]
	}
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
		<CssBaseline/>
		<CssVarsProvider>
			<RouterProvider router={router}/>
		</CssVarsProvider>
  </>,
)
