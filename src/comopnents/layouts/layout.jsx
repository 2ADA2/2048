import {Link, Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <header>
                <nav>
                    <Link to="/">home</Link>
                    <Link to="/game">play</Link>
                    <Link to="/records">records</Link>
                    <Link to="/profile">profile</Link>
                </nav>
            </header>

            <main>
                <Outlet/>
            </main>

            <footer>
                <Link to="/"></Link>
                <Link to="/game"></Link>
                <Link to="/records"></Link>
                <Link to="/profile"></Link>
            </footer>
        </>
    );
}