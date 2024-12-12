
import { createMemoryRouter, RouterProvider } from 'react-router-dom'; // Import RouterProvider
import Actors from './pages/Actors';
import Home from './pages/Home';
import Directors from './pages/Directors';
import Movie from './pages/Movie';
import ErrorPage from './pages/ErrorPage';



const routes = [
  { path: '/', component: Home },
  { path: '/actors', component: Actors },
  { path: '/directors', component: Directors },
  { path: '/movie/:id', component: Movie },
  { path: '*', component: ErrorPage }, // Catch-all route for error page
];

const router = createMemoryRouter(routes, { initialEntries: ['/'] });

export default router

