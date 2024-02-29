import React from 'react'
import Link from 'next/link';

const links = [
    {title: 'Home', href: '/'},{title: 'About', href: '/about'},{title: 'Contact', href: '/contact'}, { title: 'Blog', href: '/blog'}, { title: 'Login', href: '/login'},
];

const Links = () => {
  return (
    <div>
        {links.map(link => ( <Link key={link.title} href={link.href}>{link.title}</Link> ))}
    </div>
  )
}

export default Links