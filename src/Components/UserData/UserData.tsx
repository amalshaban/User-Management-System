import { useForm } from "react-hook-form"
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {useState, useEffect} from 'react'





export default function UserData() {
  let{ isEdit }= useParams();
  console.log(isEdit);
  
  let location = useLocation();
let userToUpdate = location?.state?.user;


console.log(userToUpdate.id);


  
  const [formData, setFormData] = useState({
    fn: '',
    ln: '',
    ei: '',
    a: '',
    ph: '',
    bd: '',
  });
  let [title, setTitle] = useState('Add User');
  let responseUpdate= `await axios.put("https://dummyjson.com/users/${userToUpdate.id}", data)`;
  let responseAdd = `await axios.post("https://dummyjson.com/users/add", data)`;
  let apiResponse="";
  let updateMessage = "User updated Successfuly !";
  let addMessage = "User Added Successfuly !";
  let updateErrorMessage = "Sorry,  User was not updated !"
  let addErrorMessage = "Sorry,  User was not Added !"

  let seccessMessage = '';
  let failurMessage = '';
   function handleUser  ({ isEdit, userToUpdate  }) {

    useEffect(() => {
      if (isEdit === 'true' && userToUpdate) { 
        apiResponse = responseUpdate;
        setTitle('Update User'), 
         seccessMessage = updateMessage,
         failurMessage = updateErrorMessage,
        setFormData({
          ...formData,
          fn: userToUpdate.firstName,
          ln: userToUpdate.lastName,
          ei: userToUpdate.email,
          a: userToUpdate.age,
          ph: userToUpdate.phone,
          bd: userToUpdate.birthDate,
        });
      }
      else if(isEdit === 'false' && userToUpdate===null) {
      apiResponse = responseAdd;
        setTitle('Add User');
        seccessMessage = addMessage,
        failurMessage = addErrorMessage,
       setFormData({
        ...formData,

          fn: '',
          ln: '',
          ei: '',
          a: '',
          ph: '',
          bd: '',
        });
    }}, [ formData]);
    
    
  };
 
 handleUser({isEdit, userToUpdate});
  let navigate = useNavigate();
  let {
    register,
    handleSubmit,
    formState:{errors},
  } =useForm();

 let onSubmit =async(data)=>{
try {
  let response = apiResponse;
  console.log(response);
  toast.success(seccessMessage), {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",


  };
  
  navigate('/home/UsersList');
} catch (error) {
  console.log(error);
  toast.error(failurMessage);
}
 }
 
  return (
    <div className='userContainer'>
      <div className='title p-3 shadow'>
          <h3>{title}</h3>  
      </div>  
      <div className='formContainer'>
        <form onSubmit={handleSubmit(onSubmit)} className='p-5'>
          <div className='row'>
            <div className='col-md-6'>
            <div className="mb-3">
                <label className='mb-2'>First Name</label>
                <input
                type="text" className="form-control" placeholder="Enter your First Name" 
                aria-label="firstname" aria-describedby="addon-wrapping" defaultValue ={formData?.fn}
                {...register('firstName',{required:'First Name Is Required !'})}
                />
              </div>
              {errors.firstName &&
              <p className="alert alert-danger">
                {errors?.firstName?.message}
              </p>
              }
            </div>
            <div className='col-md-6'>
            <div className="mb-3">
                <label className='mb-2'>Last Name</label>
                <input
                type="text" className="form-control" placeholder="Enter your Last Name" 
                aria-label="lastname" aria-describedby="addon-wrapping" defaultValue={formData?.ln}
                {...register('lastName',{required:'Last Name Is Required !'})}
                />
              </div>
              {errors.lastName &&
              <p className="alert alert-danger">
                {errors?.lastName?.message}
              </p>
              }
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
            <div className="mb-3">
                <label className='mb-2'>Email</label>
                <input
                type="email" className="form-control" placeholder="Enter your Email" 
                aria-label="email" aria-describedby="addon-wrapping" defaultValue={formData?.ei}
                {...register('email',{required:'Email Is Required !'})}
                />
              </div>
              {errors.email &&
              <p className="alert alert-danger">
                {errors?.email?.message}
              </p>
              }
            </div>
            <div className='col-md-6'>
            <div className="mb-3">
                <label className='mb-2'>Age</label>
                <input
                type="number" className="form-control" placeholder="Enter your Age" 
                aria-label="age" aria-describedby="addon-wrapping" defaultValue={formData?.a}
                {...register('age',{required:'Age Is Required !'})}
                />
              </div>
              {errors.age &&
              <p className="alert alert-danger">
                {errors?.age?.message}
              </p>
              }
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
            <div className="mb-3">
                <label className='mb-2'>Phone Number</label>
                <input
                type="number" className="form-control" placeholder="Enter your Phone Number" 
                aria-label="phonenumber" aria-describedby="addon-wrapping" defaultValue={formData?.ph}
                {...register('phoneNumber',{required:'Phone Number Is Required !'})}
                />
              </div>
              {errors.phoneNumber &&
              <p className="alert alert-danger">
                {errors?.phoneNumber?.message}
              </p>
              }
            </div>
            <div className='col-md-6'>
            <div className="mb-3">
                <label className='mb-2'>Birth Date</label>
                <input
                type="date" className="form-control" placeholder="Enter your Birth Date" 
                aria-label="birthdate" aria-describedby="addon-wrapping" defaultValue={formData?.bd}
                {...register('birthDate',{required:'Birth Date Is Required !'})}
                />
              </div>
              {errors.birthDate &&
              <p className="alert alert-danger">
                {errors?.birthDate?.message}
              </p>
              }
            </div>
          </div>
          <div className="text-center my-5">
          <button className="w-50 btn btn-warning">Save</button>
          </div>
        </form>
      </div>  
    </div>
  )
}
