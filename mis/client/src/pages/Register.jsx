import { Form,redirect,useNavigation, Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    // await customFetch.post('/auth/register', data);
    console.log(data);
    toast.success('Registration successful');
    return redirect('/Login');
  } catch (error) {
    toast.error(error?.response?.data?.msg);

    return error;
  }
};

const Register = () => {
  const navigation =useNavigation();
  console.log(navigation);
  const isSubmitting = navigation.state==='submitting';
  return (
    <Wrapper>
      <Form method='post' className='form'>
        <h4>Register</h4>
        <input type='text' name='name' placeholder='Name' defaultValue='John' />
        <input type='text' name='lastName' placeholder='Last Name' defaultValue='Doe' />
        <input type='text' name='location' placeholder='Location' defaultValue='New York' />
        <input type='email' name='email' placeholder='Email' defaultValue='example@example.com' />
        <input type='password' name='password' placeholder='Password' defaultValue='password123' />
        <button type='submit' disabled={isSubmitting}>{isSubmitting?'submitting....':'submit'}</button>
        <p>
          Already a member?
          <Link to='/Login' className='member-btn'>
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Register;
