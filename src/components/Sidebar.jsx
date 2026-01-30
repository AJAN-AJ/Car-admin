function Sidebar({ active, setActive, collapsed, setCollapsed }) {
  return (
    <div
      className={`${
        collapsed ? "w-20" : "w-64"
      } bg-gray-900 text-white min-h-screen p-4 transition-all duration-300`}
    >
      {/* Toggle button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="mb-6 text-sm bg-gray-700 px-3 py-1 rounded"
      >
        {collapsed ? "➡" : "⬅"}
      </button>

      {!collapsed && <h2 className="text-xl font-bold mb-8">Admin</h2>}

      <ul className="space-y-4">
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
