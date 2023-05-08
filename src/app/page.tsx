import Image from 'next/image'
import styles from './page.module.css'
"use client"; 
import React, { useState } from "react";
import { Radio } from '@mui/material';


{/*TODO: make pretty*/}
export default function form() {
  const [count, setCount] = useState(0);
  const [times, setTimes] = useState(1);

  function onSub(){
    console.log(count)
  }

  function addCount (num: number) {
    setCount(count+num);
    setTimes(times+1);
  }

  function toggle(num: number, radio? : boolean){
    if(radio){
      if(times != 1){
        addCount(-num);
        setTimes(1);
      }
    }
    else{
      if(times%2 == 0 && times != 0){
        console.log(times)
        addCount(-num);
      }
    }
    console.log(times)
  }

  {/*TODO: make the inputs funcions or smth*/}
  {/*TODO: change the inputs*/}
  return (
    <div>
      <form onSubmit={onSub}>
        <h1>M00</h1>
          <h2>בונוס ביקורת ציוד M00</h2>
            <input type='checkbox' onClick={() => addCount(20)} onChange={() => toggle(20)} /> אם כל הציוד שלכם נכנס באזור הביקורת הקטן
        {/*TODO: reset times to 0 after every q*/}

        <h1>M02</h1>
          <h2>קיבולת לא מנוצלת</h2>
            <p>אם המכולת עם הצירים סגורה לגמרי</p>
              <input type='radio' onClick={() => addCount(20)} onChange={() => toggle(30, true)} /> מלאה חלקית בתכולה
              <input type='radio' onClick={() => addCount(30)} onChange={() => toggle(20, true)} /> מלאה לגמרי בתכולה 
        {/*TODO: make radio buttons, check toggle*/}

        <h1>M04</h1>
          <h2>מסע ההובלה</h2>
              <input type='checkbox' onClick={() => addCount(10)} onChange={() => toggle(10)} /> אם המשאית הגיעה ליעדה, לגמרי מעבר לקו הסיום הכחול שלה, ונמצאת על השטיח
            <p>אם המטוס הגיע ליעדו, לגמרי מעבר לקו הסיום הכחול שלו, ונמצא על השטיח</p>
              <input type='checkbox' onClick={() => addCount(10)} onChange={() => toggle(10)}></input> 
            <p>בונוס: אם שני התנאים למעלה מתקיימים</p>
              <input type='checkbox' onClick={() => addCount(10)} onChange={() => toggle(10)}></input>

        <h1>M08</h1>
          <h2>הצנחת מטען</h2>
            <p>אם חבילת האוכל הופרדה מהמסוק שלכם</p>
              <input type='checkbox' onClick={() => addCount(20)} onChange={() => toggle(20)}></input>
            <p>אם חבילת האוכל הופרדה מהמסוק בזירה השניה, והיא לגמרי בתוך העיגול</p>
              <input type='checkbox' onClick={() => addCount(10)} onChange={() => toggle(10)}></input>
            <p>אם שתי הקבוצות הפרידו את חבילת האוכל מהמסוק בזירה שלהן</p>
              <input type='checkbox' onClick={() => addCount(10)} onChange={() => toggle(10)}></input>
            {/*TODO: ask john if its check or radio*/}

        <h1>M16</h1>
          <h2>CARGO CONNECT</h2>
            <p>אם יש מכולות בעיגול כלשהו</p>
              <p>חלקית, 5 לכל אחת</p>
                <input type='checkbox' onClick={() => addCount(5)} onChange={() => toggle(5)}></input>
              <p>לגמרי בתוך</p>
                <input type='checkbox' onClick={() => addCount(10)} onChange={() => toggle(10)}></input>
              {/*TODO: make counter, with the last one too*/}
              <p>אם המכולה הכחולה נמצאת לגמרי בתוך העיגול הכחול</p>
                <input type='checkbox' onClick={() => addCount(20)} onChange={() => toggle(20)}></input>
              <p>אם המכולה הירוקה נמצאת לגמרי בתוך העיגול הירוק</p>
                <input type='checkbox' onClick={() => addCount(20)} onChange={() => toggle(20)}></input>
              <p>אם יש עיגולים עם מכולה אחת לפחות לגמרי בתוכם</p>
                <input type='checkbox' onClick={() => addCount(10)} onChange={() => toggle(10)}></input>

        <h1>M17</h1>
          <h2>אסימוני דיוק</h2>
            <p>אם מספר אסימוני הדיוק שנשארו על הזירה הוא</p>
              <button onClick={() => addCount(50)} onChange={() => toggle(50)}>6</button>
              <button onClick={() => addCount(50)} onChange={() => toggle(50)}>5</button>
              <button onClick={() => addCount(35)} onChange={() => toggle(35)}>4</button>
              <button onClick={() => addCount(25)} onChange={() => toggle(25)}>3</button>
              <button onClick={() => addCount(15)} onChange={() => toggle(15)}>2</button>
              <button onClick={() => addCount(10)} onChange={() => toggle(10)}>1</button>
        {count}
        <button type="submit">submit</button>
        {/*TODO: re-direct to the score page*/}
        {/*TODO: ln where needed*/}
        {/*TODO: maybe add id of the num points to each input and then pass the func it but in num*/}
      </form>
    </div>
  )
}
