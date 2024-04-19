import { Link, Form, redirect, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { toast } from 'react-toastify';

export const action =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      // await customFetch.post('/auth/login', data);
      console.log(data);
      queryClient.invalidateQueries();
      toast.success('Login successful');
      return redirect('/dashboard');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };

const Login = () => {
  const navigation =useNavigation();
  console.log(navigation);
  const isSubmitting = navigation.state==='submitting';
  return (
    <Wrapper>
      <Form method='post' className='form'>
        <h4>login</h4>
        <input type='email' name='email' />
        <input type='password' name='registered_mobile_no' />
        <input type='password' name='password' />
        <button type='submit' disabled={isSubmitting}>{isSubmitting?'submitting....':'submit'}</button>
        <p>
          Not a member yet?
          <Link to='/register' className='member-btn'>
            Register
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Login;
