 import { Router } from "react-router-dom"
 import { Link } from 'react-router-dom';
 import "./Header.css"
 import Boton from "../Boton"

 function Header(){
     return (
        <header className="header">
            <img src="img/aluraflix.png" alt="logo Aluraflix"/>
            <div className="header_botones">
            <Link to="/"><Boton titulo="Home" /></Link>
            <Link to="/newvideo"><Boton titulo="Nuevo video" /></Link>
            </div>
        </header>
     )
 }
 export default Header