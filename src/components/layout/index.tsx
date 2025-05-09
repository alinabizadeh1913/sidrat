import DirectionHandler from "./direction";
import Loading from "./loading";
import MainNavBar from "./navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DirectionHandler />
      <MainNavBar />
      <main>{children}</main>
      <Loading />
    </>
  );
};

export default Layout;
