import { useForm } from 'react-hook-form'
import styles from'./LogIn.module.css'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
export default function LogIn() {

let { saveUserData , userData} = useContext(AuthContext);

  let navigate = useNavigate();

  let {
    register,
    handleSubmit,
    formState : {errors},
  }= useForm();

  const onSubmit = async(data:any) => {
    console.log(data);
    try {
      let response = await axios.post('https://dummyjson.com/auth/login', data);
      localStorage.setItem('userToken', response.data.token);
      saveUserData();
      console.log(response.data.token);
      navigate("/home/UsersList")
      toast('login success', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      
        });
    } catch (error) {
      console.log(error);
      toast.error("login failed");
    }
  };
  return (
    <div className ={`${styles.authContainer} container-fluid`}>
      <div className='row vh-100 justify-content-center align-items-center'>
        <div className='col-lg-4 col-md-6 col-sm-12 bg-white p-5 m-2 rounded rounded-3'>
              <h4 className={`mx-3 ${styles.title}`}>User Management System</h4>
              <h5 className=' text-center'>LOGIN</h5>
              <span className=' text-center'>Enter your credentials to access your account</span>
              <form className='my-2' onSubmit={handleSubmit(onSubmit)}>
                
              <div className="mb-3">
                <label className='mb-2'>UserName</label>
                <input
                type="text" className="form-control" placeholder="UserName" 
                aria-label="UserName" aria-describedby="addon-wrapping"
                  {...register("username",{required:"user name is required"} 
  )}
                />
              </div>
              {errors.username && <p className='alert alert-danger p-2'>{errors?.username?.message}</p>}
               <div className="mb-3">
                <label className='mb-2'>Password</label>
                <input
                type="text" className="form-control" placeholder="password" 
                aria-label="password" aria-describedby="addon-wrapping"
                  {...register("password", {
                required:"password is required", 
                  minLength:{
                    value: 5 ,
                     message:"password not matched",
                  },
})} 
                />
              </div>
              {errors.password && <p className='alert alert-danger p-2'>{errors?.password?.message}</p>}
              <button className='btn btn-warning w-100 text-white p-2'>LOGIN</button>
              </form>
        </div>
      </div>
    </div>
  )
}
