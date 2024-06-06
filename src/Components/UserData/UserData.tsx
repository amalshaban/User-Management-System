import axios from "axios";
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Import styles first
import { AuthContext } from "../../context/AuthContext";


export default function UserData() {
  // let{ isEdit }= useParams();
  // console.log(isEdit);
  
  
// let location = useLocation();
// let userToUpdate = location?.state?.user;
// console.log(userToUpdate.id);

//   const [formData, setFormData] = useState({
//     fn: '',
//     ln: '',
//     ei: '',
//     a: '',
//     ph: '',
//     bd: '',
//   });



  // let [title, setTitle] = useState('Add User');
let { userData } = useContext(AuthContext);
console.log(userData);

  let navigate = useNavigate();

  let {
    register,
    handleSubmit,
    formState:{errors},
  } =useForm();

  let onSubmit =async(data:any)=>{
    console.log(data);
    try {
          const response = await axios.post('https://dummyjson.com/users/add', data);
          console.log(response);
          toast("Congratulations , User Added Successfully !", {
            type: "success", position: "top-right", autoClose: 2000
          });
      
          }
       
        catch (error) {
          console.log(error);
          toast.error("Sorry, User Not Added !");
        }
  }
  // let onSubmitForAdd =async(data)=>{
  //   try {
  //     const response = await axios.post("https://dummyjson.com/users/add", data);
  //     console.log(response);
  //     toast.success("Congratulations , User Added Successfully !"), {
  //       position: "top-right",
  //       autoClose: 2000,
  //     };
      
  //     navigate('/home/UsersList');
  //   } 
  //   catch (error) {
  //     console.log(error);
  //     toast.error("Sorry, User Not Added !");
  //   }
  //    }
    //  let onSubmitForUpdate =async(event)=>{
    //   event.preventDefault();

    //   try {
    //     const response = await axios.put(`https://dummyjson.com/users/${userToUpdate?.id}`, data)
    //     console.log(response);
    //     toast.success("Congratulations , User Updated Successfully !"), {
    //       position: "top-right",
    //       autoClose: 2000,
    //     };
        
    //     navigate('/home/UsersList');
    //   }
    //    catch (error) {
    //     console.log(error);
    //     toast.error("Sorry, User Not Updated !");
    //   }
    //    }
//    function handleUser  ({ isEdit, userToUpdate  }) {

//     useEffect(() => {
//       if (isEdit === 'true' && userToUpdate) { 
//         setTitle('Update User');

//         setFormData({
//           ...formData,
//           fn: userToUpdate.firstName,
//           ln: userToUpdate.lastName,
//           ei: userToUpdate.email,
//           a: userToUpdate.age,
//           ph: userToUpdate.phone,
//           bd: userToUpdate.birthDate,
//         });
//       }
//       else if(isEdit === 'false' && userToUpdate===null) {
      
//         setTitle('Add User');
      
//        setFormData({
//         ...formData,

//           fn: userToUpdate.target.defaultValue,
//           ln: '',
//           ei: '',
//           a: '',
//           ph: '',
//           bd: '',
//         });
//     }}, [ formData]);
    
    
//   };
 
//  handleUser({isEdit, userToUpdate});
 
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
                aria-label="firstname" aria-describedby="addon-wrapping" 
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
                aria-label="lastname" aria-describedby="addon-wrapping" 
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
                aria-label="email" aria-describedby="addon-wrapping" 
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
                aria-label="age" aria-describedby="addon-wrapping"
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
                aria-label="phonenumber" aria-describedby="addon-wrapping" 
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
                aria-label="birthdate" aria-describedby="addon-wrapping" 
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
          <button onSubmit={handleSubmit(onSubmit)}  className="w-50 btn btn-warning">Add User</button>
          

          </div>
        </form>
      </div>  
    </div>
  )
}
