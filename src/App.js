import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Map_1 from "./components/map_1/Map_1";
import Map_2 from "./components/map_2/Map_2";
import Map_3 from "./components/map_3/Map_3";
import Dashboard_1 from "./components/dashboard_1/Dashboard_1";
import Dashboard_2 from "./components/dashboard_2/Dashboard_2";
import Dashboard_3 from "./components/dashboard_3/Dashboard_3";
import Oprojekcie from "./components/oprojekcie/Oprojekcie";
import Dashboard_1a from "./components/dashboard_1a/Dashboard_1a";
import Dashboard_2a from "./components/dashboard_2a/Dashboard_2a";
import Dashboard_3a from "./components/dashboard_3a/Dashboard_3a";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/services/map_1",
    element: <Map_1 />,
  },
  {
    path: "/services/map_2",
    element: <Map_2 />,
  },
  {
    path: "/services/map_3",
    element: <Map_3 />,
  },
  {
    path: "/services/dashboard_1",
    element: <Dashboard_1 />,
  },
  {
    path: "/services/dashboard_2",
    element: <Dashboard_2 />,
  },
  {
    path: "/services/dashboard_3",
    element: <Dashboard_3 />,
  },
  {
    path: "/oprojekcie",
    element: <Oprojekcie />,
  },
  {
    path: "/services/dashboard_1/dashboard_1a",
    element: <Dashboard_1a />,
  },
  {
    path: "/services/dashboard_2/dashboard_2a",
    element: <Dashboard_2a />,
  },
  {
    path: "/services/dashboard_3/dashboard_3a",
    element: <Dashboard_3a />,
  },
]);

function App() {
  const imie = "world";

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
