import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full border-t-4 border-black bg-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                <div className="mb-4 md:mb-0">
                    <p className="font-bold">© 2026 VibeCard VN</p>
                </div>
                <div className="flex space-x-6 font-bold underline decoration-2 decoration-black">
                    <Link href="#" className="hover:bg-black hover:text-white px-1">
                        Điều khoản
                    </Link>
                    <Link href="#" className="hover:bg-black hover:text-white px-1">
                        Chính sách
                    </Link>
                </div>
            </div>
        </footer>
    );
}
