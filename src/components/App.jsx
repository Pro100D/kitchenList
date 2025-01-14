import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { WelcomePage } from 'pages/welcomePage/WelcomePage';
import { HomePage } from 'pages/homePage/HomePage';
import { FavoritePage } from 'pages/favoritePage/FavoritePage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<WelcomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/favorite" element={<FavoritePage />} />
      </Route>
    </Routes>
  );
};
