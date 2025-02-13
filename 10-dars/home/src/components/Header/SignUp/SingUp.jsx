// SignUp.jsx
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
        line-height: 34px;
        width: 80%;
      }
      @media (max-width: 600px) {
        font-size: 28px;
        line-height: 30px;
        width: 90%;
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

  span {
    color: red;
  }
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
const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: center;
  color: #333333;

  a {
    color: #333333;
    text-decoration: underline;
    transition: all 0.3s ease;

    &:hover {
      color: #0070F4;
    }
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

function SignUp() {
  return (
    <Container>
      <h2>Welcome. We exist to make entrepreneurship easier</h2>
      <Form>
        <Div>
          <Label htmlFor="name">Name <span>*</span></Label>
          <Input type="text" id="name" placeholder="Enter your name" required />
        </Div>
        <Div>
          <Label htmlFor="email">Email <span>*</span></Label>
          <Input type="email" id="email" placeholder="Enter your email address" required />
        </Div>
        <Div>
          <Label htmlFor="password">Password <span>*</span></Label>
          <Input type="password" id="password" placeholder="Enter your password" required />
        </Div>
        <Button type="submit">Sign Up</Button>
        <Text>By creating an account, you agree to the <a href="#">terms & conditions</a>, and our <a href="#">privacy policy</a>.</Text>
        <Divider>Or</Divider>
        <SocialButton github> <img src="./assets/icons/Path7.svg" alt="GitHub Logo" /> Continue with GitHub </SocialButton>
        <SocialButton> <img src="./assets/icons/Path6.svg" alt="Google Logo" /> Continue with Google </SocialButton>
      </Form>
        <Links>
          Already have an account? <Link to="/signin" style={{ color: "#0070F4" }}>Sign in</Link>
        </Links>
    </Container>
  );
}

export default SignUp;
