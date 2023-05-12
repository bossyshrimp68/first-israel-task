'use-client';
import Image from 'next/image';
import styles from './page.module.css';
import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import CssBaseline from '@mui/material/CssBaseline';
import { blue, red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { InputFeild, MissionTypes } from '@/components/InputFeild';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500]
    }
  }
});

{
  /*TODO: make pretty*/
}
export default function form() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <center>
          <form>
            <Header num="M00" des="בונוס ביקורת ציוד" />
            <InputFeild
              type={MissionTypes.CHECKBOX}
              des="אם כל הציוד שלכם נכנס באזור הביקורת הקטן"
            />
            <Header num="M02" des="קיבולת לא מנוצלת" />
            <InputFeild type={MissionTypes.RADIO} des="אם המכולת עם הצירים סגורה לגמרי" />
            <InputFeild type={MissionTypes.RADIO} des="מלאה חלקית בתכולה" />
            <InputFeild type={MissionTypes.RADIO} des="מלאה לגמרי בתכולה" />
            <Header num="M04" des="מסע ההובלה" />
            <InputFeild
              type={MissionTypes.CHECKBOX}
              des="אם המשאית הגיעה ליעדה, לגמרי מעבר לקו הסיום הכחול שלה, ונמצאת על השטיח"
            />
            <InputFeild
              type={MissionTypes.CHECKBOX}
              des="אם המטוס הגיע ליעדו, לגמרי מעבר לקו הסיום הכחול שלו, ונמצא על השטיח"
            />
            <InputFeild type={MissionTypes.CHECKBOX} des="בונוס: אם שני התנאים למעלה מתקיימים" />
            <Header num="M08" des="הצנחת מטען" />
            <InputFeild type={MissionTypes.CHECKBOX} des="אם חבילת האוכל הופרדה מהמסוק שלכם" />
            <InputFeild
              type={MissionTypes.CHECKBOX}
              des="אם חבילת האוכל הופרדה מהמסוק בזירה השניה, והיא לגמרי בתוך העיגול"
            />
            <InputFeild type={MissionTypes.CHECKBOX} des="אם חבילת האוכל הופרדה מהמסוק שלכם" />
            <Header num="M16" des="CARGO CONNECT" />
            <InputFeild type={MissionTypes.TEXT} des="חלקית, 5 לכל אחת" />
            <InputFeild type={MissionTypes.CHECKBOX} des="לגמרי בתוך" />
            <InputFeild
              type={MissionTypes.CHECKBOX}
              des="המכולה הכחולה נמצאת לגמרי בתוך העיגול הכחול"
            />
            <InputFeild
              type={MissionTypes.CHECKBOX}
              des="המכולה הירוקה נמצאת לגמרי בתוך העיגול הירוק"
            />
            <InputFeild
              type={MissionTypes.TEXT}
              des="אם יש עיגולים עם מכולה אחת לפחות, לגמרי בתוכם: 10 לכל עיגול"
            />
            <Header num="M17" des="אסימוני דיוק, אם מספר אסימוני הדיוק שנשארו על הזירה הוא" />
            <InputFeild type={MissionTypes.RADIO} des="6" />
            <InputFeild type={MissionTypes.RADIO} des="5" />
            <InputFeild type={MissionTypes.RADIO} des="4" />
            <InputFeild type={MissionTypes.RADIO} des="3" />
            <InputFeild type={MissionTypes.RADIO} des="2" />
            <InputFeild type={MissionTypes.RADIO} des="1" />
            <Link href="/result">submit</Link>
          </form>
        </center>
      </ThemeProvider>
    </>
  );
}
