import { Link } from "react-router-dom"

function Signin(){
    return(
        <>
        <div className="signin">
            <header>
                <img src="logo.png" alt="logo" />
            </header>
            <main>
                <img src="student.png" alt="" />
                <div>
                    <h2>Sign In</h2>
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" /> 
                    <Link to={"/dashboard"} className="btn_signin">Sign In</Link>
                    <p>Or</p>
                    <button>Sign In With Google</button>
                </div>
            </main>
        </div>
        </>
    )
}


export default Signin