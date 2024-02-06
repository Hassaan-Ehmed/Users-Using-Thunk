import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useAppSelector } from '../redux/hooks';
import { RttRounded } from '@mui/icons-material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function Card() {
  
  const storeState = useAppSelector( state => state.users );
  const data = storeState?.data;


  const handleData = (data:any)=>{

    if(data) {
        return data
    }else{
        return [1,2,3,4,5,6,7,8,9,10]
    }


  };

const users =  handleData(data);

    return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Username</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Zip code</StyledTableCell>
            <StyledTableCell align="right">User ID</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { users.map((user:any) => (
            <StyledTableRow key={user.id}>
              <StyledTableCell component="th" scope="row">
                {user.name ?? "--"}
              </StyledTableCell>
              <StyledTableCell align="right">{user.username ?? "--"}</StyledTableCell>
              <StyledTableCell align="right">{user.email ?? "--"}</StyledTableCell>
              <StyledTableCell align="right">{user?.address?.zipcode ?? "--"}</StyledTableCell>
              <StyledTableCell align="right">{user.id ?? "--"}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}