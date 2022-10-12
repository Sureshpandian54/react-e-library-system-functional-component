import styles from "./Register.module.css";
import Header from "../Header/Header";
import {useState,useEffect} from "react";
import {emptyValues} from "../Helper/validation";
import {registerLabel} from "../Helper/constant";
import {useNavigate} from "react-router-dom";


function Register() {

    const navigation= useNavigate();

    const [getForm, setForm]=useState({
        firstName:"",  
        lastName:"",
        email:"",
        password:""
    });

    const [getFormValidation, setFormValidation]=useState({
        firstName:true,  
        lastName:true,
        email:true,
        password:true
    });

    const [getGlobal,setGlobal]=useState(false);

      useEffect(()=>{
        if(!getFormValidation.firstName && !getFormValidation.lastName && !getFormValidation.email && !getFormValidation.password){
            alert("success");
            sessionStorage.setItem("email",getForm.email);
            sessionStorage.setItem("password",getForm.password);
            navigation("/Login");
        }
      },[getFormValidation])

    const onChangeHandler=(event)=>{
        setForm({...getForm,[event.target.name]:event.target.value});
    }

       const onSubmitHandler=(event)=>{
        event.preventDefault();
        setGlobal(true);
        setFormValidation({
            firstName:emptyValues(getForm.firstName),
            lastName:emptyValues(getForm.lastName),
            email:emptyValues(getForm.email),
            password:emptyValues(getForm.password)
        });
       }

    return (     
        <div>
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <h3>Signup</h3>
                        <form>
                            <div className="form-group">
                                <label for="exampleInputemail1">firstName</label>
                                <input type="text" className={`${styles.boxControl} form-control`} name="firstName" onChange={onChangeHandler} id="First Name" placeholder="First Name" required />
                                {getGlobal && getFormValidation.firstName && <div className="alert alert-danger" role="alert">
                                    {registerLabel.firstName}    
                                </div>}
                            </div>
                            <div className="form-group">
                                <label for="exampleInputemail1">lastName</label>
                                <input type="text" className={`${styles.boxControl} form-control`} name="lastName" onChange={onChangeHandler} id="Last Name" placeholder="Last Name" required />
                                {getGlobal && getFormValidation.lastName && <div className="alert alert-danger" role="alert">
                                    {registerLabel.lastName}    
                                </div>}
                            </div>
                            <div className="form-group">
                                <label for="exampleInputemail1">email</label>
                                <input type="email" className={`${styles.boxControl} form-control`} name="email" onChange={onChangeHandler} id="email" placeholder="Enter email" required />
                                {getGlobal && getFormValidation.email && <div className="alert alert-danger" role="alert">
                                    {registerLabel.email}    
                                </div>}
                            </div>
                            <div className="form-group">
                                <label for="exampleInputpassword1">password</label>
                                <input type="password"  className={`${styles.boxControl} form-control`} name="password" onChange={onChangeHandler} id="password" placeholder="password" required />
                                {getGlobal && getFormValidation.password && <div className="alert alert-danger" role="alert">
                                    {registerLabel.password}    
                                </div>}
                            </div>

                            <button type="submit" onClick={onSubmitHandler} className="btn btn-primary button-margin">Sign up</button>
                        </form>
                    </div>
                </div>
            </div> 
            <div className="col-4"></div>
        </div >
    );
}
export default Register;