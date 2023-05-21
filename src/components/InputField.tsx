'use-client';
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
  return (
    <div>
      {props.type == MissionTypes.CHECKBOX && <Checkbox />}
      {props.type == MissionTypes.RADIO && <RadioGroup />}
      {props.type == MissionTypes.TEXT && <TextField />}
      <Typography>{props.des}</Typography>
    </div>
  );
};
