import React, { useEffect, useState } from 'react';
import './Profile.css';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import api from '../../api/axiosConfig'; 


const Profile = ({ getUserData, singleUser }) => {


  const username = useParams().username;
  const [selectedFile, setSelectedFile] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState('');

  useEffect(() => {
    getUserData(username);
  }, [getUserData, username]);

  useEffect(() => {
    const fetchProfilePhoto = async () => {
      try {
        const response = await api.get(`/api/v1/images/download/${singleUser?.profilePhoto[0]?.name}`, {
          responseType: 'arraybuffer',
        });
  
        if (response.data) {
          const base64Str = btoa(
            new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
          );
          setProfilePhoto(`data:image/jpeg;base64,${base64Str}`);
        }
      } catch (error) {
        console.error('Error fetching profile photo:', error);
      }
    };
  
    if (singleUser?.profilePhoto[0]?.name) {
      fetchProfilePhoto();
    }
  }, [singleUser]);
  
  

  const handleImageUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('username', username);

      const response = await api.post(`/api/v1/images/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Handle the response from the server as needed
      console.log('Image upload response:', response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  

  

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  console.log("UserName in Profile ~~~:", username);
  console.log("Photo in Profile:", profilePhoto);
  
  const [email, setEmail] = useState(singleUser?.email);
  const [password, setPassword] = useState(singleUser?.password);
  const [aboutme, setAboutMe] = useState(singleUser?.aboutme);
  const [nickname, setNickname] = useState(singleUser?.nickname);
  const [isEditMode, setIsEditMode] = useState(false);
 


  const handleProfileUpdate =  async () => {

    try {

        const response = await api.put('/api/v1/users/editProfile', { 

            username: username,
            nickname: nickname,
            email: email,
            password: password,
            aboutme: aboutme
        });


        setNickname(response.nickname);
        setEmail(response.email);
        setPassword(response.password);
        setAboutMe(response.aboutme); 
        setIsEditMode(false);

      } catch (error) {
        
        console.error('Error updating profile:', error);
      }

      

  };

 
  return (

    <div className='the-whole-profile-page'>

    <Container fluid className="profile-main-container">

      <div className="profile-title-container">
        My Profile
      </div>

      <div className="hello-username-container">
        Hello "{singleUser?.username}"
      </div>

      <Container className="profile-container">

        {/* （相片＆資訊）行 */}
        <Row className='photo-and-information-row'>

          {/* 相片欄 */}
          <Col className='profile-photo-column'>
            <div>
                  <img className='profile-photo' src={profilePhoto} alt='Profile' />
                  
                  <div className="upload-container">
                      <input id="file-upload" type="file" onChange={(e) => setSelectedFile(e.target.files[0])}  />
                      <button className="custom-button" onClick={handleImageUpload}>Upload Image</button>
                  </div>
            </div>
          </Col>


          {/* 資訊欄 */} 
      
          <Col className= "user-information-column">
            <div className="info-item">
              <div className="info-label">Name: {singleUser?.username}</div>
            </div>

            <div className="info-item">
              <div className="info-label">Nickname: {singleUser?.nickname}</div>
            </div>

            <div className="info-item">
              <div className="info-label">Email: {singleUser?.email}</div>
            </div>

            <div className="info-item">
              <div className="info-label">Password: {singleUser?.password}</div>
            </div>

            <div className="info-item">
              <div className="info-label">About me: {singleUser?.aboutme}</div>
            </div>
          </Col>

        </Row>


      </Container>

      {isEditMode ? (
        <div>
            <textarea className="text-area" value={nickname || singleUser?.nickname} onChange={(e) => handleInputChange(e, setNickname)} placeholder="Enter your new nickname"/>,
            <textarea className="text-area" value={email || singleUser?.email}  onChange={(e) => handleInputChange(e, setEmail)} placeholder="Enter your new email"/>,
            <textarea className="text-area" value={password || singleUser?.password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your new password"/>,
            <textarea className="text-area" value={aboutme || singleUser?.aboutme} onChange={(e) => setAboutMe(e.target.value)} placeholder="Enter your new aboutme"/>
            </div>
        ) : null}

    

 
      <div className="button-container">
        {isEditMode ? (
          <button className="update-button" onClick={handleProfileUpdate}>
            Save Changes
          </button>
        ) : (
          <button className="edit-button" onClick={() => {
        
            setIsEditMode(true);
          }}>
            Edit Profile
          </button>
        )}
      </div>


    </Container>
    </div>
 
  );
};

export default Profile;
