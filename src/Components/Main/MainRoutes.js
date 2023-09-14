import { Route, Routes } from 'react-router-dom';
import { ProfilePage } from './Pages/ProfilePage/ProfilePage';
import { MessagesPage } from './Pages/MessagesPage/MessagesPage';
import { UsersPage } from './Pages/UsersPage/UsersPage';
import { NewsPage } from './Pages/NewsPage/NewsPage';
import { MusicsPage } from './Pages/MusicsPage/MusicsPage';
import { SettingsPage } from './Pages/SettingsPage/SettingsPage';

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/messages/*" element={<MessagesPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/musics" element={<MusicsPage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  );
};
