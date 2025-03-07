import React from 'react'

export default function Header() {
  return (
    <div>
      <header>
        <p className="main__font"><b>Child's</b></p>
        <ul>
          <li className="main__font"><b><a href="#home">Home</a></b></li>
          <li className="main__font"><b><a href="#about">About</a></b></li>
          <li className="main__font"><b><a href="#menber">Member</a></b></li>
          <li className="main__font"><b><a href="#activity">Activity</a></b></li>
          <li className="main__font"><b><a href="#contact">Contact</a></b></li>
        </ul>
      </header>
    </div>
  )
}
