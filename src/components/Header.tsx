import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full border-b-4 border-black bg-white p-4 sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/" className="text-2xl font-black uppercase tracking-tighter">
                    VibeCard
                </Link>
                <button className="p-2 hover:bg-black hover:text-white transition-colors border-2 border-transparent focus:outline-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                        stroke="currentColor"
                        className="w-8 h-8"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                </button>
            </div>
        </header>
    );
}
