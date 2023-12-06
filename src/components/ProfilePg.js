import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { TextField } from '@mui/material'

function UserProfile (user) {
  const [isEditing, setEditing] = useState(false)
  const [userdetails, setUserdetails] = useState([])
  const userSessionData = JSON.parse(sessionStorage.getItem('userSession'))
  const [userName, setUserName] = useState(user.username)
  const [phoneNumber, setPhoneNumber] = useState(user.phone)
  const [phoneError, setPhoneError] = useState('')
  const [userNameError, setuserNameError] = useState('')

  const handleEditClick = () => {
    setEditing(true)
  }

  const validateUsername = userName => {
    if (userName.length < 6) {
      return 'Username should atleast be 6 characters'
    }
    return null
  }
  const validatePhonenumber = phoneNumber => {
    if (phoneNumber.length < 10) {
      return 'Invalid Phone Number'
    }
    return null
  }

  // const [formData, setFormData] = useState({
  //   username: "",
  //   phone: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  //   console.log("this is phone number", phone);
  //   console.log("this is username", formData);
  // };

  const handleClick = () => {
    // e.preventDefault();
    const userNameError = validateUsername(userName)
    const phoneError = validatePhonenumber(phoneNumber)
    // if (userNameError || phoneError) {
    //   setUserError({ userNameError: userNameError || null, phoneError:phoneError || null});
    //   console.log(errors)
    //   // alert(errors[0]);
    //   return;
    // }

    if (userNameError && phoneError) {
      alert(`${userNameError || ''} and ${phoneError || ''}`)
    } else {
      if (phoneError) {
        setPhoneError(phoneError)
        alert(phoneError)
        console.log(phoneError)
      }

      if (userNameError) {
        setuserNameError(userNameError)
        alert(userNameError)
        console.log(userNameError)
      }
    }

    if (phoneError === null && userNameError === null) {
      axios
        .patch(
          `http://localhost:8080/users/${userSessionData.id}/modify-details`,
          {
            // if(userName) {
            username: String(userName),
            phone: String(phoneNumber)
            // },
            // if(phoneNumber) {
            //   phone: String(phoneNumber);
            // },
          }
        )
        .then(response => {
          if (response) {
            console.log('jj', response)
            setEditing(false)
            setUserdetails(prevdetails => ({
              ...prevdetails,
              username: response.data.username,
              phone: response.data.phone
            }))
          }
        })
        .catch(e => {
          console.error('Axios Error', e.message)
        })
    }
  }

  useEffect(() => {
    axios
      .get(`http://localhost:8080/users/${userSessionData.id}`)
      .then(response => {
        if (response) {
          setUserdetails(response.data)
          console.log(response.data)
          setUserName(response.data.username)
          setPhoneNumber(response.data.phone)
        }
      })
      .catch(e => {
        console.error('Axios Error', e.message)
      })
  }, [])

  return (
    <div
      className='profile-box'
      style={{
        margin: 'auto',
        borderRadius: '23px',
        fontWeight: 'bold',
        textAlign: 'center',

        border: '1px solid #ccc',
        borderRadius: '8px',
        background: '#CB997E',
        width: '800px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '120px'
      }}
    >
      <div className='pro-img'>
        <img
          src={require('../images/profileimg.png')}
          style={{ textAlign: 'center', width: '15%', height: '51%' }}
        />
      </div>
      <div className='pro' style={{ fontSize: '48px', margin: '21px 11px' }}>
        <label>User Profile</label>
      </div>
      <div
        className='username'
        style={{ fontSize: '28px', margin: '11px 11px' }}
      >
        <label>Username: &nbsp;</label>
        {isEditing ? (
          <TextField
            id='username'
            name='username'
            placeholder={userdetails.username}
            onChange={e => setUserName(e.target.value)}
            // onChange={handleChange}
          />
        ) : (
          <span>{userdetails.username}</span>
        )}
      </div>
      <div className='email' style={{ fontSize: '28px', margin: '21px 11px' }}>
        <label>Email: &nbsp;</label>

        <span>{userdetails.email}</span>
      </div>
      <div className='number' style={{ fontSize: '28px', margin: '21px 11px' }}>
        <label>Phone Number: &nbsp;</label>
        {isEditing ? (
          <TextField
            id='phoneno'
            name='phoneno'
            placeholder={userdetails.phone}
            onChange={e => setPhoneNumber(e.target.value)}
          />
        ) : (
          <span>{userdetails.phone}</span>
        )}
      </div>

      <div className='dob' style={{ fontSize: '28px', margin: '21px 11px' }}>
        <label>DOB: &nbsp;</label>
        <span>{userdetails.DoB}</span>
      </div>
      <div
        className='buttons'
        style={{ fontSize: '20px', margin: '21px 11px' }}
      >
        {isEditing ? (
          <button sx={{ ml: 1 }} onClick={handleClick}>
            Save
          </button>
        ) : (
          <button onClick={handleEditClick}>Edit</button>
        )}
      </div>
    </div>
  )
}

export default UserProfile
