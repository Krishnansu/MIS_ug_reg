import { Form, useNavigate, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { toast } from 'react-toastify';
import { Button, TextField, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';
import customFetch from '../utils/customFetch';
import { useEffect, useState } from 'react';


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

  const [sports,setSports] = useState(null);

  const [formData, setFormData] = useState({
    cca_sports: '',
    eca_sports: '',
    major_game: '', 
    minor_game: '',
});

useEffect(() => {
  const fetchData = async () => {
    try {
      const email = localStorage.getItem("user_email");
      const response = await customFetch.get('/temp-cca-ecas/' + email);
      const data = response.data; 
      console.log("Fetched data: ",data);
      setFormData(data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  fetchData();
}, []); 

useEffect(() => {
  const fetchSports = async () => {
    try {
      const response = await customFetch.get('/sports-caa-seats');
      const data = response.data; 
      console.log("Fetched jeea: ",Object.entries(data));// Assuming the response is in JSON format
      setSports(data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  fetchSports();
}, []);

const handleChange = (event) => {
  const { name, value, type, files } = event.target;
  const newValue = type === 'file' ? files[0] : value;
  console.log(newValue);
  setFormData((prevData) => ({
    ...prevData,
    [name]: newValue,
  }));
};

  // const goBack = async (event) => {
  //   event.preventDefault();
  //   try {
  //     navigate('/AddParentDetails');
  //   } catch (error) {
  //     toast.error(error?.response?.data?.msg);
  //   }
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("college_email",localStorage.getItem("user_email"));
    try {
      await customFetch.post('/temp-cca-ecas', formData);
      console.log(formData);
      toast.success('CCA/ECA Details Saved');
      navigate('/AddPersonalDetails'); 

    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };



  return (
    <Wrapper>
      <StyledForm onSubmit={handleSubmit}>
        <Typography variant="h4">Add CCA ECA</Typography>
        <Grid container spacing={2}>
          <StyledGridItem item xs={6}>
            <TextField
              type="text"
              name="cca_sports"
              label="CCA Sports"
              value={formData.cca_sports}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </StyledGridItem>
          <StyledGridItem item xs={6}>
            <TextField
              type="text"
              name="eca_sports"
              label="ECA Sports"
              value={formData.eca_sports}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </StyledGridItem>
          <StyledGridItem item xs={6}>
            <TextField
              type="text"
              name="major_game"
              label="Major Game"
              value={formData.major_game}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </StyledGridItem>
          <StyledGridItem item xs={6}>
            <TextField
              type="text"
              name="minor_game"
              label="Minor Game"
              value={formData.minor_game}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </StyledGridItem>
        </Grid>
        <Button type="submit" disabled={isSubmitting} variant="contained">
          {isSubmitting ? 'Submitting...' : 'Save and Next'}
        </Button>
        {/* <Button onClick={goBack}  disabled={isSubmitting} variant="contained">
          Back
        </Button> */}
      </StyledForm>
    </Wrapper>
  );
};

export default AddCcaEca;

