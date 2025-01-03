import styles from "./Banner.module.css";
import player from "/public/img/player.png";
export const Banner = ({ img, color }) => {
  return (
    <div className={styles.gradient} style={{ background: `${color})`}}
    >
      <div
        className={styles.capa}
        
      >
        <div className={styles.colIzq}>
          <button className={styles.boton}>Ver Favoritos</button>
          <h3>Challenge React</h3>
          <p>
            Este challenge es una forma de aprendizaje. Es un mecanismo donde
            podrás comprometerte en la resolución de un problema para poder
            aplicar todos los conocimientos adquiridos en la formación React.
          </p>
        </div>
        <div className={styles.carDer}>
            <img src={player} alt="logo" />
        </div>
      </div>
    </div>
  );
};
