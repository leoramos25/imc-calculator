import { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './assets/powered.png';

export function App() {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);

  function handleCalculateButton() {
    if (heightField && weightField) {

    } else {
      alert('Campos não preenchidos');
    }
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="powered logo" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC</h1>
          <p>
            IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.
          </p>

          <input
            type="number"
            placeholder="Digite a sua altura. Ex: 1.5 (em metros)"
            value={heightField > 0 ? heightField : ''}
            onChange={event => setHeightField(parseFloat(event.target.value))}
          />
          <input
            type="number"
            placeholder="Digite a seu peso. Ex: 71.5 (em kg)"
            value={weightField > 0 ? weightField : ''}
            onChange={event => setWeightField(parseFloat(event.target.value))}
          />

          <button onClick={handleCalculateButton}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          Lado Direito
        </div>
      </div>
    </div>
  )
}

