import ImgInicial from '../../assets/imagemInicial.png'
import styles from './Inicio.module.scss'

function Inicio(){
  return(
    <section className={styles.containerTelaInicial}>
      <div>
        <h1>Projetos Sociais que transformam</h1>
        <p> Conectamos sua empresa com projetos sociais impactantes. Juntos, criamos mudanças reais na comunidade. </p>
      </div>
      <img src={ImgInicial} alt="Mão simbolizando projetos sociais" />
    </section>
  )
}

export default Inicio