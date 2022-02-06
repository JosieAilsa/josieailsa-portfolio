import Nav from "../Nav/Nav";
const Layout = ({children}) => {
    return (
    <>
        <Nav/>
        <main>
            {children}
        </main>
    </>
      );
}
 
export default Layout;