import { Form, useNavigate, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { toast } from 'react-toastify';
import { Button, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import customFetch from '../utils/customFetch';

const StyledForm = styled(Form)({
  maxWidth: '400px',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '8px',
});

// export const action =
//   (queryClient) =>
//   async ({ request }) => {
//     const formData = await request.formData();
//     const data = Object.fromEntries(formData);
//     try {
//       await customFetch.post('/login', data);
//       console.log(data);
//       queryClient.invalidateQueries();
//       toast.success('Login successful');
//       return redirect('/dashboard');
//     } catch (error) {
//       toast.error(error?.response?.data?.msg);
//       return error;
//     }
//   };

// const Login = () => {
//   const navigation = useNavigation();
//   const isSubmitting = navigation.state === 'submitting';

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const data = Object.fromEntries(formData);

//     try {
//       await customFetch.post('/login', data);
//       console.log(data);
//       localStorage.setItem('user_email', data.registered_email_id);
//       toast.success('Login successful');
//       redirect('/dashboard');
//     } catch (error) {
//       toast.error(error?.response?.data?.msg);
//     }
//   };

const Login = () => {
  const navigation =useNavigation();
  const navigate = useNavigate();
  console.log(navigation);
  const isSubmitting = navigation.state==='submitting';

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    try {
      await customFetch.post('/login', data);
      console.log(data);
      localStorage.setItem('user_email', data.registered_email_id);
      toast.success('Login successful');
      navigate('/AddCcaEca');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };
  return (
    <Wrapper>
      <StyledForm onSubmit={handleSubmit}>
        <Typography variant="h4">Login</Typography>
        <TextField
          type="number"
          name="jee_main_application_no"
          label="JEE Application No"
          fullWidth
          margin="normal"
        />
        <TextField
          type="password"
          name="registered_mob_no"
          label="Registered Mobile No"
          fullWidth
          margin="normal"
        />
        <TextField
          type="email"
          name="registered_email_id"
          label="Email"
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

export default Login;