import MainNavBar from "./navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MainNavBar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
