import { Route, Routes } from 'react-router-dom';
import { ProfilePage } from './ProfilePage/ProfilePage';
import { MessagesPage } from './MessagesPage/MessagesPage';
import { UsersPage } from './UsersPage/UsersPage';
import { NewsPage } from './NewsPage/NewsPage';
import { MusicsPage } from './MusicsPage/MusicsPage';
import { SettingsPage } from './SettingsPage/SettingsPage';

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
