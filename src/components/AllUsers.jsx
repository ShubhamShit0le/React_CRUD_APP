import {
    Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getUsers,deleteUser} from "../service/api";
import styled from "@emotion/styled";
import DeleteIcon from '@mui/icons-material/Delete';

import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;

`;
const Thead = styled(TableRow)`
    background: #4CAF50;
    & > th{
        color:#fff;
        font-size: 20px;

    }
   
`;

const Trow = styled(TableRow)`
    & > td{
        font-size: 18px;
    }
   

`;

const AllUsers = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    let response = await getUsers();
    console.log(response);
    setUsers(response.data);
  };

  const deleteUserData = async (id)=>{
    await deleteUser(id);
    getUserDetails();
  }

  return (
    <StyledTable>
    <TableHead>
        <Thead>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell></TableCell>
        </Thead>
    </TableHead>
    <TableBody>
        {users.map((user) => (
            <Trow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>
                    <Button color="primary" variant="outlined" style={{marginRight:10}} component = {Link} to = {`/editusers/${user.id}`} >Edit</Button>
                    <Button color="error" variant="outlined"  startIcon={<DeleteIcon />} onClick={()=> deleteUserData(user.id)}>Delete</Button> 
                </TableCell>
            </Trow>
        ))}
    </TableBody>
</StyledTable>
  );
};

export default AllUsers;
