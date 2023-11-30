import React, { useState, useEffect } from "react";
import axios from "axios";

function UserProfile(user) {
  const [isEditing, setEditing] = useState(false);
  const [userdetails, setUserdetails] = useState([]);
  const userSessionData = JSON.parse(sessionStorage.getItem("userSession"));
  const [userName, setUserName] = useState("");
  // const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(userdetails.phone);
  const [errors, setUserError] = useState({});
  // const [phoneError, setPhoneError] = useState("");

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    setEditing(false);
  };

  const validateUsername = (userName) => {
    if (userName.length < 6) {
      return "Username should atleast be 6 characters";
    }
    return null;
  };
  const validatePhonenumber = (phoneNumber) => {
    if (phoneNumber.length < 10) {
      return "Invalid Phone Number";
    }
    return null;
  };

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
    // const userNameError = validateUsername(userName);
    // const phoneError = validatePhonenumber(phoneNumber);
    // if (userNameError || phoneError) {
    //   errors({ userNameError, phoneError });
    //   return;
    // }
    // if (phoneError) {
    //   setPhoneError(phoneError);
    // }
    axios
      .patch(
        `http://localhost:8080/users/${userSessionData.id}/modify-details`,
        {
          // if(userName) {
          username: String(userName),
          phone: String(phoneNumber),
          // },
          // if(phoneNumber) {
          //   phone: String(phoneNumber);
          // },
        }
      )
      .then((response) => {
        if (response) {
          console.log("jj", response);
        }
      })
      .catch((e) => {
        console.error("Axios Error", e.message);
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/users/${userSessionData.id}`)
      .then((response) => {
        if (response) {
          setUserdetails(response.data);
          console.log(response.data);
        }
      })
      .catch((e) => {
        console.error("Axios Error", e.message);
      });
  }, []);

  return (
    <div
      className="profile-box"
      style={{
        margin: "10%",
        borderRadius: "290px",
        fontWeight: "bold",
        textAlign: "center",
        padding: "5%",
        border: "1px solid #ccc",
        borderRadius: "8px",
        background: "#D3D3D3",
      }}
    >
      <div className="pro-img">
        <img
          src={require("../images/profileimg.png")}
          style={{ textAlign: "center", width: "15%", height: "51%" }}
        />
      </div>
      <div className="pro" style={{ fontSize: "48px", margin: "21px 11px" }}>
        <label>User Profile</label>
      </div>
      <div
        className="username"
        style={{ fontSize: "28px", margin: "21px 11px" }}
      >
        <label>Username: &nbsp;</label>
        {isEditing ? (
          <input
            type="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            // onChange={handleChange}
          />
          
        ) : (
          <span>{userdetails.username}</span>
        )}
      </div>
      <div className="email" style={{ fontSize: "28px", margin: "21px 11px" }}>
        <label>Email: &nbsp;</label>

        <span>{userdetails.email}</span>
      </div>
      <div className="number" style={{ fontSize: "28px", margin: "21px 11px" }}>
        <label>Phone Number: &nbsp;</label>
        {isEditing ? (
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        ) : (
          <span>{userdetails.phone}</span>
        )}
      </div>

      <div className="dob" style={{ fontSize: "28px", margin: "21px 11px" }}>
        <label>DOB: &nbsp;</label>
        <span>{userdetails.DoB}</span>
      </div>
      <div
        className="buttons"
        style={{ fontSize: "20px", margin: "21px 11px" }}
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
  );
}

export default UserProfile;
