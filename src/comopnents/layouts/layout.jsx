import { useEffect, useState } from "react";
import {Link, Outlet} from "react-router-dom";
import * as awesome from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../fontawesome"

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
                <p>This project was created only for the purpose of developing my skills, that is, not for commercial use.</p>
                <div className="links">
                    <h2>Social:</h2>
                    <a href="https://t.me/ARTEMKAddd" target="_blank">
                        <FontAwesomeIcon icon="fa-brands fa-telegram" style={{ "color": "#f5f5f5bf", "width": "30px", "height": "30px" }} />
                        <span>Telegram</span>
                    </a>

                    <a href="https://www.instagram.com/_atem4ik2/" target="_blank">
                        <FontAwesomeIcon icon="fa-brands fa-instagram" style={{ "color": "#f5f5f5bf", "width": "30px", "height": "30px" } }/>
                        <span>Instagram</span>
                    </a>  

                    <a href="https://github.com/2ADA2" target="_blank">
                        <FontAwesomeIcon icon="fa-brands fa-github" style={{ "color": "#f5f5f5bf", "width": "30px", "height": "30px" }} />
                        <span>GitHub</span>
                    </a> 

                    <a href="https://join.skype.com/invite/BUtqFcchNQHd" target="_blank">
                        <FontAwesomeIcon icon="fa-brands fa-skype" style={{ "color": "#f5f5f5bf", "width": "30px", "height": "30px" }} />
                        <span>Skype</span>
                    </a> 
                    
                </div>


            </footer>
        </>
    );
}