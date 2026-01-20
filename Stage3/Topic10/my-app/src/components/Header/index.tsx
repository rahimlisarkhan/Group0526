import Link from "next/link"


export const Header = () => {

    return <header className="flex justify-between items-center p-4 bg-gray-200">
        <h1 className="text-teal-900 text-4xl ">Campany Name</h1>
        <nav>
            <ul className="flex gap-4">
                <li>
                    <Link href="/" className="text-teal-900 hover:text-teal-700">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/blog" className="text-teal-900 hover:text-teal-700">
                        Blog
                    </Link>

                </li>

                <li>
                    <Link href="/about" className="text-teal-900 hover:text-teal-700">
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
}