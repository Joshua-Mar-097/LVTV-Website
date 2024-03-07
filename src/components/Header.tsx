import logo from "../assets/lvtv-logo.jpg";
function Header() {
    return (
            <header className="bg-blue-900">
                <nav className="flex justify-between items-center 2-[92%] mx-auto">
                    <div>
                        <h1 className="p-10">LVTV</h1>
                    </div>
                    <div className="">
                        <ul className="flex items-center gap-[4vw]">
                            <li>
                                <a className="hover:text-gray-500" href="#">Home</a>
                            </li>
                            <li>
                                <a className="hover:text-gray-500" href="#">Teleradio</a>
                            </li>
                            <li>
                                <a className="hover:text-gray-500" href="#">Our Story</a>
                            </li>
                            <li>
                                <a className="hover:text-gray-500" href="#">Archives</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <button>Log In</button>
                        <button className="bg-yellow-400 text-black px-5 py-2">Watch Live</button>
                    </div>
                </nav>
            </header>
    );
}
export default Header;