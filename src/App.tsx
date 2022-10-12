import styles from './App.module.css';
import poweredImage from './assets/powered.png';

export function App() {
  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="powered logo" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          Lado Esquerdo
        </div>
        <div className={styles.rightSide}>
          Lado Direito
        </div>
      </div>
    </div>
  )
}

