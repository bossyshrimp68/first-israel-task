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
}

export const InputField = (props: MyComponentProps) => {
  const [checked, setIsChecked] = useState(false);

  const handleChange = (event: any) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      {props.type == MissionTypes.CHECKBOX && <Checkbox onChange={handleChange} />}
      {props.type == MissionTypes.RADIO && <RadioGroup />}
      {props.type == MissionTypes.TEXT && <TextField />}
      <Typography>{props.des}</Typography>
    </div>
  );
};
