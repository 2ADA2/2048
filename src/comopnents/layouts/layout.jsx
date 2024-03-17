import { useEffect, useState } from "react";
import {Link, Outlet} from "react-router-dom";

export const Layout = () => {
    const [page, setPage] = useState(window.location.href)
    const way = "http://localhost:3000/"
    useEffect(()=>setPage(window.location.href),[page])
    return (
        <>
            <header>
                <nav>
                    <Link to="/" className={(page == way)? "active" : ""}  onClick = {()=>setPage(0)}>home</Link>
                    <Link to="/game" className={(page == way+"game")? "active" : ""} onClick = {()=>setPage(0)}>play</Link>
                    <Link to="/records" className={(page == way+"records")? "active" : ""} onClick = {()=>setPage(0)}>records</Link>
                    <Link to="/profile" className={(page == way+"profile")? "active" : ""} onClick = {()=>setPage(0)}>profile</Link>
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