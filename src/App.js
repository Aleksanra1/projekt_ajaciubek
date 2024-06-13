import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Map_1 from "./components/map_1/Map_1";
import Map_2 from "./components/map_2/Map_2";
import Map_3 from "./components/map_3/Map_3";
import { Dashboard } from "@mui/icons-material";
import Dashboard_1 from "./components/dashboard_1/Dashboard_1";

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
