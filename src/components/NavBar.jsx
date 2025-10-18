function NavBar() {
  return (
    <>
      <div className="navbar bg-base-100/85 shadow-sm fixed top-0 left-0 w-full z-50 backdrop-blur-md px-4 sm:px-6 lg:px-8">
        <div className="flex flex-1 justify-center sm:justify-end space-x-4">
          <a href="#about" className="btn btn-ghost text-xl">
            About
          </a>
          <a href="#projects" className="btn btn-ghost text-xl">
            Projects
          </a>
          <a href="#contact" className="btn btn-ghost text-xl">
            Contact
          </a>
        </div>
      </div>
    </>
  );
}

export default NavBar;
