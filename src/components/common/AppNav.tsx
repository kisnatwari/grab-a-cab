import Image from "next/image";
import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import AuthModal from "../auth/AuthModel";

export default function AppNav() {
    return (
        <nav className="flex justify-between items-center p-2 border-b">
            <div className="flex space-x-4 items-center">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo.png"
                        alt="logo"
                        width={50}
                        height={50}
                        className="w-15"
                    /> 
                    <span className="border-b border-yellow-500"><strong className="text-yellow-500">WORD</strong>WAVE</span>
                </Link>
                <form>
                    <Input
                        type="text"
                        placeholder="search..."
                        className="rounded-3xl outline-none w-full"
                    />
                </form>
            </div>
            <div className="flex items-center space-x-4">
                <Link href={"#"}>
                    <AuthModal/>
                </Link>
            </div>
        </nav>
    );
}