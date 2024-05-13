import { Link } from "react-router-dom"

function Editprofile(){
    return(
        <>
        <div className="editprofile">
            <header>
                <img src="logo.png" alt="logo" />
            </header>
            <main>
                <img src="editprofile.png" alt="" />
                <div>
                    <h2>Edit Profile</h2>
                    <input type="text" placeholder="Nama" />
                    <input type="text" placeholder="Nisn" />
                    <input type="Email" placeholder="Email Adress" />
                    <input type="text" placeholder="Nomor Telepon" />
                    <Link to={"/dashboard"} className="btn_save">Save</Link>
                </div>
            </main>
        </div>
        </>
    )
}

export default Editprofile