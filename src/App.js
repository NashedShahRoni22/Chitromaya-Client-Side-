import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Route';

function App() {
  return (
    <main className='container mx-auto text-white'>
      <RouterProvider router={router}/>
    </main>
  );
}

export default App;
