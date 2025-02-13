import styled from "styled-components";
import Card from "./Card/Works_card";

const cardData = [
    { img: "./assets/icons/Shapes.svg", title: "Initial Contact", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    { img: "./assets/icons/Shapes2.svg", title: "Discovery Session", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    { img: "./assets/icons/Shapes3.svg", title: "Contracting", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    { img: "./assets/icons/Shapes4.svg", title: "Fast Prototyping", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    { img: "./assets/icons/Shapes5.svg", title: "Design Phaset", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
    { img: "./assets/icons/Shapes6.svg", title: "Develop & Launch", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
]

const Section = styled.section`
    position: relative;
    padding: 80px 0 0 0;
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 16px;
    }
    h2{
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

        @media (max-width: 320px) {
            font-size: 28px;
            line-height: 42px;
        }
    }
    .p{
        width: 60%;
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        letter-spacing: -0.25px;
        text-align: center;
        color: #666666;
        @media (max-width: 600px) {
            width: 80%;
            font-size: 18px;
            line-height: 28px;
        }

        @media (max-width: 320px) {
            width: 90%;
            font-size: 16px;
            line-height: 24px;
        }
    }
    .cards{
        margin-top: 68px;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 24px;
        padding: 0 40px 70px 40px;

        @media (max-width: 820px) { 
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }

        @media (max-width: 710px) { 
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        }

        @media (max-width: 300px) { 
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        }
    }

     &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%; 
    background-color: #191919;
    z-index: -1; 

    @media (max-width: 1100px) { 
        height: 60%; 
    }
  }
`


function Works() {
    return (
        <Section>
            <div className="container">
                <h2>How Simple works</h2>
                <p className="p">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
                <div className="cards">
                    {
                        cardData.map((item, index) => (
                            <Card
                            key={index}
                            img={item.img} 
                            title={item.title} 
                            description={item.description}
                            />
                        ))
                    }
                </div>
            </div>
        </Section>
    )
}

export default Works