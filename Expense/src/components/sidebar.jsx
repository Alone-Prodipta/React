import React from "react";


function Sidebar() {
    return (
        <div className="flex">
            {/* Sidebar */}
            <nav className="w-64 h-screen bg-[#1E1E1E] text-gray-300 flex flex-col p-4 shadow-lg">
                <h1 className="text-xl font-bold text-white mb-6">Dashboard</h1>
                <ul className="space-y-4">
                    <li>
                        <a href="#" className="block py-2 px-4 rounded hover:bg-[#2A2A2A] transition">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-4 rounded hover:bg-[#2A2A2A] transition">
                            Profile
                        </a>
                    </li>
                </ul>
            </nav>

            {/* Main Content */}
            
        </div>
    );
}

export default Sidebar;
