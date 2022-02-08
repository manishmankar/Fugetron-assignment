import React, { useEffect, useState } from 'react';
import { NavLink,useNavigate ,useLocation} from 'react-router-dom';
import axios from "axios"
import { Button } from 'react-bootstrap';

const Create = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [first_name, setFirst_name]=useState()
    const [last_name, setLast_name]=useState()
    const [email, setEmail]=useState()
    const [states, setStates]=useState()
    const [city, setCity]=useState()
    const [pincode, setPinCode]=useState()
    const [validationError, setValidationError]=useState()

    
  console.log(location);

    const submitValidations = (values) => {
        if (!first_name) {
            setValidationError("First Name Required")
            return false
        }
        if (!last_name) {
            setValidationError("Last Name Required")
            return false
        }
        if (!email) {
            setValidationError("Email Required")
            return false
        }
        if (!city) {
            setValidationError("City Required")
            return false
        }
        if (!states) {
            setValidationError("State Required")
            return false
        }
        if (!pincode) {
            setValidationError("Pincode Required")
            return false
        }
        return true
    }

    const createNote=(e)=>{
        e.preventDefault()
        if (!submitValidations(e)) {
            return
        }
        setValidationError("")
        if(location?.state?.details){
            axios.get(`https://o1wm686yz2.execute-api.us-east-1.amazonaws.com/v1/edit?param1=${email}&param2=${first_name}&param3=${last_name}&param4=${pincode}&param5=${city}&param6=${states}`)
            .then(res=> {
                setCity("")
                setEmail("")
                setFirst_name("")
                setLast_name("")
                setPinCode("")
                setStates("")
                navigate('/')
            })
            .catch(err=>{
                setValidationError(err)
            })

        }else{
            axios.get(`https://c0ri699qs5.execute-api.us-east-1.amazonaws.com/v1/add?param1=${email}&param2=${first_name}&param3=${last_name}&param4=${pincode}&param5=${city}&param6=${states}`)
            .then(res=> {
                setCity("")
                setEmail("")
                setFirst_name("")
                setLast_name("")
                setPinCode("")
                setStates("")
                navigate('/')
            })
            .catch(err=>{
                setValidationError(err)
            })
        }

    }
    useEffect(()=>{
           if(location?.state?.details){
                console.log(location?.state?.details);
            setCity(location?.state?.details?.city)
            setEmail(location?.state?.details?.email)
            setFirst_name(location?.state?.details?.first_name)
            setLast_name(location?.state?.details?.last_name)
            setPinCode(location?.state?.details?.pincode)
            setStates(location?.state?.details?.states)
            }

    },[location?.state?.details])

  return <form className='addContainer' onSubmit={createNote}>  
      <div className='row '>
       <div className='col-2 inputField'>
            <div> <label>First Name</label></div>
            <div> <input value={first_name} onChange={(e)=>setFirst_name(e.target.value)}/> </div>
       </div>
       <div className='col-2 inputField'>
            <div> <label>Last Name</label></div>
            <div> <input value={last_name} onChange={(e)=>setLast_name(e.target.value)}/> </div>
       </div>
       <div className='col-2 inputField'>
            <div> <label>Email</label></div>
            <div> <input disabled={ location?.state?.details ? true : false} value={email} type="email" onChange={(e)=>setEmail(e.target.value)}/> </div>
       </div>
      </div>
      <div className='row'>
      <div className='col-2 inputField'>
            <div> <label>State</label></div>
            <div> <input value={states} onChange={(e)=>setStates(e.target.value)}/> </div>
       </div>
       <div className='col-2 inputField'>
            <div> <label>City</label></div>
            <div> <input value={city} onChange={(e)=>setCity(e.target.value)}/> </div>
       </div>
       <div className='col-2 inputField'>
            <div> <label>Pincode</label></div>
            <div> <input value={pincode} type="number" onChange={(e)=>setPinCode(e.target.value)}/> </div>
       </div>
      </div>
      {validationError ? <div className='text-danger'>{validationError}</div>:""}
      <div className='updateBtn'>
          {location?.state?.details ?
          <Button size='sm' style={{padding:"2px 18px", borderRadius:"20px"}} variant="primary" type='submit'>Update</Button>
          :
          <Button size='sm' style={{padding:"2px 18px", borderRadius:"20px"}}  variant="primary" type='submit'>Add</Button> }
          <NavLink to="/">  <Button size='sm' style={{padding:"2px 18px", borderRadius:"20px"}} variant="secondary">Cancel</Button> </NavLink>
         
  
      </div>
      
  </form>;
};

export default Create;
