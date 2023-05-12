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

export const InputFeild = (props: MyComponentProps) => {
  return (
    <>
      {props.type == MissionTypes.CHECKBOX && <Checkbox></Checkbox>}
      {props.type == MissionTypes.RADIO && <RadioGroup></RadioGroup>}
      {props.type == MissionTypes.TEXT && <TextField></TextField>}
      <Typography>{props.des}</Typography>
    </>
  );
};
