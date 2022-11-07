import React,{useState} from 'react';
import {Container, Row, Col, Button, Table, Form }  from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import './style.css';

let studentDetails = {
  name:'',
  age:'',
  course:'',
  batch:''
}

const Student = () => {

  const [store, setStore] = useState(studentDetails);
  const [dataList, setDataList] = useState([]);
  const [edit, setEdit] = useState(false);
  const [hide, setHide] = useState(false);
  const changeHandler = (e) => {
    const value = e.target.value
    setStore(store =>({...store,[e.target.name] : value}))    
    }   
const addData = () =>{
  if(edit){
    const updatedDataList = dataList.map((row)=>row.id === store.id ? store : row );
    setDataList(updatedDataList);
    setEdit(false);
    setStore(studentDetails);
    setHide(!hide);
  }
  else{
  let listItems = dataList;
  const item = {
    id:dataList.length,
    ...store
  }
  listItems = [...dataList,item];  
  setDataList(listItems);
  clearData();
  setHide(!hide);
}
}
const clearData = () =>{
  setStore(studentDetails);
}
const deleteRow = (id) =>{
const filtered = dataList.filter(item=>item.id !== id);
console.log(filtered);
setDataList(filtered);
}
const editRow = (row) =>{
  setStore(row);
  setEdit(true);
  setHide(!hide);
}

  return (
   <>
  
   <Container>
   {hide ? null :<Row>

    <Row className="justify-content-between text-center">
      <Col><h2>Student Details</h2></Col>
      <Col><Button className='btnadd' onClick={()=>{setHide(!hide)}}><Icon.Plus size={20}  className='me-2 iconplus'/>Add Student</Button></Col>
    </Row>

 <Row>



      <Table striped bordered hover className='table mt-3' responsive="sm" >
      <thead>
        <tr>
     
          <th>NAME</th>
          <th>AGE</th>
          <th>COURSE</th>
          <th>BATCH</th>
          <th>UPDATE</th>
        </tr>
      </thead>
      <tbody>
      {dataList && dataList.map((row,i)=>
          <tr>
          <td>{row.name}</td>
          <td>{row.age}</td>
          <td>{row.course}</td>
          <td>{row.batch}</td>
          <td>
            
          <Icon.PenFill className='me-3' onClick={()=>{editRow(row)}}/>
          <Icon.TrashFill   onClick={()=>{deleteRow(row.id)}}/>

          </td>
        </tr>
        )}
      
      </tbody>
    </Table>
  
    </Row>

    </Row>}
  

<Row className='justify-content-center'>
  <Col xs={10} md={6}>

    {hide ? <Form className="form">
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" name='name' value={store.name} onChange={changeHandler} placeholder="Enter name" />
     </Form.Group>

     <Form.Group className="mb-3" >
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" name='age' value={store.age} onChange={changeHandler} placeholder="Enter name" />
     </Form.Group>
     <Form.Group className="mb-3">
        <Form.Label>Coourse</Form.Label>
        <Form.Control type="text" name='course' value={store.course} onChange={changeHandler} placeholder="Enter name" />
     </Form.Group>
     <Form.Group className="mb-3" >
        <Form.Label>Batch</Form.Label>
        <Form.Control type="text" name='batch' value={store.batch} onChange={changeHandler} placeholder="Enter name" />
     </Form.Group>

     <div className='text-center mt-3'>
      <Button variant="primary" onClick={addData} className='me-2 btnsubmit'>{edit ? 'Update' : 'submit'}</Button>
      <Button variant="primary" onClick={()=>{setHide(!hide)}} className='btncancel'>Cancel </Button>
    </div>
    
    
    </Form>
  : null}
   </Col>
</Row>
   </Container>


   </>
  )
}

export default Student;