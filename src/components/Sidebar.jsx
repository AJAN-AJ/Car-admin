function Sidebar({ active, setActive, collapsed, setCollapsed }) {
  return (
    <div
      className={`${
        collapsed ? "w-12" : "w-64"
      } bg-gray-900 text-white  transition-all duration-300`}
    >
      {/* Toggle button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="text-sm px-3 py-2 rounded"
      >
        {collapsed ? "➡" : "⬅"}
      </button>
      <ul className="space-y-2">
        <li
          onClick={() => setActive("cars")}
          className={`cursor-pointer p-2 rounded ${
            active === "cars" ? "bg-gray-700" : "hover:bg-gray-800"
          }`}
        >
          🚗 {!collapsed && "Cars"}
        </li>

        <li
          onClick={() => setActive("add")}
          className={`cursor-pointer p-2 rounded ${
            active === "add" ? "bg-gray-700" : "hover:bg-gray-800"
          }`}
        >
          ➕ {!collapsed && "Add Car"}
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
