function Navbar({ setPage }){

return(

<div className="navbar">

<h2 className="logo">SaborClick</h2>

<div className="nav-links">

<button onClick={()=>setPage("home")}>Inicio</button>

<button onClick={()=>setPage("login")}>Login</button>

<button onClick={()=>setPage("register")}>Registro</button>

<button onClick={()=>setPage("contact")}>Contacto</button>

</div>

</div>

)

}

export default Navbar;