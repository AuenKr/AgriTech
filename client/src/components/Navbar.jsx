function Navbar() {
  return (
    <div className="text-2xl text-white bg-seaBlue h-screen flex flex-col justify-between items-center">
      <h2 className="transition duration-500 text-4xl pt-4 hover:text-green-500 hover:font-bold hover:scale-125 cursor-pointer">
        AgroTech
      </h2>
      <ul>
        <li className="transition hover:text-green-500 hover:font-bold hover:scale-110 cursor-pointer">
          Home
        </li>
        <li className="transition hover:text-green-500 hover:font-bold hover:scale-110 cursor-pointer">
          Profile
        </li>
        <li className="transition hover:text-green-500 hover:font-bold hover:scale-110 cursor-pointer">
          Ask AI
        </li>
      </ul>
      <div
        className="transition hover:text-green-500 hover:font-bold hover:scale-110 cursor-pointer"
        onClick={() => {}}
      >
        About us
      </div>
    </div>
  );
}

export default Navbar;
