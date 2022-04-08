import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header>
      <div>
        <Link href="/">
          <img className="w-44 object-contain cursor-pointer" src="https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png" alt="" />
        </Link>
        <div>
          <h3>About</h3>
          <h3>Contact</h3>
          <h3>Follow</h3>
        </div>
      </div>
      <div></div>
    </header>
  )
}

export default Header