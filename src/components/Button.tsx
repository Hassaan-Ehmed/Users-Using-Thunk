import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { getUsers } from '../redux/slices/users';
import { useAppDispatch } from '../redux/hooks';

export default function Buttonn({text}:any) {

    const dispatch = useAppDispatch();
  return (
      <Button variant="contained" color="success" sx={{marginTop:"20px"}} onClick={e => dispatch(getUsers())} >
        {text}
      </Button>
    );
}