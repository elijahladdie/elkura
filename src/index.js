import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Profile from './pages/Profile';
import Resume from './pages/Resume';
import Lost from './pages/Lost';


const router = createBrowserRouter([
    {
    path:"/",
    element:<Home/>
},{
    path:"/home",
    element:<Home/>
},{
    path:'/profile',
    element:<Profile/>
},{
    path: '/resume',
    element:<Resume/>
},{
    path:'*',
    element:<Lost/>
}
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>

);

