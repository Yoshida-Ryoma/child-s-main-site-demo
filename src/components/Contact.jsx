import React from 'react'

export default function Contact() {
  return (
    <div>
      <div className="contact block" id='contact'>
        <p className="main__font"><b>Contact</b></p>
        <form action="">
          <label htmlFor="" sub__font><b>メールアドレス</b></label><br />
          <input type="email" /><br />
          <label htmlFor="" sub__font><b>名前</b></label><br />
          <input type="text" /><br />
          <label htmlFor="" sub__font><b>件名</b></label><br />
          <input type="text" /><br />
          <label htmlFor="" sub__font><b>お問い合わせ内容</b></label><br />
          <textarea name="" id=""></textarea>
        </form>
      </div>
    </div>
  )
}
