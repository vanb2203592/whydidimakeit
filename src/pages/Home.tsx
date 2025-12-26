import { useState } from "react";
import Input from "../components/Input";
import { Button } from "../components/ui/button";
import { toast } from "sonner";

export const Home = () => {

    const [length, setLength] = useState("");

    function isNumber(str: string): boolean {
        return !isNaN(Number(str));
    }
    
    const  handleSubmit = (e: any) => {
        e.preventDefault();
        
        if (!length) {
            toast.error("Nhap gi do vao");
            return;
        }
        
        if (!isNumber(length)) {
            toast.error("Nhap so vao");
            console.log(isNumber(length))
            return;
        }

        const value = Number(length);

        if (value > 0 && value <= 15) {
            toast("Chiem lay em di");
        } else if (value <= 0) {
            toast("Xin loi, minh thich cu");
        } else {
            toast("Dit me rach lon bo may");
        }
        return;
    }

    return (
        <form onSubmit={handleSubmit} className="p-4">
            <Input value={length} onChange={setLength} />

            <div className="mt-[50px] font-mono">
                <Button type="submit" className="cursor-pointer -rotate-1 hover:rotate-0 !rounded-none hover:scale-105 !bg-[#000] hover:!bg-[#fb71a2] !font-bold text-white">
                    Kiểm tra
                </Button>
            </div>
        </form>
    );
}