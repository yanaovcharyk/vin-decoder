import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './AppRouter';
import './App.css';

export const App = () => (
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
)