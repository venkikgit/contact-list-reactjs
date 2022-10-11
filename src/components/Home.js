import { Link } from 'react-router-dom'
import styles from '../styles/Home.module.css';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

// Home comonent to display the contacts
const Home = () => {
  const dispatch = useDispatch();
  // Getting contacts from redux state
  const contacts= useSelector((state)=>state)

  // Function to delete contacts
  const HandleDelete = (itemId,e) => {
    e.preventDefault();
    dispatch({type:'DELETECONTACTS',payload:itemId});
    toast.success("Item deleted successfully");
  }
  
  return ( 
    <div className={styles.HomeContainer}>
        {/* <div className={styles.SearchBar}>
            <input type="search" placeholder='Type here to search ...' />
        </div> */}
        <div className={styles.addBtnDiv}>
        <Link to='/addContact' className='btn btn-outline-success'>Add Contact</Link>
        </div>
        <div style={{marginTop:'3%',width:'90vw',marginBottom:'5%'}}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th style={{textAlign:'center'}}>S.No</th>
                <th style={{textAlign:'center'}}>Name</th>
                <th style={{textAlign:'center'}}>Email</th>
                <th style={{textAlign:'center'}}>Phone No</th>
                <th style={{textAlign:'center'}}>Edit / Delete</th>
              </tr>
              </thead>
              <tbody>
            { contacts.map((item,id)=>( <tr key={id}>
                <td style={{textAlign:'center'}} >{id+1}</td>
                <td style={{textAlign:'center'}}>{item.name}</td>
                <td style={{textAlign:'center'}}>{item.email}</td>
                <td style={{textAlign:'center'}}>{item.phone}</td>
                <td style={{textAlign:'center'}}>
                  <Link to={`/edit/${item.id}`} className='btn btn-secondary'>Edit</Link>&nbsp;&nbsp;
                  <button className='btn btn-danger' onClick={(e)=>HandleDelete(item.id,e)}>Delete</button>
                </td>
              </tr>))
              }
             </tbody>
          </table>
        </div>
    </div>
  )
}

export default Home