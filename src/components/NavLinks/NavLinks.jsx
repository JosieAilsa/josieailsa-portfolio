const NavLinks = ({ linksWrapperClass, linksClass }) => {
  return (
    <ul className={linksWrapperClass}>
      <li className={linksClass}>
        <a href="#home">home</a>
      </li>
      <li className={linksClass}>
        <a href="#projects">projects</a>
      </li>
      <li className={linksClass}>
        <a href="#contact">contact</a>
      </li>
    </ul>
  );
};

export default NavLinks;
