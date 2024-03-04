"use client"

import {useState} from 'react'
import NavLink from '@/components/navbar/links/navLink/NavLink'
import styles from './links.module.css'

const links = [
    {title: 'Home', href: '/'},{title: 'About', href: '/about'},{title: 'Contact', href: '/contact'}, { title: 'Blog', href: '/blog'},
];

const session = true;
const isAdmin = true;

const Links = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
    <div className={styles.links}>
       {links.map(item => <NavLink item={item} key={item.title}></NavLink>)}{session ? (
        <>
        {isAdmin && <NavLink item={{title: 'Admin', href: '/admin'}}></NavLink>}
        <button className={styles.logout}>Logout</button>
        </>
       ) : ( <NavLink item={{title: 'Login', href: '/login'}}></NavLink>)}
    </div>
  <button className={styles.menuButton} onClick={()=>setOpen((prev)=>!prev)}> Menu </button>
  {open && (<div className={styles.mobileLinks}>
    {links.map(item => <NavLink item={item} key={item.title}></NavLink>)}
  </div>)}
    </div>
  )
}

export default Links