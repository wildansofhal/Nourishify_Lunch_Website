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
                    <button>Sign In</button>
                    <p>Or</p>
                    <button>Sign In With Google</button>
                </div>
            </main>
        </div>
        </>
    )
}


export default Signin