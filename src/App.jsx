import { useState } from "react";
import { Sidebar, Footertbar } from "./components/shared";

function App() {
  const [showMenu, setShowMenu] = useState(true);

  const onChangeShowMenu = (data) => {
    setShowMenu(data);
  };

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu}></Sidebar>
      <Footertbar showMenu={showMenu} onChange={onChangeShowMenu}></Footertbar>

      <main className="lg:pl-28 grid grid-cols-1 lg:grid-cols-8">
        <div className="lg:col-span-6 bg-red-500">Productos</div>
        <div className="lg:col-span-2 bg-red-100 fixed lg:static">Carrito</div>
      </main>
    </div>
  );
}

export default App;
