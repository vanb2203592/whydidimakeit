import { Outlet } from "react-router-dom";
import { Toaster } from "../components/ui/sonner";
export default function Layout() {
    return (
        <div className="h-full w-full">
            <Toaster position="top-center"/>
            <Outlet />
        </div>
    );
};