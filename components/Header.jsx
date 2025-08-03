import {Link} from "react-router-dom"

export default function Header() {
    return (
        <Link to="." className="">
        <header>
            <img src="../images/globe.png" alt="globe icon" />
            <h1>My travel journal.</h1>
        </header>
        </Link>
    )
}