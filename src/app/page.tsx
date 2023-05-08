import Image from 'next/image'
import styles from './page.module.css'
"use client"; 
import React, { useState } from "react";




export default function form() {
  const [state, setState] = useState({
    counter: 0
  });

  function onSub(){
    console.log(state.counter)
  }

  return (
    <div>
      <form onSubmit={onSub}>
        <p>בדיקת ציוד</p>
        <input type='checkbox' value={state.counter+20}></input>

        <button type="submit">submit</button>
      </form>
    </div>
  )
}
