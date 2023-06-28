import Rules from "./Rules";

function Header() {
  return (
    <>
      <nav className="navbar bg-dark">
        <div className="container-fluid d-flex justify-content-center">
          <span className="mb-0 h1 text-white">MEMORY CARD</span>
        </div>
      </nav>
      <Rules />
    </>
  );
}

export default Header;
