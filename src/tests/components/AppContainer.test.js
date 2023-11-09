import { createRoot } from 'react-dom/client';
import { AppContainer } from '../../Components/AppContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<AppContainer />);
  root.unmount();
});
