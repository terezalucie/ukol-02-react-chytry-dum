import { createRoot } from 'react-dom/client';
import './global.css';
import App from './pages/App/App';

createRoot(
  document.querySelector('#app'),
).render(<App />);
