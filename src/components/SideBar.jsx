import { useState } from "react"

export const SideBar=()=>{
    const [isCollapsed, setIsCollapsed] = useState(false);

    return <div className={`"bg-blue-500 text-whote h-screen ${isCollapsed ? "w-16" :"w-60"}`}>
        <div>
            <button onClick={()=>{
                setIsCollapsed(!isCollapsed)
            }} >{isCollapsed ? "➡️" : "⬅️"}</button>
        </div>

        <div>
        <SidebarItem icon="🏠" label="Dashboard" collapsed={isCollapsed} />
        <SidebarItem icon="💰" label="Revenue" collapsed={isCollapsed} />
        <SidebarItem icon="📦" label="Orders" collapsed={isCollapsed} />
        <SidebarItem icon="⚙️" label="Settings" collapsed={isCollapsed} /> 
        </div>
    </div>
};

const SidebarItem = ({icon, label, collapsed}) =>{
    return <div>
        <span>{icon}</span>
        {!collapsed && <span className="text-sm">{label}</span>}
    </div>
};