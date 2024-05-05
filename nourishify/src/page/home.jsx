import { Link } from "react-router-dom"

function Home(){
    return(
        <>
            <div className="home">
                <header>
                    <ul>
                        <li><a href="">About</a></li>
                        <li><a href="">Food Galery</a></li>
                        <li><a href="">Information</a></li>
                    </ul>
                    </header>
                <main>
                    <img src="home.png" alt="anak mengambil makan" />
                    <div className="title">
                        <h1>Nourishify</h1>
                        <Link to={"/signin"} className="btn_get-started">Get Started</Link>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Home