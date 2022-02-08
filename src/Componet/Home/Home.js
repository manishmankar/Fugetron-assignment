import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from "axios"
import DetailsRow from '../DetailsRow';
import { Form } from 'react-bootstrap';

const Home = () => {

const [data, setData]=useState([])
const [sdata, setSData]=useState([])
const [serach, setSerach]=useState("")
const [loading, setLoading]=useState(false)



const fetchData=()=>{
    setLoading(true)
    axios.get("https://j5ej5u32gg.execute-api.us-east-1.amazonaws.com/v1/fetch").then(res=>{
        console.log(res);
        setData(res.data.data)
        setSData(res.data.data)
        setLoading(false)
    }).catch(err=>{
        console.log(err);
    })
}

useEffect(()=>{
    fetchData()
},[])
const deleteHandler=(e)=>{
    console.log(e);
    axios.get(`https://k6j938wg66.execute-api.us-east-1.amazonaws.com/v1/delete?param1=${e.email}`)
    .then(res=> fetchData())
    .catch(err=>console.log(err))
}
const handleSearchChange = (e) => {
    setSerach(e.target.value);
}
const handleKeyDown = (e) => {
        handleSearch();
}

const handleSearch = (e) => {
    const updatedData = sdata.filter(function (el) {
        let i;
        if (el.first_name.toString().toLowerCase().includes(serach.toString().toLowerCase()) === true) {
            i = data.indexOf(el.id);
        }
        return i
    });
    setData(updatedData);
}

  return <>
      <div className='homeBar'>
          <div className='addRecode'> <NavLink to="/create"> + Add recode </NavLink></div>
          <div> <Form.Control type="text" placeholder="Search" onChange={handleSearchChange} onKeyDown={handleKeyDown}/></div>
      </div>
      
      <div className='row homeContainer text-center'>
          <div className='col-1'>#</div>
          <div className='col-1'>First Name</div>
          <div className='col-1'>Last Name</div>
          <div className='col-2'>Email</div>
          <div className='col-2'>State</div>
          <div className='col-2'>City</div>
          <div className='col-1'>Pincode</div>
          <div className='col-2'>Action</div>
      </div>
      { data ?
          data.map((dl,i)=>{
              console.log(i);
              return  <DetailsRow data={dl} key={i} index={i+1}  deleteHandler={deleteHandler} />
          })
          : 
          ""
      }
      "{
          loading ?
          <div className='text-center'>Loading...</div>:""
      }
       
      <div>
       
      </div>
  </>;
};

export default Home;
