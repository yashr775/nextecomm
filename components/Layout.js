import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div >
            <Navbar /> {/* ✅ Header (Always Visible) */}
            <main >{children}</main> {/* ✅ Page Content */}
            <Footer /> {/* ✅ Footer (Always Visible) */}
        </div>
    );
};

export default Layout;
