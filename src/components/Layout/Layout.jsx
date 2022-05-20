import Nav from "../../containers/Nav/Nav";
const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};

export default Layout;
