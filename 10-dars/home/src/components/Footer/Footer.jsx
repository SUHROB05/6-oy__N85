import styled from "styled-components";

const Footerr = styled.footer`
  padding: 0 0 20px 0;
  .container {
    padding: 50px 20px 0 20px;
    border-top: 1px solid #eaeaea;
    border-radius: 5px;
  }
`;

const Text = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
  }

  .Logo {
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 16px;

    @media (max-width: 768px) {
      width: 100%;
}

    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      letter-spacing: 0px;
      color: #666666;
    }
  }

  .cards_link{
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 20px;

    @media (max-width: 768px) {
      width: 100%;
    }
    @media (max-width: 600px) {
        flex-wrap: wrap;  
    }
    @media (max-width: 330px) {
        flex-direction: column;
    }

     .links {
         width: 20%;
         display: flex;
         flex-direction: column;
         gap: 8px;

         @media (max-width: 600px) {
            width: calc(50% - 20px);
            margin-bottom: 20px;
        }

        @media (max-width: 330px) {
            width: 100%;
        }
    }
    b {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.25px;
      color: #333333;
    }
    a {
      width: fit-content;
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      letter-spacing: 0px;
      color: #666666;

      &:hover {
        text-decoration: underline;
      }
    }
    p {
      width: 100%;
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      letter-spacing: 0px;
      color: #666666;
    }
    label {
      position: relative;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 8px;
      input {
        width: 100%;
        padding: 12px 34px 12px 16px;
        border: 1px solid #eaeaea;
        border-radius: 5px;
        background-color: #ffffff;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        letter-spacing: 0px;
        color: #666666;
      }
      span {
        position: absolute;
        top: 50%;
        right: 23px;
        width: 10%;
        height: 1px;
        background-color: #eaeaea;
        transform: rotate(90deg);
      }
      img {
        position: absolute;
        width: 16px;
        top: 50%;
        right: 12px;
        transform: translateY(-50%);
        cursor: pointer;
      }
    }
  }
  }
`;

const Footer_bottom = styled.div`
  margin-top: 50px;
  width: 100%;
  padding: 30px 0 0 0;
  border-radius: 5px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: 330px) {
    flex-wrap: wrap-reverse;
    align-items: center;
    justify-content: center;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0px;
    color: #666666;

    a {
      color: #338cf5;
    }
  }
  .social {
    display: flex;
    align-items: center;
    gap: 16px;

    a {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      box-shadow: 0px 1px 3px 0px #19191929;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

function Footer() {
  return (
    <Footerr>
      <div className="container">
        <div className="footer__content">
          <Text>
            <div className="Logo">
              <img src="./assets/icons/Logo.svg" alt="" />
              <p>Terms · Privacy Policy</p>
            </div>
            <div className="cards_link">
              <div className="links">
                <b>Products</b>
                <a href="#">Web Studio</a>
                <a href="#">DynamicBox Flex</a>
                <a href="#">Programming Forms</a>
                <a href="#">Integrations</a>
                <a href="#">Command-line</a>
              </div>
              <div className="links">
                <b>Resources</b>
                <a href="#">Documentation</a>
                <a href="#">Tutorials & Guides</a>
                <a href="#">Blog</a>
                <a href="#">Support Center</a>
                <a href="#">Partners</a>
              </div>
              <div className="links">
                <b>Company</b>
                <a href="#">Home</a>
                <a href="#">About us</a>
                <a href="#">Company values</a>
                <a href="#">Pricing</a>
                <a href="#">Privacy Policy</a>
              </div>
              <div className="links">
                <b>Subscribe</b>
                <p>
                  Get the latest news and articles to your inbox every month.
                </p>
                <label htmlFor="">
                  <input type="email" placeholder="Your email" />
                  <span></span>
                  <img src="./assets/icons/Path5.svg" alt="" />
                </label>
              </div>
            </div>
          </Text>
        </div>
        <Footer_bottom>
          <p>
            Made by <a href="/">Cruip</a>. All rights reserved.
          </p>
          <div className="social">
            <a href="https://www.twitter.com">
              <img src="./assets/icons/Twitter.svg" alt="" />
            </a>
            <a href="https://www.github.com">
              <img src="./assets/icons/Github.svg" alt="" />
            </a>
            <a href="https://www.telegram.com">
              <img src="./assets/icons/telegram.svg" alt="" />
            </a>
          </div>
        </Footer_bottom>
      </div>
    </Footerr>
  );
}

export default Footer;
