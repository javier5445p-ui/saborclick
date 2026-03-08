import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Confirmation from "./pages/Confirmation";
import Reservation from "./pages/Reservation";

function App(){

const [page,setPage] = useState("home");

return(

<div>

<Navbar setPage={setPage}/>

{page === "home" && <Home setPage={setPage}/>}
{page === "login" && <Login/>}
{page === "register" && <Register/>}
{page === "contact" && <Contact/>}
{page === "reservation" && <Reservation setPage={setPage}/>}
{page === "confirmation" && <Confirmation setPage={setPage}/>}
</div>

)

}

export default App;