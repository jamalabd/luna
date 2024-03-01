"use client"
import styles from './navLink.module.css'
import Link from 'next/link';
import { usePathname } from 'next/navigation'


const NavLink = ({item}) => {
    const pathName = usePathname();

  return (
    <Link 
    href={item.href}
    className={`${styles.container} 
    ${pathName === item.href && styles.active}`}
    >{item.title}</Link>
  )
}

export default NavLink