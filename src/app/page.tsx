import Image from 'next/image'
import styles from './page.module.css'
"use client";
import React, { useState } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import CssBaseline from '@mui/material/CssBaseline';
import { blue, red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Link from 'next/link';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
});

{/*TODO: make pretty*/ }
export default function form() {
  const [count, setCount] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [checkedState, setCheckedState] = useState(
    new Array(3).fill(false)
  );

  function handleChange() {

  }

  const checkbox = (num: number, index?: number) => {
    if (index) {
      return(
        <input type='checkbox' onClick={() => addCount(num, index)} />
      )
    }
    return (
      <input type='checkbox' onClick={() => addCount(num)} />
    )
  }

  function addCount(num: number, index?: number) {
    let thisIsChecked = isChecked;
    if (index) {
      checkedState[index].setIsChecked(!checkedState[index]);
      thisIsChecked = checkedState[index];
    }
    else{
      setIsChecked(!isChecked);
    }
    //console.log(isChecked);
    if (thisIsChecked) {
      setCount(count - num);
    }
    else {
      setCount(count + num);
    }
  }

  {/*TODO: make the inputs funcions or smth*/ }
  return (
    <div>
      <ThemeProvider theme={theme}>;
        <CssBaseline />
        <center>
          <form>
            <h1>M00</h1>
            <h2>בונוס ביקורת ציוד M00</h2>
            {checkbox(20)} אם כל הציוד שלכם נכנס באזור הביקורת הקטן
            {count}
            {/*<h1>M02</h1>
            <h2>קיבולת לא מנוצלת</h2>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">אם המכולת עם הצירים סגורה לגמרי</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel value="20" onClick={() => addCount(20)} control={<Radio />} label="מלאה חלקית בתכולה" />
                <FormControlLabel value="30" onClick={() => addCount(30)} control={<Radio />} label="מלאה לגמרי בתכולה " />
              </RadioGroup>
            </FormControl>*/}

            <h1>M04</h1>
            <h2>מסע ההובלה</h2>
            {checkbox(10, 0)} אם המשאית הגיעה ליעדה, לגמרי מעבר לקו הסיום הכחול שלה, ונמצאת על השטיח
            {checkbox(10, 1)} אם המטוס הגיע ליעדו, לגמרי מעבר לקו הסיום הכחול שלו, ונמצא על השטיח
            {checkbox(10, 2)} בונוס: אם שני התנאים למעלה מתקיימים
            {/*<h1>M08</h1>
            <h2>הצנחת מטען</h2>
            <input type='checkbox' onClick={() => addCount(20)} onChange={() => toggle(20)} /> אם חבילת האוכל הופרדה מהמסוק שלכם
            <input type='checkbox' onClick={() => addCount(10)} onChange={() => toggle(10)} /> אם חבילת האוכל הופרדה מהמסוק בזירה השניה, והיא לגמרי בתוך העיגול
            <input type='checkbox' onClick={() => addCount(10)} onChange={() => toggle(10)} /> אם חבילת האוכל הופרדה מהמסוק שלכם
            {/*TODO: ask john if its check or radio*/}

            {/*}
            <h1>M16</h1>
            <h2>CARGO CONNECT</h2>
            <p>אם יש מכולות בעיגול כלשהו</p>
            <input type='' onClick={() => addCount(5)} onChange={() => toggle(5)} /> חלקית, 5 לכל אחת
            <input type='checkbox' onClick={() => addCount(10)} onChange={() => toggle(10)} /> לגמרי בתוך
            {/*TODO: make counter, with the last one too*/}
            {/*}
            <input type='checkbox' onClick={() => addCount(20)} onChange={() => toggle(20)} /> אם המכולה הכחולה נמצאת לגמרי בתוך העיגול הכחול
            <input type='checkbox' onClick={() => addCount(20)} onChange={() => toggle(20)} /> אם המכולה הירוקה נמצאת לגמרי בתוך העיגול הירוק
            <input type='checkbox' onClick={() => addCount(10)} onChange={() => toggle(10)} /> אם יש עיגולים עם מכולה אחת לפחות לגמרי בתוכם

            <h1>M17</h1>
            <h2>אסימוני דיוק</h2>
            <p>אם מספר אסימוני הדיוק שנשארו על הזירה הוא</p>
            <button onClick={() => addCount(50)} onChange={() => toggle(50)}>6</button>
            <button onClick={() => addCount(50)} onChange={() => toggle(50)}>5</button>
            <button onClick={() => addCount(35)} onChange={() => toggle(35)}>4</button>
            <button onClick={() => addCount(25)} onChange={() => toggle(25)}>3</button>
            <button onClick={() => addCount(15)} onChange={() => toggle(15)}>2</button>
            <button onClick={() => addCount(10)} onChange={() => toggle(10)}>1</button>
            
            <Link href="/result">submit</Link>
            {/*TODO: re-direct to the score page*/}
            {/*TODO: ln where needed*/}
            TODO: maybe add id of the num points to each input and then pass the func it but in num
          </form>
        </center>
      </ThemeProvider>
    </div>
  )
}
