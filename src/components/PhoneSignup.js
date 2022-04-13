import React, {useState} from 'react'
import {Link, useNavigate} from "react-router-dom";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Button, Alert, Form } from 'react-bootstrap';
import { useUserAuth } from '../context/UserAuthContext';


const PhoneSignup = () => {
    const [number, setNumber] = useState("");
    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");
    const [flag, setFlag] = useState(false);
    const [confirmObj, setConfirmObj] = useState("");
    const { setUpRecaptcha } = useUserAuth();
    const navigate = useNavigate();



const getOtp = async (e) => {
    e.preventDefault();
    setError("");
    if(number === "" || number === undefined) 
    return setError("Please enter a valid phone number!")
    try{
      
      const response = await setUpRecaptcha(number);
      console.log(response);
      setConfirmObj(response);
      setFlag(true);
    }
    catch (err){
      setError(err.message);
    }
    console.log(number);
};

const verifyOtp = async (e) => {
  e.preventDefault();
  console.log(otp);
  if (otp === "" || otp === null) return;

  try{
    setError("");
    await confirmObj.confirm(otp);
    navigate("/home");
  }
  catch(err) {
    setError(err.message);
  }
};

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Phone Auth</h2>
        {error && <Alert variant="danger">{setError}</Alert>}
        <Form onSubmit={getOtp} style= {{display: !flag ? "block" : "none" }}>
          <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
            <PhoneInput defaultCountry="IN"
            value={number}
            onChange={setNumber}
            placeholder="Enter Phone Number"
            />
<div id="recaptcha-container" />
            
          </Form.Group>
          <div className="button-right">
              <Link to ="/">
              <Button varient= "secondary"> Cancel </Button> &nbsp;
              </Link>
              <Button varient= "primary" type="submit"> Send OTP </Button>
          </div>
          </Form>

          <Form onSubmit={verifyOtp} style= {{display: flag ? "block" : "none" }}>
          <Form.Group className="mb-3" controlId="formBasicotp">
            <Form.Control>
              type="text",
              placeholder="Enter otp",
              onChange = {(e) => setOtp(e.target.value)}
            </Form.Control>
           </Form.Group>
          <div className="button-right">
              <Link to ="/">
              <Button varient= "secondary"> Cancel </Button> &nbsp;
              </Link>
              <Button varient= "primary" type="submit"> Verify OTP </Button>
          </div>
          </Form>
          </div>
          </>
  );
};

export default PhoneSignup;