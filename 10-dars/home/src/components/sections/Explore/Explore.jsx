import styled from "styled-components"
import Card from "./Card/Card"

const card = [
    {
        title: "Building the Simple ecosystem",
        description: "Take collaboration to the next level with security and administrative features built for teams.",
        image: "./assets/icons/Path2.svg"
    },
    {
        title: "Building the Simple ecosystem",
        description: "Take collaboration to the next level with security and administrative features built for teams.",
        image: "./assets/icons/Path3.svg"
    },
    {
        title: "Building the Simple ecosystem",
        description: "Take collaboration to the next level with security and administrative features built for teams.",
        image: "./assets/icons/Path4.svg"
    },
]

const Section = styled.section`
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 12px;
    }
    position: relative;
    margin-top: 70px;
    padding: 80px 10px 20px 10px;   
    background: linear-gradient(180deg, #FBFBFB 0%, #FBFBFB 100%);

`
const Line = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
    border-radius: 5px;   
    width: 80px;
    height: 2px;
    background: #EAEAEA;
    margin-bottom: 30px;
`
const H2 = styled.h2`
    font-weight: 800;
    font-size: 42px;
    line-height: 52px;
    letter-spacing: -0.5px;
    text-align: center;
    color: #191919;

    @media (max-width: 600px) {
        font-size: 36px;
        line-height: 46px;
    }
        @media (max-width: 450px) {
            font-size: 28px;
            line-height: 38px;
        }
`
const P2 = styled.p`
    width: 60%;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: -0.25px;
    text-align: center;
    color: #666666;

    @media (max-width: 750px) {
        width: 100%;
    }
        @media (max-width: 600px) {
            font-size: 18px;
            line-height: 28px;
        }
        @media (max-width: 450px) {
            font-size: 16px;
            line-height: 26px;
        }
`
const Content = styled.div`
    width: 100%;
    padding: 0 20px;
    margin-top: 68px;
    display: flex;
    align-items: start;
    text-align: start;
    justify-content: space-between;
    gap: 20px;

    @media (max-width: 750px) {
        flex-direction: column;
    }
`
const Text = styled.div`
    width: calc(50% - 40px);
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    text-align: left;
    gap: 20px;

    @media (max-width: 850px) {
        width: calc(50% - 20px);
    }
        @media (max-width: 750px) {
        width: 100%;
        gap: 10px;
    }

    h2{
        font-weight: 700;
        font-size: 30px;
        line-height: 42px;
        letter-spacing: -0.25px;
        color: #191919;

        @media (max-width: 1000px) {
            font-size: 26px;
            line-height: 36px;
        }
            @media (max-width: 450px) {
                font-size: 22px;
                line-height: 32px;
            }
    }
    p{
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        letter-spacing: -0.25px;
        color: #666666;

        @media (max-width: 1000px) {
            font-size: 16px;
            line-height: 26px;
        }
            @media (max-width: 450px) {
                font-size: 14px;
                line-height: 24px;
                margin-bottom: 20px;
            }
    }
    .cards{
        width: 100%;
        display:flex;
        flex-direction: column;
        gap: 20px;
    }
`
const Img = styled.div` 
    position: relative;
    width: calc(50% - 40px);
    @media (max-width: 750px) {
        width: 100%;
    }
        @media (max-width: 340px) {
            display: none;
        }

    .Code{
        padding: 20px;
        width: 100%;
        height: 410px;
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 20px;
        background-color: #191919;
        border-radius: 5px;

        .text{
            width: 60%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 20px;

            p{
                font-weight: 500;
                font-size: 14px;
                line-height: 22px;
                letter-spacing: 0px;
                color: #DFDFDF;
            }
            div {
                display: flex;
                align-items: center;
                gap: 10px;
                span{
                    width: 9px;
                    height: 9px;
                    border-radius: 50%;
                    background: #999999A3;

                }
            }
        }
        .Code2{
            font-family: Courier;
            font-weight: 400;
            font-size: 14px;
            line-height: 22px;
            letter-spacing: 0px;
            color: #999999;

            @media (max-width: 390px) {
                font-size: 12px;
                line-height: 20px;
            }

            strong{
                color: #ffffff99;
            }
        }
    }
    img{
        position: absolute;
        bottom: -100px;
        left: 20px;
        width: 80%;
        height: auto;

        @media (max-width: 1100px) {
            bottom: -60px;
        }
            @media (max-width: 850px) {
            bottom: -40px;
            width: 95%;
            }
                @media (max-width: 750px) {
                    width: 70%;
                    bottom: -100px;
                }
                    @media (max-width: 660px) {
                        bottom: -50px;
                    }
                        @media (max-width: 550px) {
                            width: 95%;
                            bottom: -70px;
                        }
                            @media (max-width: 390px) {
                                bottom: -40px;
                            }
    }
`

function Explore() {
    return (
        <Section>
            <div className="container">
                <Line></Line>
                <H2>Explore the solutions</H2>
                <P2>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</P2>
                <Content>
                    <Text>
                        <h2>Powerful suite of tools</h2>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
                        <div className="cards">
                            {
                                card.map((item, index) => (
                                    <Card
                                        key={index}
                                        title={item.title}
                                        description={item.description}
                                        image={item.image}
                                    />
                                ))
                            }
                        </div>
                    </Text>
                    <Img>
                        <div className="Code">
                            <div className="text">
                                <div>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <p>Simple_Project</p>
                            </div>
                            <p className="Code2"><strong>npm login</strong> --registry=https://npm.pkg.github.com <br /> --scope=@phanatic <br />
                            Successfully logged-in.</p>
                        </div>
                        <img src="./assets/images/Explore.png" alt="" />
                    </Img>
                </Content>
            </div>
        </Section>
    )
}

export default Explore