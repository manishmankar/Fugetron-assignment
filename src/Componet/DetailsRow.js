import React, { useEffect, useState } from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
const DetailsRow = (data) => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
    
  return <div>
       <div key={data.data?.pincode} className='row detailContainer'>
          <div className='col-1'>{data.index}</div>
          <div className='col-1'>{data.data?.first_name}</div>
          <div className='col-1'>{data.data?.last_name}</div>
          <div className='col-2'>{data.data?.email}</div>
          <div className='col-2'>{data.data?.states}</div>
          <div className='col-2'>{data.data?.states}</div>
          <div className='col-1'>{data.data?.pincode}</div>
          <div className='col-2'>
              <Button size="sm" style={{padding:"2px 18px", borderRadius:"20px",marginRight:"5px"}} variant="primary" onClick={()=>{navigate('/create', {state:{details:data.data}})}}>Edit</Button>
              <Button size="sm" style={{padding:"2px 18px", borderRadius:"20px"}} variant="danger" onClick={handleShow} >Delete</Button>
          </div>
      </div>
      <Modal style={{textAlign:"center",color:'blue',textTransform:'capitalize',fontWeight:"600"}} show={show} onHide={handleClose} animation={false}>
        <Modal.Body style={{padding:"30px 0px"}}>Are You Sure to Delete {data.data?.first_name} {""}{data.data?.last_name}</Modal.Body>
        <Modal.Footer style={{margin:'auto',padding:"30px 0px"}} >
        <Button size="sm" style={{padding:"2px 18px", borderRadius:"20px"}} variant="danger" onClick={()=>data.deleteHandler(data.data)}>
            Delete
          </Button>
          <Button size="sm" style={{padding:"2px 18px", borderRadius:"20px"}} variant="secondary" onClick={handleClose}>
            Chancel
          </Button>
          
        </Modal.Footer>
      </Modal>
  </div>;
};

export default DetailsRow;
