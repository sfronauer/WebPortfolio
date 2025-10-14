function NavBar() {
  return (
    <>
      <div>
        <div className="navbar bg-base-100/85 shadow-sm fixed top-0 left-0 w-full z-50 backdrop-blur-md justify-end pr-40">
          <a href="#about" className="btn btn-ghost">
            About
          </a>
          <a href="#projects" className="btn btn-ghost">
            Projects
          </a>
          <a href="#contact" className="btn btn-ghost">
            Contact
          </a>
        </div>
      </div>
    </>
  );
}

export default NavBar;
