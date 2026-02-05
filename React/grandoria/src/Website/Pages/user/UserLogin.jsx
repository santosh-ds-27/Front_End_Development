import React, { useEffect, useState } from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function UserLogin() {

  const redirect = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("uid")) {

      redirect("/")

    }
  }, [])
  const [form, setform] = useState({

    email: "",
    password: ""
  })

  const getchange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value
    })

    console.log(form);
  }

  const submitData = async (e) => {
    e.preventDefault()

    try {
      const { email, password } = form
      if (email == "" || password == "") {
        console.log("Pls Fullfuield Data..");
        // toast.error('Pls Fullfuield Data..')
        return false;

      }

      const res = await axios.get(`http://localhost:3000/users?email=${email}`)
      console.log(res.data);
      if (res.data.length === 0) {
        console.log("Email Not Found");
        // toast.error('Email Not Found')
        return false;

      }
      const user = res.data[0]
      if (user.password != password) {
        console.log("Password Not Match");
        // toast.error('Password Not Match')
        return false;

      }

      localStorage.setItem("uid", user.id)
      localStorage.setItem("uname", user.name)
      console.log("Login Successfully..!");
      // toast.success('Login Successfully..!')

      redirect("/")


    } catch (error) {
      console.log("Api not Found..", error);
    }
  }
  return (
    <div>
      <MDBContainer fluid>

        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>

            <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
              <MDBCardBody className='p-5 w-100 d-flex flex-column'>

                <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                <p className="text-white-50 mb-3">Please enter your login and password!</p>

                <MDBInput  value={form.email} onChange={getchange} name='email' wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg" />
                <MDBInput  value={form.password} onChange={getchange} name='password'wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg" />

                <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />

                <MDBBtn size='lg' onClick={submitData} >
                  Login
                </MDBBtn>

                <hr className="my-4" /> 

              </MDBCardBody>
            </MDBCard>

          </MDBCol>
        </MDBRow>

      </MDBContainer>
    </div>
  )
}

export default UserLogin
