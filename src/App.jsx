import { useEffect, useState } from "react";
import { getCars, addCar, deleteCar } from "./services/api";
import CarList from "./components/CarList";
import CarForm from "./components/CarForm";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";

function App() {
  const [cars, setCars] = useState([]);
  const [active, setActive] = useState("cars"); // sidebar state
  const [collapsed, setCollapsed] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(
    false
  );

  const handleLogin = (token) => {
    localStorage.setItem("token", token); // save token
    setIsAuthenticated(true);              // update state
  };

  const loadCars = async () => {
    const data = await getCars();
    setCars(data);
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadCars();
    }
  }, [isAuthenticated]);

  const handleAdd = async (car) => {
    await addCar(car);
    loadCars();
    setActive("cars"); // go back after add
  };

  const handleDelete = async (id) => {
    await deleteCar(id);
    loadCars();
  };
   
  if(!isAuthenticated) {
    return (
    <Login onLogin={handleLogin} />
  );
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar
        active={active}
        setActive={setActive}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      {/* Main content */}
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">
          <h1 className="text-3xl font-bold mb-6 text-center">
            🚗 Car Admin Panel
          </h1>

          {active === "add" && <CarForm onAdd={handleAdd} />}
          {active === "cars" && <CarList cars={cars} onDelete={handleDelete} />}
        </div>
      </div>
    </div>
  );
}

export default App;
