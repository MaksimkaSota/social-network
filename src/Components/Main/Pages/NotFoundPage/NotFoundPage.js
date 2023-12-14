import { useLocation } from 'react-router-dom';
import { Error } from '../../../Common/Error/Error';
import robot from '../../../../assets/images/robot-404.png';

export const NotFoundPage = () => {
  const {pathname} = useLocation();
  const message = `The requested URL "${pathname}" was not found on this server!`

  return (
    <Error code="404" message={message} img={robot} />
  );
};
