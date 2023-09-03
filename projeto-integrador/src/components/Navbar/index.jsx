import styles from "./navbar.module.css"

export default function Navbar() {

    return (
        <nav className={styles.container}>
            <div>
                <h1>LOGO</h1>
            </div>
            <div>
                <ul>
                    <li><a href="#">Achar talentos</a></li>
                    <li><a href="#">Descobrir</a></li>
                    <li><a href="#">Programadores</a></li>
                    <li><a href="#">Designers</a></li>
                    <li><a href="#">Em alta</a></li>
                </ul>
            </div>
            <div>
                <a href="#">Entrar</a>
                <button>Criar Conta</button>
            </div>
        </nav>
    )

}