import Logo from '../../assets/logo.png'
import Whatsapp from '../../assets/whatsapp.png'
import Instagram from '../../assets/instagram.png'
import Linkedin from '../../assets/linkedin.png'


import styles from './Footer.module.scss'


function Footer() {
  return(
    <footer>
      <div>
      <img src={Logo} alt='logo da footer'/>
      <h2>Connect</h2>
      </div>

      <p>© 2026 Vai na Web & Empower. Todos os direitos reservados. Projeto destinado exclusivamente a fins educativos.</p>

      <nav className={styles.navFooter}>
                <img src={Whatsapp} alt="Logo do Whatsapp" />
                <img src={Instagram} alt="Logo do Instagram" />
                <img src={Linkedin} alt="Logo do Linkedin" />
            </nav>

    </footer>
  )
}

export default Footer