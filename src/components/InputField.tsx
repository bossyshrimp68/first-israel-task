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
    <div className="d-flex">
      {props.type == MissionTypes.CHECKBOX && <Checkbox className="p-2 flex-fill" />}
      {props.type == MissionTypes.RADIO && <RadioGroup className="p-2 flex-fill" />}
      {props.type == MissionTypes.TEXT && <TextField className="p-2 flex-fill" />}
      <div className="p-2 flex-fill">
        <Typography>{props.des}</Typography>
      </div>
    </div>
  );
};
