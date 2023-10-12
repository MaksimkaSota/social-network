import { Route, Routes } from 'react-router-dom';
import { NewsPage } from './Pages/NewsPage/NewsPage';
import { MusicsPage } from './Pages/MusicsPage/MusicsPage';
import { SettingsPage } from './Pages/SettingsPage/SettingsPage';
import { UsersPageContainer } from './Pages/UsersPage/UsersPageContainer';
import { LoginPage } from './Pages/LoginPage/Login';
import { MessagesPageContainer } from './Pages/MessagesPage/MessagesPageContainer';
import { ProfilePageContainer } from './Pages/ProfilePage/ProfilePageContainer';

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/profile/:id?" element={<ProfilePageContainer />} />
      <Route path="/messages/*" element={<MessagesPageContainer />} />
      <Route path="/users" element={<UsersPageContainer />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/musics" element={<MusicsPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
