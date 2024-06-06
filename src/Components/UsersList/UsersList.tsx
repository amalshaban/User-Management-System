import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function UsersList() {
  let navigate = useNavigate();
  

  let [userId, setUserId ]= useState(0);
  let [userName, setUserName ]= useState("");
  const deleteUser = async()=>{
    try {
      let response= await axios.delete(`https://dummyjson.com/users/${userId}`);
      console.log(response);
      toast.success("User was deleted");
      handleClose();
    } catch (error) {
      console.log(error);
      toast.error("User was not deleted");
    }
  }
  const [usersList, setUsersList] = useState([]);
  const getUsersList = async()=>{
    try {
      let response = await axios.get("https://dummyjson.com/users");
      setUsersList(response.data.users);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getUsersList();
  }, []);


  const navigateAddUserData =()=>{
navigate('/home/UserData/false');
  };
  
  const navigateUpdateUserData =()=>{
    navigate('/home/UserData/true');
      };


      
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (user:any) => {
    setShow(true);
    setUserId(user.id);
    setUserName(user.firstName+ ' '+user.lastName);
  }
  return (
    <>
<Modal show={show} onHide={handleClose}>
       
        <Modal.Body>Are you sure you want to delete {userName} ? </Modal.Body>
        <Modal.Footer>
          <Button className='btn-success' variant="secondary" onClick={deleteUser}>
            Yes
          </Button>
          <Button className='btn-danger' variant="primary" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>


    <div className='title d-flex justify-content-between p-4'>
      <h4>Users List</h4>
      <button onClick={navigateAddUserData} className='btn btn-warning'>Add New User</button>  
    </div>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Age</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
   {
    usersList.map((user: any)=>(
    <tr key={user.id}>
     <th scope="row">{user.id}</th>
     <td>{user.firstName +' '+ user.lastName}</td>
     <td>{user.email}</td>
     <td>{user.phone}</td>
     <td>{user.age}</td>
     <td>
      <i onClick={navigateUpdateUserData} className='fa fa-edit text-warning mx-2' arie-hidden='true'></i>
      <i onClick={()=>handleShow(user)} className='fa fa-trash text-warning mx-2' arie-hidden='true'></i>
     </td>
   </tr>
  ))
}
  </tbody>

</table>
    </>
  )
}
