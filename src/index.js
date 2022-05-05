import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DashBoard from './pages/DashBoard/Dashboard';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from './pages/Error404/Error404';
import { Button } from 'reactstrap';
import { QueryClient, QueryClientProvider} from "react-query"
const queryClient = new QueryClient();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/Dashboard'} element={<DashBoard />} />
      <Route path={'*'} element={<Error404 />} />
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
