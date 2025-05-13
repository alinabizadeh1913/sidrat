import DirectionHandler from "./direction";
import Loading from "./loading";
import MainNavBar from "./navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Loading />
      <DirectionHandler />
      <MainNavBar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
