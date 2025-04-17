import { createBrowserRouter } from 'react-router-dom';
import Report from './pages/Report';
import ReportSuccess from './pages/Report/Success';

export const router = createBrowserRouter([
  {
    path: '/report',
    element: <Report />
  },
  {
    path: '/report/success',
    element: <ReportSuccess />
  }
]); 