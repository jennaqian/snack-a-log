import {Link} from "react-router-dom"

export default function Navbar (){
    return(
        <nav className="navbar">
            <Link to="/"><img className="navbar-logo" src="https://images-platform.99static.com//PPHeJdKrhRsUqRrLC1UXK-XQBNs=/271x63:967x759/fit-in/500x500/99designs-contests-attachments/36/36058/attachment_36058065" alt="Snack Logo" /></Link>
            <Link to="/snacks"><h1>Snacks</h1></Link>
            <button><Link to="/snacks/new">New Snack</Link></button>
        </nav>
    )
}