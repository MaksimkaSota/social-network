import { Route, Routes } from 'react-router-dom';
import { NewsPage } from './Pages/NewsPage/NewsPage';
import { MusicsPage } from './Pages/MusicsPage/MusicsPage';
import { SettingsPage } from './Pages/SettingsPage/SettingsPage';
import { UsersPageContainer } from './Pages/UsersPage/UsersPageContainer';
import { LoginPage } from './Pages/LoginPage/Login';
import { ProfilePage } from './Pages/ProfilePage/ProfilePage';
import { MessagesPage } from './Pages/MessagesPage/MessagesPage';
import { useAuthRedirect } from '../../hooks/useRedirect';

export const MainRoutes = () => {
  const authProfilePage = useAuthRedirect(<ProfilePage /> );
  const authMessagesPage = useAuthRedirect(<MessagesPage /> );

  return (
    <Routes>
      <Route path="/profile/:id?" element={authProfilePage} />
      <Route path="/messages/*" element={authMessagesPage} />
      <Route path="/users" element={<UsersPageContainer />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/musics" element={<MusicsPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
