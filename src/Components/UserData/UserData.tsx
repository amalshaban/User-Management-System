import { useForm } from "react-hook-form"
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import {useState, useEffect} from 'react'
export default function UserData() {
  let { userData } = useContext(AuthContext);
  let userState ='';
  let { isEdit } = useParams();
  console.log(isEdit);

  const [formData, setFormData] = useState({
    fn: '',
    ln: '',
    ei: '',
    a: '',
    ph: '',
    bd: '',
  });
   function handleUser  ({ isEdit, userData  }) {
    useEffect(() => {
      if (isEdit === 'false') {
        setFormData({
          ...formData,
          fn: '',
          ln: '',
          ei: '',
          a: '',
          ph: '',
          bd: '',
        });
      } else if (isEdit === 'true' && userData) {
      
        setFormData({
          ...formData,
          fn: userData?.firstName,
          ln: userData?.lastName,
          ei: userData?.email,
          a: userData?.age,
          ph: userData?.phone,
          bd: userData?.birthDate,
        });
      }
    }, [isEdit, userData]);
  };
  
  
 handleUser({isEdit, userData});


  let navigate = useNavigate();
  let {
    register,
    handleSubmit,
    formState:{errors},
  } =useForm();
 let onSubmit =async(data)=>{
try {
  let response = await axios.post("https://dummyjson.com/users/add",data);
  console.log(response);
  toast.success("User Added Successfuly !");
  navigate('/home/UsersList');
} catch (error) {
  console.log(error);
  
  toast.error("User Not Added !");
}
 }
 
  return (
    <div className='userContainer'>
      <div className='title p-3 shadow'>
          <h3>Add User</h3>  
      </div>  
      <div className='formContainer'>
        <form onSubmit={handleSubmit(onSubmit)} className='p-5'>
          <div className='row'>
            <div className='col-md-6'>
            <div className="mb-3">
                <label className='mb-2'>First Name</label>
                <input
                type="text" className="form-control" placeholder="Enter your First Name" 
                aria-label="firstname" aria-describedby="addon-wrapping" value={formData?.fn}
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
                aria-label="lastname" aria-describedby="addon-wrapping" value={formData?.ln}
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
                aria-label="email" aria-describedby="addon-wrapping" value={formData?.ei}
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
                aria-label="age" aria-describedby="addon-wrapping" value={formData?.a}
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
                aria-label="phonenumber" aria-describedby="addon-wrapping" value={formData?.ph}
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
                aria-label="birthdate" aria-describedby="addon-wrapping" value={formData?.bd}
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
