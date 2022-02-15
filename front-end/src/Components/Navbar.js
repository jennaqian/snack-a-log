import {Link} from "react-router-dom"

export default function Navbar (){
    return(
        <nav className="navbar">
            <Link to="/"><img className="navbar-logo" src="https://previews.123rf.com/images/vectortatu/vectortatu2008/vectortatu200800032/154062645-colorful-elements-of-fast-food-cartoon-pictures-of-fries-snacks-and-hamburgers-variety-meal-for-fast.jpg" alt="Snack Logo" /></Link>
            <Link to="/snacks"><h1>Snacks</h1></Link>
            <button><Link to="/snacks/new">New Snack</Link></button>
        </nav>
    )
}