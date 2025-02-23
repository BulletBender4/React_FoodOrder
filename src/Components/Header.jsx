import logoimg from "../assets/logo.jpg"


export default function Header() {
    return (
        <header id="main-header">
            <div id="title">
                <img src={logoimg} alt="Logo of a resturant"></img>
                <h1>REACT FOOD</h1>
            </div>
            <p>
                <nav>
                    <button>cart(0)</button>
                </nav>
            </p>
        </header>
    )
}