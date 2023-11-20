import React, {useState} from 'react';
// import UserProfile from "./ProfilePg";


    const UserProfile = () => {
      const [isEditing, setEditing] = useState(false);
      const [userName, setUserName] = useState('John Doe');
      const [email, setEmail] = useState('john.doe@example.com');
      const [phoneNumber, setPhoneNumber] = useState('123-456-7890');
    
      const handleEditClick = () => {
        setEditing(true);
      };
    
      const handleSaveClick = () => {
        setEditing(false);
      };
    
      return (
        <div className="profile-box" style={{ margin:'10%', borderRadius:'290px' ,fontWeight: 'bold', textAlign: 'center', padding: '5%', border: '1px solid #ccc', borderRadius: '8px', background:"#D3D3D3"}} >
            <div className="pro-img">
                    {/* <img src={"..images/userprofile.png"} alt="Profile"/> */}
                    <img src ={require('../images/profileimg.png')} style={{textAlign: 'center', width: '15%', height: '51%' }} />
            </div>
        <div className="pro" style={{fontSize:'48px', margin: '21px 11px'}} >
          <label>User Profile</label>
        </div>
          <div className="username" style={{fontSize:'28px',margin: '21px 11px'}} >
            <label>Username: </label>
            {isEditing ? ( <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}
              />
            ) : (
              <span>{userName}</span>
            )}
          </div>
          <div className="email" style={{fontSize:'28px',margin: '21px 11px'}} >
            <label>Email: </label>
            {isEditing ? (
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            ) : (
              <span>{email}</span>
            )}
          </div>
          <div className="number" style={{fontSize:'28px',margin: '21px 11px'}} >
            <label>Phone Number: </label>
            {isEditing ? (
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            ) : (
              <span>{phoneNumber}</span>
            )}
          </div>
          <div className="buttons" style={{fontSize:'20px',margin: '21px 11px'}} >
            {isEditing ? (
              <button onClick={handleSaveClick}>Save</button>
            ) : (
              <button onClick={handleEditClick}>Edit</button>
            )}
          </div>
        </div>
      );
    }
    
    export default UserProfile;
    
