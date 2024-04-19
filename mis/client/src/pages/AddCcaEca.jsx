import { Form, useNavigate, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { toast } from 'react-toastify';
import { Button, TextField, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';
import customFetch from '../utils/customFetch';


const StyledForm = styled(Form)({
  maxWidth: '1300px',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '8px',
});

const StyledGrid = styled(Grid)({
  display: 'flex',
  flexDirection: 'row',
});

const StyledGridItem = styled(Grid)({
  marginBottom: '20px',
  width: '50%',
});

const AddCcaEca = () => {
  const navigation = useNavigation();
  const navigate = useNavigate();
  console.log(navigation);
  const isSubmitting = navigation.state === 'submitting';

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("college_email",localStorage.getItem("user_email"));
    try {
      await customFetch.post('/temp-cca-ecas', formData);
      console.log(formData);
      toast.success('saved sports');
      console.log("hey");
      navigate('/AddPersonalDetails'); // Use navigation.navigate instead of redirect
      console.log("hey2");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };

  const handleFetch = async (event) => {
    event.preventDefault();
    try {
      console.log("Clicked");
      // await customFetch.post('/temp-cca-ecas', formData);
      
    } catch (error) {
      // toast.error(error?.response?.data?.msg);
    }
  };

  return (
    <Wrapper>
    <h1>Hey</h1>
    <button onClick={handleFetch}>Hey</button>
      <StyledForm onSubmit={handleSubmit}>
        <Typography variant="h4">Add CCA ECA</Typography>
        <Grid container spacing={2}>
          <StyledGridItem item xs={6}>
            <TextField
              type="text"
              name="cca_sports"
              label="CCA Sports"
              defaultValue="cricket"
              fullWidth
              margin="normal"
            />
          </StyledGridItem>
          <StyledGridItem item xs={6}>
            <TextField
              type="text"
              name="eca_sports"
              label="ECA Sports"
              defaultValue="eca_sports"
              fullWidth
              margin="normal"
            />
          </StyledGridItem>
          <StyledGridItem item xs={6}>
            <TextField
              type="text"
              name="major_game"
              label="Major Game"
              defaultValue="major_game"
              fullWidth
              margin="normal"
            />
          </StyledGridItem>
          <StyledGridItem item xs={6}>
            <TextField
              type="text"
              name="minor_game"
              label="Minor Game"
              defaultValue="minor_game"
              fullWidth
              margin="normal"
            />
          </StyledGridItem>
        </Grid>
        <Button type="submit" disabled={isSubmitting} variant="contained">
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
      </StyledForm>
    </Wrapper>
  );
};

export default AddCcaEca;
