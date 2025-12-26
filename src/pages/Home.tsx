import { useState } from "react";
import Input from "../components/Input";
import { Button } from "../components/ui/button";
import { ArrowUpIcon, GhostIcon } from "lucide-react";
import { toast } from "sonner";

export const Home = () => {

    const [length, setLength] = useState("");
    
    const  handleSubmit = (e: any) => {
        e.preventDefault();
        
        const value = Number(length);

        if (value > 0 && value <= 15) {
            toast("Chiem lay em di");
        } else if (value <= 0) {
            toast("Xin loi, minh thich cu");
        } else {
            toast("Dit me rach lon bo may");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="p-4">
            <Input value={length} onChange={setLength} />

            <div className="mt-[50px] font-mono">
                <Button type="submit" className="!hover:outline-none !focus:outline-none !bg-white !font-bold text-black !outline-none">
                    Kiểm tra
                </Button>
            </div>
        </form>
    );
}