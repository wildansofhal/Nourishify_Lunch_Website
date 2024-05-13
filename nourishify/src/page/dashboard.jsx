import { Link } from "react-router-dom"

function Dashboard(){
    return(
        <>
        <div className="dashboard">
            <aside>
                    <h2>Informasi Akun</h2>
                   <ul>
                   <li>Nama Pengguna :</li>
                        <li>Alamat Email</li>
                        <li>NISN</li>
                        <li>Kata sandi</li>
                        <li>Kelas</li>
                   </ul>
                   <h2>Terakhir Di perbarui 30 April 2024</h2>
                </aside>
            <div>
                <header>
                    <ul>
                        <li>Home</li>
                        <Link to={"/editprofile"} className="btn_editprofile">Edit Profile</Link>
                    </ul>
                </header>
                <main>
                    <div className="daftar_menu">
                        <select>
                            <option>Daftar Menu</option>
                        </select>
                        <ol>
                            <li>Nasi Ayam Tepung</li>
                            <li>Nasi Ayam Telur</li>
                            <li>Gado-Gado</li>
                        </ol>
                    </div>
                    <div className="stok">
                            <select>
                                <option>Stok</option>
                            </select>
                        </div>
                </main>
            </div>
        </div>
        </>
    )
}

export default Dashboard