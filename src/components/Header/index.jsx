import Link from 'next/link'
import React from 'react'

const Header = () => {

  const categories = [
    {
        label:'Home',
        link:'/',
     },
     {
        label:'About',
        link: '/about',
     },
     {
        label:'Contato',
        link:'/contato',
     },
    ]
  
  const layoutMenu = {
    display: 'inline-block',
    minWidth: '150px',
    fontFamily: 'calibri',
    color: 'white'
  }

  const layoutLink = {
    color: 'black',
    textDecoration: 'none'
  }

  return (
    <nav>
      <ul>
        { categories?.map((categ, index) => 
          <li key={ index } style={ layoutMenu }>
            <Link style={ layoutLink } href={categ.link}>{categ.label}</Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Header;