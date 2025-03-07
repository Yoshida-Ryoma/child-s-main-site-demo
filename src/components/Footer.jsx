import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="block container">
          <ul className='ul__1'>
            <li className="sub__title"><b>Childs</b></li>
            <li className="main__font"><b>A world where children<br />take the initiative</b></li>
          </ul>
          <ul className='ul__2'>
            <li className="main__font"><b><a href="#home">Home</a></b></li>
            <li className="main__font"><b><a href="#menber">Member</a></b></li>
            <li className="main__font"><b><a href="#activity">Activity</a></b></li>
            <li className="main__font"><b><a href="#contact">Contact</a></b></li>
          </ul>
          <ul className='ul__3'>
            <li className="main__font"><b>X</b></li>
            <li className="main__font"><b>Instagram</b></li>
            <li className="main__font"><b>YouTube</b></li>
            <li className="main__font"><b>TikTok</b></li>
          </ul>
        </div>
      </footer>
    </div>
  )
}
