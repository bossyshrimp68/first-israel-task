import { Checkbox, RadioGroup, TextField, Typography } from '@mui/material'
import React from 'react'

export enum MissionTypes{
    CHECKBOX, 
    RADIO, 
    TEXT,
}

export const mission = (num: string, des: string) => {
  return (
    <>
        <Typography>{num}</Typography>
        <Typography>{des}</Typography>
    </>
  )
}

export const more = (mType: MissionTypes, des: string) => {
    <>
        if(mType == MissionTypes.CHECKBOX && <Checkbox></Checkbox>)
        if(mType == MissionTypes.RADIO && <RadioGroup></RadioGroup>)
        if(mType == MissionTypes.TEXT && <TextField></TextField>)
        {des}
    </>
}
