import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import styles from '../styles/EditContact.module.css'
import { useDispatch, useSelector } from 'react-redux';
// Edit Contact component
const EditContact = () => {  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const { id } = useParams();
  const contacts = useSelector(state=>state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(contacts);
  const currentData = contacts.find(item => item.id == id);
useEffect(()=>{
  if(currentData){
    setName(currentData.name);
    setPhone(currentData.phone);
    setEmail(currentData.email);
  }
},[currentData]); 
  const handleSubmit = (e) => { 
    e.preventDefault();
    if(!email || !name || !phone){
      return toast.warning('All fields are required')
    }
    const checkEmail = contacts.find(item => item.id != id && item.email===email);
    const checkNumber = contacts.find(item => item.id != id && item.number===phone);
    if(checkEmail){
      return toast.error('Email already exists');
    }
    if(checkNumber){
      return toast.error('Number already exists');
    }

    const updatedData = {
      id:parseInt(id),
      name,
      email,
      phone,
    }
    console.log(updatedData);
    dispatch({type:'UPDATECONTACTS',payload:updatedData});
    toast.success('Updated successfully');
    navigate('/');
  }
  return (
    <div className={styles.edit}>
      <div className={styles.Container}>
        <div className='title' style={{position:'relative',top:'0',width:'100%',height:'15%',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <h5> Edit Contact</h5>
        </div>
        <div >
        <form action="" onSubmit={handleSubmit} >
          <div style={{position:'relative',margin:'25px 0',top:'15%',width:'100%',height:'15%',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <input style={{width:'70%',borderRadius:'5px',outline:'none'}} type="text" name="name" value={name} id="" onChange={(e)=>setName(e.target.value)} />
          </div>
          <div style={{position:'relative',margin:'25px 0',top:'40%',width:'100%',height:'15%',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <input style={{width:'70%',borderRadius:'5px',outline:'none'}}  type="text" name="email" value={email} id="" onChange={(e)=>setEmail(e.target.value)}  />
          </div>
          <div style={{position:'relative',top:'45%',width:'100%',height:'15%',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <input style={{width:'70%',borderRadius:'5px',outline:'none'}}  type="text" name="phone" value={phone} id="" onChange={(e)=>setPhone(e.target.value)}  />
          </div>
          <div style={{position:'relative',margin:'25px 0',top:'45%',width:'100%',height:'15%',display:'flex',justifyContent:'center',alignItems:'center'}} >
            <button className='btn btn-outline-success' type="submit">Update</button>&emsp;
            <Link to='/' className='btn btn-outline-danger'>Cancel</Link>
          </div>
        </form>
        </div>
      </div>
    </div>
  )
}

export default EditContact