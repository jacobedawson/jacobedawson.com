import Header from "./Header";
import Navbar from "./Navbar";

const Layout = props => (
  <div className="layout">
    <Header />
    <div className="content">{props.children}</div>
    <Navbar />
  </div>
);

export default Layout;
