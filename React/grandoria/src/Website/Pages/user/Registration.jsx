import React, { useState } from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import { data, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Registration() {

    const redirect = useNavigate()

    const [form, setform] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        status: ""
    })

    const getchange = (e) => {
        setform({
            ...form,
            id: new Date().getTime().toString(),
            status: "unblock",
            [e.target.name]: e.target.value
        })
        console.log(form);
    }

    const submitData = async (e) =>{
  e.preventDefault()

    if (form.email == "" || form.password == "" || form.name == "") {
        console.log("Pls Field Full Data..");
        toast.error('Pls Field Full Data..!')
        return false;
    }

    const res = await axios.post("http://localhost:3000/users",form)
    console.log(res.data);

    setform({
          id: "",
            name: "",
            email: "",
            password: "",
            status: ""
    })
      redirect("/user")
        toast.success('Register Successfull..!')
  try {


        } catch (error) {
            console.log("Api data is not show..",error);

        }
    }
      
    return (
        <div>
            <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}>
                <div className='mask gradient-custom-3'></div>
                <form action="" onSubmit={submitData}>
                    <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
                    <MDBCardBody className='px-5'>
                        <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                        <MDBInput value={form.name} onChange={getchange} name='name' wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text' />
                        <MDBInput value={form.email} onChange={getchange} name='email' wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' />
                        <MDBInput value={form.password} onChange={getchange} name='password' wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password' />
                        {/* <MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg' id='form4' type='password' /> */}
                        <div className='d-flex flex-row justify-content-center mb-4'>
                            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
                        </div>
                        <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Register</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
                </form>
            </MDBContainer>
        </div>
    )
}

export default Registration
