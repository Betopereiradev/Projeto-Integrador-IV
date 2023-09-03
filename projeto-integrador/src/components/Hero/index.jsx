import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.heroBg}>
        <div className={styles.hero}>
          <div className={styles.heroTexto}>
            <h2>Tendências atuais em designer e desenvolvimento web</h2>
            <p>
              Aqui você encontra os melhores portfólios de Desenvolvimento Web,
              Design Responsivo e Experiência do Usuário.
            </p>
          </div>

          <div className={styles.heroPesquisa}>
            <input type="search" placeholder="Pesquise algo específico" />
            <div>
              <a className={styles.tags} href="#">
                Web Design
              </a>
              <a className={styles.tags} href="#">
                Web Design
              </a>
              <a className={styles.tags} href="#">
                Web Design
              </a>
              <a className={styles.tags} href="#">
                Web Design
              </a>
              <a className={styles.tags} href="#">
                Web Design
              </a>
              
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
