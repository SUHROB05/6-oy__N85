import styled from "styled-components"


const Text = styled.div`
padding: 70px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const H2 = styled.h2`
    font-weight: 800;
    font-size: 84px;
    line-height: 77px;
    text-align: center;
    color: ${(props) => (props.$black ? "#191919" : "transparent")};

    @media (max-width: 850px) {
        font-size: 70px;
        line-height: 70px;
    }

    @media (max-width: 680px) {
        font-size: 60px;
        line-height: 60px;
    }
        @media (max-width: 570px) {
            font-size: 50px;
            line-height: 50px;
        }
            @media (max-width: 490px) {
                font-size: 40px;
                line-height: 40px;
            }
                @media (max-width: 380px) {
                    font-size: 30px;
                    line-height: 30px;
                }

      span {    
       background: linear-gradient(50.9deg, #338CF5 4.9%, #4FD1C5 94.23%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }
`
const P = styled.p`
    width: 50%;
    margin-top: 30px;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: -0.25px;
    text-align: center;
    color: #666666;

    @media (max-width: 850px) {
        width: 80%;
    }
        @media (max-width: 680px) {
            width: 90%;
            font-size: 16px;
            line-height: 24px;
        }
            @media (max-width: 570px) { 
                width: 98%;
                font-size: 14px;
                line-height: 22px;
            }
`
const Btn = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    gap: 20px;
    @media (max-width: 350px) {
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
const Hero_btn = styled.button`
    background: linear-gradient(50.9deg, #338CF5 4.9%, #4FD1C5 94.23%);
    border-radius: 10px;
    color: #ffffff;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: -0.25px;
    padding: 12px 32px;
    background: ${props => (props.$white ? "#0070F4" : "#191919")};
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
    z-index: 2;

    @media (max-width: 570px) {
        font-size: 14px;
        line-height: 20px;
    }
        @media (max-width: 350px) {
            width: 80%;
        }
`
const Content = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 62%;
        height: auto;
        z-index: 1;
        @media (max-width: 900px) {
            width: 70%;
        }
            @media (max-width: 770px) {
                width: 80%;
            }
                @media (max-width: 600px) {
                    width: 100%;
                }
    }
`
const Circle1 = styled.div`
    position: absolute;
    top: -25%;
    right: 0;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background: linear-gradient(180deg, #FFFFFF 0%, #EAEAEA 77.4%, #DFDFDF 100%);

    @media (max-width: 600px) {
        display: none;
    }
`
const Circle2 = styled.div`
    position: absolute;
    bottom: 50px;
    left: 70px;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: linear-gradient(180deg, #FFFFFF 0%, #EAEAEA 77.4%, #DFDFDF 100%);

    @media (max-width: 600px) {
        display: none;
    }
`
const Video = styled.div`
    position: absolute;
    bottom: 7px;
    padding: 16px 20px;
    border-radius: 28px;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-weight: 500;
    font-size: 16px;        
    line-height: 24px;
    letter-spacing: -0.25px;
    color: #191919;
    z-index: 2;
    cursor: pointer;
    box-shadow: 0px 10px 15px -3px #19202C29;

    @media (max-width: 900px) {
        padding: 12px 16px;
        font-size: 14px;
        line-height: 20px;
    }
        @media (max-width: 450px) {
            font-size: 12px;
            line-height: 16px;
            padding: 8px 12px;
        }


    img {
        width: 24px;
        height: 24px;

        @media (max-width: 900px) {
            width: 20px;
            height: 20px;
        }

        @media (max-width: 450px) {
            width: 16px;            
            height: 16px;
        }
    }
`


function Hero() {
    return (
        <section>
            <div className="container">
                <Text>
                    <H2 $black>Make your website <br /> <span>wonderful</span></H2>
                    <P>Our landing page template works on all devices, so you only have to
                        set it up once, and get beautiful results forever.</P>
                    <Btn>
                        <Hero_btn $white>Start free trial</Hero_btn>
                        <Hero_btn>Learn more</Hero_btn>
                    </Btn>
                </Text>
                <Content>
                    <Circle1></Circle1>
                    <Circle2></Circle2>
                    <img src="./assets/images/Illustration.webp" alt="" />
                    <Video>
                        <img src="./assets/icons/video.svg" alt="" />
                        Watch the full video 2 min
                    </Video>
                </Content>
            </div>
        </section>
    )
}

export default Hero