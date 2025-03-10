import React from 'react'
import './Menber.css'

export default function Menber() {
  return (
    <div>
      <div className="menber block" id='menber'>
        <p className="main__font"><b>Menber</b></p>
        <div>
          <div className='item'>
            <button className='main__font'>
              <p><b>吉田陵真</b></p>
              <ul>
                <li className="sub__font"><b>name:</b></li>
                <li className="sub__font"><b>post:</b></li>
                <li className="sub__font"><b>skill:</b></li>
                <li className="sub__font"><b>activity:</b></li>
              </ul>
            </button>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}
