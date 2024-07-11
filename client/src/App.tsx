import RootLayout from './layouts/RootLayout';
import AuthLayout from './layouts/AuthLayout';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Booking from './pages/Booking/Booking';
import AboutUs from './pages/AboutUs/AboutUs';
import SearchCategory from './pages/SearchCategory/SearchCategory';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ROUTES } from './router/constants';
import { UserProvider } from './context/UserContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.SERVICES,
        element: <Services />,
      },
      {
        path: ROUTES.BOOKING,
        element: <Booking />,
      },
      {
        path: ROUTES.ABOUT_US,
        element: <AboutUs />,
      },
      {
        path: ROUTES.SEARCH_CATEGORY,
        element: <SearchCategory />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTES.LOGIN,
        element: <Login />,
      },
      {
        path: ROUTES.REGISTER,
        element: <Register />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </QueryClientProvider>
  );
};

export default App;
