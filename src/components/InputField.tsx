'use-client';
import { useState } from 'react';
import { Checkbox, RadioGroup, TextField, Typography } from '@mui/material';

export enum MissionTypes {
  CHECKBOX,
  RADIO,
  TEXT
}

interface MyComponentProps {
  type: MissionTypes;
  des: string;
  points?: number;
}

export const InputField = (props: MyComponentProps) => {
  const [checked, setIsChecked] = useState(false);
  const [score, setScore] = useState(0);

  const handleChange = () => {
    if (checked && props.points) setScore(score + props.points);
    else setScore(0);
    setIsChecked(!checked);
  };

  const onSub = () => {
    return score;
  };

  return (
    <div>
      {props.type == MissionTypes.CHECKBOX && <Checkbox onChange={handleChange} onSubmit={onSub} />}
      {props.type == MissionTypes.RADIO && <RadioGroup />}
      {props.type == MissionTypes.TEXT && <TextField />}
      <Typography>{props.des}</Typography>
    </div>
  );
};
