import ImgPerfil from '../../assets/perfil.jpg'
import styles from './Perfil.module.scss'

function Perfil(){
  return(
    <section className={styles.containerTelaPerfil} >
      <article>
        <img src={ImgPerfil} alt="Foto de perfil de Alyne Passos" />

        <div className={styles.cardInfo} >
          <h2>Alyne Passos</h2>
          <h3>Voluntária Ativa</h3>

          <p className={styles.paragrafoSobreMim} >
          Apaixonada por fazer a diferença na comunidade. Acredito que pequenas ações podem transformar vidas e estou sempre em busca de novas oportunidades para ajudar. </p>

          <address>
            <p>Rio de Janeiro,RJ</p>
            <p>alyne.netto@gmail.com</p>
            <p>Membro desde Janeiro de 2022</p>
          </address>

          <ul className={styles.listaInteresses} >
          <li>Educação</li>
          <li>Meio Ambiente</li>
          <li>Assistência Social</li>
          <li>Design</li>
          </ul>
          
        </div>
      </article>
    </section>
  )
}

export default Perfil