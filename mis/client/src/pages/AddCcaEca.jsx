// import React from 'react';
import { Form, redirect, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { toast } from 'react-toastify';
import { Button, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
const BlockTextField = styled(TextField)({
  display: 'block', // Set display property to block
  marginBottom: '20px', // Add margin at the bottom for spacing
});
import customFetch from '../utils/customFetch';
import { useEffect } from 'react';

const StyledForm = styled(Form)({
  // Add your custom CSS styles here for the form
  maxWidth: '400px', // Decrease the width
  margin: '0 auto',
  padding: '20px', // Add padding for the box effect
  border: '1px solid #ccc', // Add border for the box effect
  borderRadius: '8px', // Add border radius for rounded corners
});


const AddCcaEca = () => {
  const navigation = useNavigation();
  console.log(navigation);
  const isSubmitting = navigation.state === 'submitting';
//   const userData = {
//     "registered_email_id": localStorage.getItem('user_email') ,
//     "registered_mob_no": localStorage.getItem('user_mob')
//   }

//   useEffect(() => {
//     const handleLogin = async () => {
//       await customFetch.post('/login', userData);
// };
//     handleLogin();
// }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    data.college_email=localStorage.getItem("user_email")
    try {
      await customFetch.post('/temp-cca-ecas', data);
      console.log(data);
      toast.success('saved sports');
      console.log("hey");
      redirect('/AddPersonalDetails'); // Use navigation.navigate instead of redirect
      console.log("hey2");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };

  return (
    <Wrapper>
      <StyledForm onSubmit={handleSubmit}>
        <Typography variant="h4">Add CCA ECA</Typography>

        
        <TextField
          type="text"
          name="cca_sports"
          label="CCA Sports"
          defaultValue="cricket"
          fullWidth
          margin="normal"
        />
        <TextField
          type="text"
          name="eca_sports"
          label="ECA Sports"
          defaultValue="eca_sports"
          fullWidth
          margin="normal"
        />
        <TextField
          type="text"
          name="major_game"
          label="Major Game"
          defaultValue="major_game"
          fullWidth
          margin="normal"
        />
        <TextField
          type="text"
          name="minor_game"
          label="Minor Game"
          defaultValue="minor_game"
          fullWidth
          margin="normal"
        />
        <Button type="submit" disabled={isSubmitting} variant="contained">
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
      </StyledForm>
    </Wrapper>
  );
};

export default AddCcaEca;
