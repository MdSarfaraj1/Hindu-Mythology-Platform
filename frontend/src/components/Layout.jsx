import Navbar from "./NAvbar";
function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default Layout;
