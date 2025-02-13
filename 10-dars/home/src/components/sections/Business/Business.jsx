import { useEffect, useState } from "react";
import styled from "styled-components";

const Section = styled.section`
  overflow: hidden;
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0 80px 80px 80px;

  @media (max-width: 600px) {
    padding: 0 20px 80px 20px;
  }
  .container {
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
    gap: 16px;
    background-color: #191919;
    border-radius: 5px;
    @media (max-width: 1100px) {
        height: 385px;
    }
    @media (max-width: 960px) {
      height: 358px;
    }
      @media (max-width: 600px) {
        height: 400px;
      }
      @media (max-width: 285px) {
        height: 450px;
      }
  }
  img {
    margin-top: 10px;
    width: 450px;
    height: auto;
    @media (max-width: 1100px) {
      position: absolute;
      right: 80px;
      margin-top: 40px;
    }
    @media (max-width: 960px) {
      right: 80px;
      margin-top: 90px;
      width: 350px;
      z-index: 1;
    }
    @media (max-width: 600px) {
      margin-top: 130px;
      right: 20px;  
    }
    @media (max-width: 400px) {
      display: none;
    } 
  }
`;

const Text = styled.div`
  padding: 60px 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 16px;
  z-index: 2;
  @media (max-width: 600px) {
    padding: 40px 20px;
  }
    @media (max-width: 330px) {
      padding: 20px;
    }
  h2 {
    font-weight: 700;
    font-size: 32px;
    line-height: 42px;
    letter-spacing: -0.25px;
    color: #ffffff;

    @media (max-width: 600px) {
      font-size: 28px;
      line-height: 36px;
    }
  }
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: -0.25px;
    color: #d6d6d6;

    @media (max-width: 600px) {
      font-size: 16px;
      line-height: 24px;
    }
  }
  label {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: start;
    gap: 8px;

    @media (max-width: 600px) {
      flex-direction: column;
    }
    input {
      width: 70%;
      padding: 12px 34px 12px 16px;
      border: 1px solid #4c4c4c;
      border-radius: 5px;
      background-color: #333333;
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      letter-spacing: 0px;
      color: #ffffff;
      @media (max-width: 600px) {
        width: 100%;
      }

      &:focus {
        border: 1px solid #0070f4;
      }
    }
    button {
      width: calc(30% - 8px);
      padding: 12px 0;
      border-radius: 5px;
      background-color: #0070f4;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #ffffff;
      box-shadow: 0px 10px 15px -3px #19202c29;

      @media (max-width: 600px) {
        width: 100%;
      }
    }
  }
  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0px;
    color: #999999;
  }
`;

const Cricle = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateX(-50%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(180deg, #ffffff 0%, #eaeaea 77.4%, #dfdfdf 100%);
  z-index: -1;
`;
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;

  .modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    background: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  button {
    padding: 8px 20px;
    border-radius: 5px;
    margin-top: 12px;
    background-color: #0070f4;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    box-shadow: 0px 10px 15px -3px #19202c29;
  }
`;

const Business = () => {
    const [email, setEmail] = useState('');
    const [enteredEmail, setEnteredEmail] = useState(''); 
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleButtonClick = () => {
        if (email.trim() !== '') {
            setEnteredEmail(email);  
            setEmail('');            
            setIsModalOpen(true);    
        } else {
            alert('Iltimos, emailingizni kiriting!');
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isModalOpen]);

    return (
        <Section>
            <div className="container">
                <Cricle></Cricle>
                <Text>
                    <h2>Powering your business</h2>
                    <p className="p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit nemo
                        expedita voluptas culpa sapiente.
                    </p>
                    <label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button onClick={handleButtonClick}>Start free trial</button>
                    </label>
                    <span>7 days free trial. No credit card required.</span>
                </Text>
                <img src="./assets/images/Group.png" alt="" />
                {isModalOpen && (
                    <Modal onClick={closeModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <h3>Sizning emailingiz</h3>
                            <a href="email">{enteredEmail}</a>
                            <button onClick={closeModal}>Close</button>
                        </div>
                    </Modal>
                )}
            </div>
        </Section>
    );
};

export default Business;
