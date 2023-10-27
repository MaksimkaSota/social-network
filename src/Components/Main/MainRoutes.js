import { Route, Routes } from 'react-router-dom';
import { NewsPage } from './Pages/NewsPage/NewsPage';
import { MusicsPage } from './Pages/MusicsPage/MusicsPage';
import { SettingsPage } from './Pages/SettingsPage/SettingsPage';
import { UsersPageContainer } from './Pages/UsersPage/UsersPageContainer';
import { MessagesPage } from './Pages/MessagesPage/MessagesPage';
import { useAuthRedirect } from '../../hooks/useRedirect';
import { LoginPageContainer } from './Pages/LoginPage/LoginPageContainer';
import { ProfilePageContainer } from './Pages/ProfilePage/ProfilePageContainer';

export const MainRoutes = () => {
  const authProfilePage = useAuthRedirect(<ProfilePageContainer /> );
  const authMessagesPage = useAuthRedirect(<MessagesPage /> );

  return (
    <Routes>
      <Route path="/profile" element={authProfilePage} />
      <Route path="/profile/:id?" element={<ProfilePageContainer />} />
      <Route path="/messages/*" element={authMessagesPage} />
      <Route path="/users" element={<UsersPageContainer />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/musics" element={<MusicsPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/login" element={<LoginPageContainer />} />
    </Routes>
  );
};
