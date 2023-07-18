
import {
  createBrowserRouter,
  RouterProvider,
 } from "react-router-dom";

import Home from "./route/Home";

import TourCard from "./components/TourCard";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home />,children:[
       
      {path:"/",element:<TourCard/>},
      {path:"/skills",element:<Skills/>},
      {path:"/projects",element:<Projects/>},
      {path:"/contact",element:<Contact/>},
      
    ] },
  ])
  return(
    <div>
    <RouterProvider router={router}/>
    </div>
  )
}

export default App