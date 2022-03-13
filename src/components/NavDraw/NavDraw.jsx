import "./NavDraw.scss";
const NavDraw = () => {
  return (
    <div className="nav__draw-wrap">
      <ul className="nav__draw">
        <li className="nav__draw-link"><a href="#home">home</a></li>
        <li className="nav__draw-link"><a href="#projects">projects</a></li>
        <li className="nav__draw-link"><a href="">skills</a></li>
        <li className="nav__draw-link"><a href="">contact</a></li>
      </ul>
    </div>
  );
};

export default NavDraw;


