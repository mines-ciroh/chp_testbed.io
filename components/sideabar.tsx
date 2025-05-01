import React from "react";

interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
    return (
        <div className="flex flex-col items-center bg-[#75ACC4] font-[Poppins] w-50 ">
            <div className="flex flex-col items-center justify-center mt-8 space-y-4">
                {children}
            </div>
        </div>
    );
};

export default Sidebar;