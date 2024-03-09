import logo from "../assets/lvtv-logo.jpg";

function Header() {
  return (
    <header className="bg-blue-900">
      <nav className="flex justify-between items-center 2-[92%] mx-auto">
        <div>
          <img className="h-30 w-30" src={logo}></img>
          <h1 className="text-white text-4xl font-bold p-8"></h1>
        </div>
        <div className="">
          <ul className="flex items-center gap-[4vw]">
            <li>
              <a className="text-white text-xl hover:text-gray-500" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="text-white text-xl hover:text-gray-500" href="#">
                Teleradio
              </a>
            </li>
            <li>
              <a className="text-white text-xl hover:text-gray-500" href="#">
                Our Story
              </a>
            </li>
            <li>
              <a className="text-white text-xl hover:text-gray-500" href="#">
                Archives
              </a>
            </li>
          </ul>
        </div>
        <div>
          <button className="text-xl text-white px5 py-2 mr-5 hover:text-gray-500">
            Log In
          </button>
          <button className="text-xl rounded-lg bg-yellow-400 text-black px-5 py-2 mr-10 hover:text-white hover:bg-blue-300">
            Watch Live
          </button>
        </div>
      </nav>
    </header>
  );
}
export default Header;
