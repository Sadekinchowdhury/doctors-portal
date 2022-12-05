import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom'
import './App.css';
import routes from './Routes/Roters';

function App() {


  return (
    <div className='max-w-screen-lg mx-auto'>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>

    </div>
  );
}

export default App;
