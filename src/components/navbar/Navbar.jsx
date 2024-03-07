import Link from "next/link"
import Links from "@/components/navbar/links/Links"
import styles from './navbar.module.css'

const  Navbar = ()=> {
  return (
    <div className={styles.container}>
      <Link href='/' className={styles.logo}> MyLang </Link>
      <div>
     <Links /> 
          </div>
    </div>


  )
}

export default Navbar