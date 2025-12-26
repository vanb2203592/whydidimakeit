import { Outlet, Link, useNavigate } from "react-router-dom";
import { Toaster } from "../components/ui/sonner";
import { Home } from "./Home";
export default function Layout() {
    return (
        <div className="h-full w-full">
            <Toaster position="top-center"/>
            <Outlet />
        </div>
    );
};