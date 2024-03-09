import LvtvLogo from "../assets/lvtv-logo.jpg";
function Header() {
  return (
    <header className="bg-custom">
      <nav className="flex justify-between items-center 2-[92%] mx-auto">
        <div>
          <h1 className="text-white text-4xl font-bold p-8">LVTV</h1>
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
      <div className="w-full bg-yellow-400 text-black px-10">
        <div className="flex justify-center">
          <ul className="flex text-center gap-[4vw]">
            <li>
              <a className="text-xl hover:text-white" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="text-xl hover:text-white" href="#">
                Teleradio
              </a>
            </li>
            <li>
              <a className="text-xl hover:text-white" href="#">
                Our Story
              </a>
            </li>
            <li>
              <a className="text-xl hover:text-white" href="#">
                Archives
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
export default Header;
