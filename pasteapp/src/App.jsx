
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import './App.css'
// const router = createBrowserRouter(
//   [
//     {
//       path :"/",
//       element:
//       <div>
//         <navbar/>
//         <home/>


//       </div>
//     },
//     {
//       path :"pastes",
//       element:
//       <div>
//         <navbar/>
//         <pastes/>


//       </div>
//     },
    
//     {
//       path :"/pastes/:id",
//       element:
//       <div>
//         <navbar/>
//         <viewpastes/>
        
//       </div>
//     }

// ]);

// function App() {
//   // const [count, setCount] = useState(0)

//   return (
//     <div>
//       <RouterProvider router={router}/>
//     </div>
     
//   )
// }
// export default App



 


import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar     from './components/navbar';
import Home       from './components/home';
import Pastes     from './components/pastes';
import ViewPastes from './components/viewpaste';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/pastes",
    element: (
      <div>
        <Navbar />
        <Pastes />
      </div>
    ),
  },
  {
    path: "/pastes/:id",
    element: (
      <div>
        <Navbar />
        <ViewPastes />
      </div>
    ),
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
