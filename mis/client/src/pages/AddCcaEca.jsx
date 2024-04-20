import React, { useState, useEffect } from 'react';
import { Typography, Grid, TextField, Paper, Button, Select, MenuItem } from '@mui/material';
import { styled } from '@mui/system';
import customFetch from '../utils/customFetch';

const StyledContainer = styled(Paper)({
  padding: '20px',
  marginBottom: '20px',
  maxWidth: '1100px', // Adjust the maximum width as per your preference
  margin: 'auto', // Center the container horizontally
  border: '1px solid #ccc',
  borderRadius: '8px',
});

const StyledSelectWrapper = styled('div')({
  marginBottom: '20px',
});

const StyledGrid = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledGridItem = styled(Grid)({
  marginBottom: '20px',
  width: '100%', // Set the grid item width to 100% to take full width
});

// Custom styled TextField component with only border color modified
const CustomTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgb(145, 85, 253)', // Border color
    },
  },
});

// Custom styled Button component with background color modified
const CustomButton = styled(Button)({
  backgroundColor: 'rgb(145, 85, 253)', // Background color
  width: '150px', // Reduced width
});

const AddCcaEca = () => {
  const navigation = useNavigation();
  const navigate = useNavigate();
  console.log(navigation);
  const isSubmitting = navigation.state === 'submitting';

  const [sports,setSports] = useState(null);
  const [seats, setSeats] = useState(null);
  const [category, setCategory] = useState(null);
  const [major, setMajor] = useState(null);
  const [minor, setMinor] = useState(null);
  const [eca, setEca] = useState(null);

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
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching CCA ECA data:', error);
      }
    };

  fetchData();
}, []); 

// useEffect(() => {
//   const fetchSports = async () => {
//     try {
//       const response = await customFetch.get('/sports-caa-seats');
//       const data = response.data; 
//       console.log("Fetched sports: ",Object.entries(data));// Assuming the response is in JSON format
//       setSports(data);
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   fetchSports();
// }, []);

useEffect(() => {
  const fetchSeats = async () => {
    try {
      const response = await customFetch.get('/sports-caa-seats/id');
      const data = response.data; 
      console.log("Fetched seats: ",data);// Assuming the response is in JSON format
      setSeats(data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  fetchSeats();
}, []);

useEffect(() => {
  const fetchCategory = async () => {
    try {
      const response = await customFetch.get('/sports-caa-seats/distinct-caa-sub-categories');
      const data = response.data; 
      console.log("Fetched categories: ",data);// Assuming the response is in JSON format
      setCategory(data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  fetchCategory();
}, []);

useEffect(() => {
  const fetchMajor = async () => {
    try {
      const response = await customFetch.get('/sports-caa-seats/names/nso/major');
      const data = response.data; 
      console.log("Fetched major: ",data);// Assuming the response is in JSON format
      setMajor(data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  fetchMajor();
}, []);

useEffect(() => {
  const fetchMinor = async () => {
    try {
      const response = await customFetch.get('/sports-caa-seats/names/nso/minor');
      const data = response.data; 
      console.log("Fetched minor: ",data);// Assuming the response is in JSON format
      setMinor(data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  fetchMinor();
}, []);

useEffect(() => {
  const fetchEca = async () => {
    try {
      const response = await customFetch.get('/sports-caa-seats/names/eca');
      const data = response.data; 
      console.log("Fetched eca: ",data);// Assuming the response is in JSON format
      setEca(data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  fetchEca();
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

// const handleChangeGame = (event) => {
//   const { name, value, type, files } = event.target;
//   const newValue = type === 'file' ? files[0] : value;
//   console.log(newValue);
//   const selectedGameId = value;

//   const selectedGame = major.find((game) => game.id === selectedGameId); 
//   console.log("Selected Game: ",selectedGame);
//   setFormData((prevData) => ({
//     ...prevData,
//     [name]: selectedGame.name,
//   }));
// };



  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data=Object.fromEntries(formData);
    formData.append("college_email",localStorage.getItem("user_email"));
    try {
      await customFetch.post('/temp-cca-ecas', formData);
      const majorGameName = data.major_game; 
      const minorGameName = data.minor_game;

      const matchingGameMajor = major.find((game) => game.name === majorGameName);
      const matchingGameMinor = minor.find((game) => game.name === minorGameName);

      if (matchingGameMajor) {
          const majorGameId = matchingGameMajor.id;
          await customFetch.post(`/sports-caa-seats/${majorGameId}/decrement`) 
      } else {
          console.log("Major Game id not found");
      }

      if (matchingGameMinor) {
        const minorGameId = matchingGameMinor.id;
        await customFetch.post(`/sports-caa-seats/${minorGameId}/decrement`) 
      } else {
          console.log("Minor Game id not found");
      }

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
          <Grid item xs={6}>
              <StyledSelectWrapper>
                <Typography variant="subtitle1">CCA Sports</Typography>
                <Select
                  name="cca_sports"
                  value={formData.cca_sports || ''}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                >
                  {category? category.map((item) => (
                <MenuItem key={item} value={item}>
                    {item}
                </MenuItem>
                 )) : null}
                </Select>
              </StyledSelectWrapper>
            </Grid>
            <Grid item xs={6}>
              <StyledSelectWrapper>
                <Typography variant="subtitle1">ECA Sports</Typography>
                <Select
                  name="eca_sports"
                  value={formData.eca_sports  || ''}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                >
                  {eca ? eca.map((item) => (
                <MenuItem key={item} value={item}>
                    {item}
                </MenuItem>
                 )) : null}
                </Select>
              </StyledSelectWrapper>
            </Grid>
            <Grid item xs={6}>
              <StyledSelectWrapper>
                <Typography variant="subtitle1">Major Game</Typography>
                <Select
                  name="major_game"
                  value={formData.major_game  || ''}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                >
                 {major ? major.filter((item) => {
                // Find matching seat information
                const matchingSeat = seats.find(seat => seat.id === item.id); 
                return matchingSeat && matchingSeat.total_available_seats > 0; 
            }).map((item) => (
                <MenuItem key={item.id} value={item.name}> 
                    {item.name}
                </MenuItem> 
            )) : null}
                </Select>
              </StyledSelectWrapper>
            </Grid>
            <Grid item xs={6}>
              <StyledSelectWrapper>
                <Typography variant="subtitle1">Minor Game</Typography>
                <Select
                  name="minor_game"
                  value={formData.minor_game  || ''}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                >
                  {minor ? minor.filter((item) => {
                // Find matching seat information
                const matchingSeat = seats.find(seat => seat.id === item.id); 
                return matchingSeat && matchingSeat.total_available_seats > 0; 
            }).map((item) => (
                <MenuItem key={item.id} value={item.name}> 
                    {item.name}
                </MenuItem> 
            )) : null}
                </Select>
              </StyledSelectWrapper>
            </Grid>
        </Grid>

  );
};

export default AddCcaEca;
