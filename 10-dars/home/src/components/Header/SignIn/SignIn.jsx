// SignIn.jsx
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  min-height: calc(100vh - 80px);
  background: #FFFFFF;
  padding: 0 20px 20px 20px;

  h2 {
      width: 60%;
      font-weight: 800;
      font-size: 40px;
      line-height: 42px;
      letter-spacing: -0.5px;
      text-align: center;
      color: #191919;

      @media (max-width: 970px) {
        font-size: 36px;
        line-height: 38px;
        width: 70%;
      }

      @media (max-width: 840px) {
        font-size: 32px;
        line-height: 36px;
        width: 80%;
      }
        @media (max-width: 600px) {
        font-size: 24px;
        line-height: 28px;
        width: 100%;
      }
  }
`;

const Form = styled.form`
  background: transparent;
  width: 100%;
  max-width: 400px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 16px;
 
`;
const Div = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.label`
  display: block;
  text-align: left;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0px;
  color: #333333;
  cursor: pointer;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #DFDFDF;
  border-radius: 2px;

  &::placeholder {
    color: #7F7F7F;
  }
`;

const Check = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  input[type="checkbox"] {
    width: 16px;
    height: 16px;
    cursor: pointer;
    appearance: none; 
    border: 1px solid #DFDFDF;
    position: relative;
    outline: none;
    transition: all 0.3s ease;
    background-color: white; 

    &:checked {
      background-color: white; 
    }

    &:checked::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 8px;   
      height: 8px;
      background-color: blue; 
    }
  }

  label {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0px;
    color: #7F7F7F;
    transition: color 0.3s ease;
    cursor: pointer;
  }

  input[type="checkbox"]:checked + label {
    color: #191919; 
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background: #0070F4;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background: #0059b3;
  }
`;

const Divider = styled.div`
  width: 100%;
  margin: 4px 0;
  text-align: center;
  position: relative;
  color:#666666;
  font-style: italic;

  &::before,
  &::after {
    content: "";
    height: 1px;
    background: #ccc;
    position: absolute;
    top: 50%;
    width: 45%;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`;
const TroubleLink = styled(Link)`
  position: absolute;
  right: 0;
  font-weight: 500;
  font-size: 13px;
  line-height: 22px;
  letter-spacing: 0px;
  color: #0070F4;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialButton = styled(Button)`
  position: relative;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.25px;
  color: #FFFFFF;
  box-shadow: 0px 1px 3px 0px #19191929;
  background: ${(props) => (props.github ? "#191919" : "#E53E3E")};

  &:hover {
    background: ${(props) => (props.github ? "#333" : "#e74a4a")};
  }
    img {
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
    }
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.25px;
    text-align: center;
    color: #666666;
`

function SignIn() {
  return (
    <Container>
      <h2> Welcome back. We exist to make entrepreneurship easier</h2>
      <Form>
        <Div>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Enter your email address" required />
        </Div>
        <Div>
          <Label htmlFor="password">Password</Label>
          <TroubleLink to="/forgot-password">Having trouble signing in?</TroubleLink>
          <Input type="password" id="password" placeholder="Enter your password" required />
        </Div>
        <Check>
          <input type="checkbox" name="remember" id="check"/>
          <label htmlFor="check">Remember this device</label>
        </Check>
        <Button type="submit">Sign In</Button>
        <Divider>Or</Divider>
        <SocialButton github> <img src="./assets/icons/Path7.svg" alt="GitHub Logo" /> Continue with GitHub </SocialButton>
        <SocialButton> <img src="./assets/icons/Path6.svg" alt="Google Logo" /> Continue with Google </SocialButton>
      </Form>
      <Links>
        Don't have an account? <Link to="/signup" style={{ color: "#0070F4" }}>Sign up</Link>
      </Links>
    </Container>
  );
}

export default SignIn;
