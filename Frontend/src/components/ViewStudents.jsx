import { TableCell,Paper, Table,TableContainer, TableHead, TableRow, Typography, TableBody, Button } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AddStudents from './AddStudents'
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
const ViewStudents = () => {
    const styles = {
        table: {
        //   minWidth: 650,
          backgroundColor: '#fff',
        },
        tableHeaderCell: {
          fontWeight: 'bold',
          fontSize:'20px',
          backgroundColor: '#ccc',
        },
        tableBodyRow: {
          '&:nth-of-type(even)': {
            backgroundColor: '#f2f2f2',
          },
        },
      };
    var [update,setUpdate]=useState(false)   
    var [singleValue,setSingleValue]=useState([]) 
    var [students,setStudents] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3005/view")
        .then(response=>{
            setStudents(response.data)
            console.log(students)
        })
        .catch(err=>console.log(err))
    },[])

    const updateValue = (value)=>{
        setSingleValue(value);  
        setUpdate(true);
       }
       const deleteValues = (id)=>{
        console.log("delete clicked :"+ id)
       
        axios.delete("http://localhost:3005/delete/"+id)
        .then((response)=>{
            console.log(response.idvalue);
            alert("sucessfully deleted");
            window.location.reload(false);
        })
       }   
    var  finalJSX =   <TableContainer component={Paper}>
    <Table style={styles.table}>
        <TableHead>
            <TableRow>

                {/* <TableCell style={styles.tableHeaderCell}>ID</TableCell> */}
                <TableCell style={styles.tableHeaderCell}>NAME</TableCell>
                <TableCell style={styles.tableHeaderCell}>Age</TableCell>
                <TableCell style={styles.tableHeaderCell}>Positon</TableCell>
                <TableCell style={styles.tableHeaderCell}>Salary</TableCell>
                <TableCell style={styles.tableHeaderCell}></TableCell>
                <TableCell style={styles.tableHeaderCell}></TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                {students.map((value,index)=>{
                    return <TableRow key={index}>
                    {/* <TableCell>{value._id}</TableCell> */}
                    <TableCell>{value.sname}</TableCell>
                    <TableCell>{value.age}</TableCell>
                    <TableCell>{value.position}</TableCell>

                    <TableCell>{value.salary}</TableCell>

                    <TableCell>
                        <EditRoundedIcon variant='outlined'
                        color='success'
                            onClick={()=>updateValue(value)}>
                            Update
                            </EditRoundedIcon>
                    </TableCell>
                   <TableCell>
                        <DeleteForeverRoundedIcon
                            variant='outlined' 
                            color ='error' 
                            onClick={()=>deleteValues(value._id)}>
                        Delete</DeleteForeverRoundedIcon>
                    </TableCell>
                    
                </TableRow>
                })}
               
            </TableBody>
     
    </Table>
</TableContainer>

   if (update)
   finalJSX = <AddStudents data={singleValue} method="put"/>
return (
 
 finalJSX
  )
}

export default ViewStudents
// axios.get("").then((response)=>{}).catch((err)=>console.log(err))