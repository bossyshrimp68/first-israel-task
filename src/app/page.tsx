'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { InputField, MissionTypes } from '@/components/InputField';
import { Mission } from '@/components/Mission';
import { Checkbox, RadioGroup, TextField, Typography } from '@mui/material';

{
  /*TODO: make pretty*/
}
export default function form() {
  const [finalScore, setFinalScore] = useState(0);

  return (
    <>
      <center>
        <form>
          <Mission>
            <Header num="M00" des="בונוס ביקורת ציוד" />
            <InputField
              type={MissionTypes.CHECKBOX}
              des="אם כל הציוד שלכם נכנס באזור הביקורת הקטן"
              points={10}
            />
          </Mission>

          <RadioGroup />

          <Mission>
            <Header num="M02" des="קיבולת לא מנוצלת" />
            <InputField type={MissionTypes.RADIO} des="אם המכולת עם הצירים סגורה לגמרי" />
            <InputField type={MissionTypes.RADIO} des="מלאה חלקית בתכולה" />
            <InputField type={MissionTypes.RADIO} des="מלאה לגמרי בתכולה" />
          </Mission>

          <Mission>
            <Header num="M04" des="מסע ההובלה" />
            <InputField
              type={MissionTypes.CHECKBOX}
              des="אם המשאית הגיעה ליעדה, לגמרי מעבר לקו הסיום הכחול שלה, ונמצאת על השטיח"
            />
            <InputField
              type={MissionTypes.CHECKBOX}
              des="אם המטוס הגיע ליעדו, לגמרי מעבר לקו הסיום הכחול שלו, ונמצא על השטיח"
            />
            <InputField type={MissionTypes.CHECKBOX} des="בונוס: אם שני התנאים למעלה מתקיימים" />
          </Mission>

          <Mission>
            <Header num="M08" des="הצנחת מטען" />
            <InputField type={MissionTypes.CHECKBOX} des="אם חבילת האוכל הופרדה מהמסוק שלכם" />
            <InputField
              type={MissionTypes.CHECKBOX}
              des="אם חבילת האוכל הופרדה מהמסוק בזירה השניה, והיא לגמרי בתוך העיגול"
            />
            <InputField type={MissionTypes.CHECKBOX} des="אם חבילת האוכל הופרדה מהמסוק שלכם" />
          </Mission>

          <Mission>
            <Header num="M16" des="CARGO CONNECT" />
            <InputField type={MissionTypes.TEXT} des="חלקית, 5 לכל אחת" />
            <InputField type={MissionTypes.CHECKBOX} des="לגמרי בתוך" />
            <InputField
              type={MissionTypes.CHECKBOX}
              des="המכולה הכחולה נמצאת לגמרי בתוך העיגול הכחול"
            />
            <InputField
              type={MissionTypes.CHECKBOX}
              des="המכולה הירוקה נמצאת לגמרי בתוך העיגול הירוק"
            />
            <InputField
              type={MissionTypes.TEXT}
              des="אם יש עיגולים עם מכולה אחת לפחות, לגמרי בתוכם: 10 לכל עיגול"
            />
          </Mission>

          <Mission>
            <Header num="M17" des="אסימוני דיוק, אם מספר אסימוני הדיוק שנשארו על הזירה הוא" />
            <InputField type={MissionTypes.RADIO} des="6" />
            <InputField type={MissionTypes.RADIO} des="5" />
            <InputField type={MissionTypes.RADIO} des="4" />
            <InputField type={MissionTypes.RADIO} des="3" />
            <InputField type={MissionTypes.RADIO} des="2" />
            <InputField type={MissionTypes.RADIO} des="1" />
          </Mission>

          <Link href="/result">submit</Link>
        </form>
      </center>
    </>
  );
}
