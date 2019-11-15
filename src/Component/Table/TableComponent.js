import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import {StyledTableCell,useStyles,StyledTableRow} from './Style'


function CustomizedTables() {
  const classes = useStyles();
  const pagenum = 1
  const [page ,setPage] = useState(1)
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    const response = await fetch("https://reqres.in/api/users?page="+page);
    const data = await response.json();
    debugger
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    fetchUser();
  }, [page]);
  

  return (loading ? <CircularProgress disableShrink /> :

    (<Paper className={classes.root}>
      <FormControl x className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Page</InputLabel>
        <Select
        style={{width:"100px"}}
          labelId="Page Number"
          id="demo-simple-select"
          value={page}
          onChange={e => { setPage(e.target.value)}}
        >
          {[1,2].map((e,i)=><MenuItem value={i+1}>{i+1}</MenuItem>)}
          {/* <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="center">FIRST NAME</StyledTableCell>
            <StyledTableCell align="center">LAST NAME</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">avatar</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(data.data || []).map(row => (
            <StyledTableRow key={row.name}>              
              <StyledTableCell align="center">{row.id}</StyledTableCell>
              <StyledTableCell align="center">{row.first_name}</StyledTableCell>
              <StyledTableCell align="center">{row.last_name}</StyledTableCell>
              <StyledTableCell align="center">{row.email}</StyledTableCell>
              <StyledTableCell align="center"><img src={row.avatar}></img></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>))

    ;
}
export default CustomizedTables
