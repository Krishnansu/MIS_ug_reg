// import React from 'react'

// const AddHostelDetails = () => {
//   return (
//     <h1>AddHostelDetails</h1>
//   )
// }

// export default AddHostelDetails



// import React from 'react';
import { Form, redirect, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { toast } from 'react-toastify';
import { Button, TextField, Typography ,Select, MenuItem} from '@mui/material';
import { styled  } from '@mui/system';

const StyledForm = styled(Form)({
  // Add your custom CSS styles here for the form
  maxWidth: '400px', // Decrease the width
  margin: '0 auto',
  padding: '20px', // Add padding for the box effect
  border: '1px solid #ccc', // Add border for the box effect
  borderRadius: '8px', // Add border radius for rounded corners
});

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    // await customFetch.post('/auth/register', data);
    console.log(data);
    toast.success('saved sports');
    return redirect('/AddPersonalDetails');
  } catch (error) {
    toast.error(error?.response?.data?.msg);

    return error;
  }
};

const AddHostelDetails = () => {
  const navigation = useNavigation();
  console.log(navigation);
  const isSubmitting = navigation.state === 'submitting';

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
  
    try {
      // await customFetch.post('/auth/register', data);
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
        <div style={{ marginBottom: '20px' }}>
  <Select
    name="food_habit"
    label="Food Habit"
    defaultValue="Non-Veg"
    fullWidth
    margin="normal"
  >
    <MenuItem value="Veg">Veg</MenuItem>
    <MenuItem value="Non-Veg">Non-Veg</MenuItem>
    </Select>
</div>
        <TextField
          type="text"
          name="laptop_details"
          label="If Having laptop(Give Details)"
          defaultValue="Macbook"
          fullWidth
          margin="normal"
        />
        <TextField
          type="text"
          name="model_no"
          label="Model No"
          defaultValue="a2337"
          fullWidth
          margin="normal"
        />
        <TextField
          type="text"
          name="serial_no"
          label="Serial No"
          defaultValue="72347"
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

export default AddHostelDetails;
