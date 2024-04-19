import { Form, useNavigate, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { toast } from 'react-toastify';
import { Button, TextField, Typography ,Select, MenuItem } from '@mui/material';
import { styled } from '@mui/system';
import customFetch from '../utils/customFetch';
import { useState } from 'react';

const StyledForm = styled(Form)({
  maxWidth: '400px',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '8px',
});



const AddPersonalDetails = () => {
  const navigation = useNavigation();
  const navigate = useNavigate();
  console.log(navigation);
  const isSubmitting = navigation.state === 'submitting';

  // const [selectedPhoto, setSelectedPhoto] = useState(null); // For uploaded_photo
  // const [selectedSignature, setSelectedSignature] = useState(null);


  // const handleFileChange1 = (event) => {
  //   setSelectedPhoto(event.target.files[0]);
  //   console.log(selectedPhoto);
  // };

  // const handleFileChange2 = (event) => {
  //   setSelectedSignature(event.target.files[0]);
  //   console.log(selectedSignature);
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("college_email",localStorage.getItem("user_email"));
    console.log(formData);
    // const data = Object.fromEntries(formData);
    // console.log(data);

    try {
      await customFetch.post('/temp-personal-details', formData);
      // console.log(formData);
      toast.success('saved sports');
      navigate('/AddOtherDetails');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };

  return (
    <Wrapper>
      <StyledForm onSubmit={handleSubmit} encType='multipart/form-data'>
        <Typography variant="h4">Personal Details</Typography>
        <TextField
          type="text"
          name="jee_main_application_no"
          label="Jee Main Application No"
          defaultValue="1000098"
          fullWidth
          margin="normal"
        />
        <TextField
          type="text"
          name="institute_name"
          label="Institute Name"
          defaultValue="IIT ISM"
          fullWidth
          margin="normal"
        />
        <TextField
          type="text"
          name="first_name"
          label="First Name"
          defaultValue="Test"
          fullWidth
          margin="normal"
        />
        <TextField
          type="text"
          name="middle_name"
          label="Middle Name"
          defaultValue="Test"
          fullWidth
          margin="normal"
        />
        <TextField
          type="text"
          name="last_name"
          label="Last Name"
          defaultValue="Last"
          fullWidth
          margin="normal"
        />
        <TextField
          type="email"
          name="email"
          label="Email"
          defaultValue="21je0xxx@iitism.ac.in"
          fullWidth
          margin="normal"
        />
        <TextField
          type="number"
          name="contact_no"
          label="Contact no"
          defaultValue="878797979797"
          fullWidth
          margin="normal"
        />
        <TextField
          type="text"
          name="category"
          label="Category"
          defaultValue="GEN"
          fullWidth
          margin="normal"
        />
        <TextField
          type="text"
          name="allocated_category"
          label="Allocated Category"
          defaultValue="OPEN"
          fullWidth
          margin="normal"
        />
        <TextField
  type="date"
  name="date_of_birth"
  defaultValue="2005-04-12"
  fullWidth
  margin="normal"
  InputLabelProps={{
    shrink: true,
  }}
/>
        <TextField
          type="text"
          name="gender"
          label="Gender"
          defaultValue="M"
          fullWidth
          margin="normal"
        />
        <TextField
          type="text"
          name="preparatory"
          label="Preparatory"
          defaultValue="Yes"
          fullWidth
          margin="normal"
        />
        <TextField
          type="text"
          name="divyang"
          label="Divyang"
          defaultValue="no"
          fullWidth
          margin="normal"
        />
        <TextField
          type="number"
          name="aadhar_number"
          label="Aadhar Number"
          defaultValue="216176378167"
          fullWidth
          margin="normal"
        />
        <TextField
          type="text"
          name="country"
          label="Country"
          defaultValue="India"
          fullWidth
          margin="normal"
        />
        <TextField
          type="text"
          name="state"
          label="State"
          defaultValue="Jharkhand"
          fullWidth
          margin="normal"
        />
        <TextField
          type="text"
          name="city"
          label="City"
          defaultValue="Dhanbad"
          fullWidth
          margin="normal"
        />
        <TextField
          type="number"
          name="pincode"
          label="Pincode"
          defaultValue="500097"
          fullWidth
          margin="normal"
        />
        <TextField
          type="text"
          name="permanent_address_line_1"
          label="Permanent Address Line 1"
          defaultValue="test"
          fullWidth
          margin="normal"
        />
        <TextField
          type="text"
          name="permanent_address_line_2"
          label="Permanent Address Line 2"
          defaultValue="test"
          fullWidth
          margin="normal"
        />
        <div style={{ marginBottom: '20px' }}>
        <h1 style={{ fontSize: '14px' }}>Blood Group</h1>
   <Select
    name="blood_group"
    label="Blood Group"
    defaultValue="B+"
    fullWidth
    margin="normal"
  >
    <MenuItem value="A+">A+</MenuItem>
    <MenuItem value="B+">B+</MenuItem>
    <MenuItem value="AB+">AB+</MenuItem>
    <MenuItem value="O+">O+</MenuItem>
    <MenuItem value="O-">O-</MenuItem>
    <MenuItem value="A-">A-</MenuItem>
    <MenuItem value="B-">B-</MenuItem>
    <MenuItem value="AB-">AB-</MenuItem>
    <MenuItem value="O-">O-</MenuItem>
  </Select>
  </div>
  <TextField
          type="text"
          name="nationality"
          label="Nationality"
          defaultValue="Indian"
          fullWidth
          margin="normal"
        />
        <div style={{ marginBottom: '20px' }}>
        <h1 style={{ fontSize: '14px' }}>Religion</h1>
   <Select
    name="religion"
    label="Religion"
    defaultValue="HINDU"
    fullWidth
    margin="normal"
  >
    <MenuItem value="HINDU">HINDU</MenuItem>
    <MenuItem value="MUSLIM">MUSLIM</MenuItem>
    <MenuItem value="CHRISTIAN">CHRISTIAN</MenuItem>
    <MenuItem value="SIKH">SIKH</MenuItem>
    <MenuItem value="BAUDDHIST">BAUDDHIST</MenuItem>
    <MenuItem value="JAIN">JAIN</MenuItem>
    <MenuItem value="PARSI">PARSI</MenuItem>
    <MenuItem value="YAHUDI">YAHUDI</MenuItem>
    <MenuItem value="OTHERS">OTHERS</MenuItem>
  </Select>
  </div>
  <TextField
    type="text"
    name="birth_place"
    label="Birth Place"
    defaultValue="Mumbai"
    fullWidth
    margin="normal"
  />
  {/* <TextField
    type="file"
    name="uploaded_photo"
    fullWidth
    margin="normal"
    sx={{ display: 'block' }} // Display the TextField as a block element
    InputLabelProps={{ shrink: true }} // Shrink the label to avoid collision
    label="Uploaded photo"
/> */}
<input 
  type="file"
  name="uploaded_photo"
/>

<input 
  type="file"
  name="uploaded_signature"
/>

{/* <TextField
  type="file"
  name="uploaded_signature"
  fullWidth
  margin="normal"
  sx={{ display: 'block' }} // Display the TextField as a block element
  InputLabelProps={{ shrink: true }} // Shrink the label to avoid collision
  label="Uploaded signature"
/> */}

        {/* Add more TextField components for other input fields */}
        <Button type="submit" disabled={isSubmitting} variant="contained">
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
      </StyledForm>
    </Wrapper>
  );
};

export default AddPersonalDetails;
