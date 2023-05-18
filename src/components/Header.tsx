import { Box, Typography } from '@mui/material';

interface MyComponentProps {
  num: string;
  des: string;
}

export const Header = (props: MyComponentProps) => {
  return (
    <>
      <Typography>{props.num}</Typography>
      <Typography>{props.des}</Typography>
    </>
  );
};
