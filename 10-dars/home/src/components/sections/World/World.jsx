import styled from "styled-components"

const Section = styled.section`
    overflow: hidden;
    position: relative;
    padding: 80px 100px;

    @media (max-width: 850px) {
        padding: 80px 80px;
    }
        @media (max-width: 780px) {
            padding: 80px 20px;
        }
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 16px;
    }
        span{
            position: absolute;
            width: 80px;
            height: 2px;
            top: 0px;
            left: 50%;
            transform: translateX(-50%) rotate(90deg);
            background-color: #EAEAEA;
            z-index: 10;
        }
    h2{
        width: 65%;    
        font-weight: 800;
        font-size: 42px;
        line-height: 52px;
        letter-spacing: -0.5px;
        text-align: center;
        color: #191919;
        @media (max-width: 1100px) {
            width: 100%;
        }
            @media (max-width: 600px) {
                font-size: 32px;
                line-height: 42px;
            }
                @media (max-width: 350px) {
                    font-size: 28px;
                    line-height: 36px;
                }
    }
    .p{
        width: 65%;
        font-weight: 400;    
        font-size: 20px;
        line-height: 30px;
        letter-spacing: -0.25px;
        text-align: center;
        color: #666666;
        @media (max-width: 940px) {
            width: 100%;
        }
            @media (max-width: 600px) {
                font-size: 16px;
                line-height: 24px;
            }
                @media (max-width: 350px) {
                    font-size: 14px;
                    line-height: 22px;
                }
    }
`
const Image = styled.div`
    margin-top: 68px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    @media (max-width: 680px) {
        flex-wrap: wrap;
    }

    img{
        width: 120px;
        height: 43px;
        
         &:nth-child(1){ 
             width: 123px;
             height: 23px;
         }
         &:nth-child(2){
             width: 83px;
             height: 30px;
         }
         &:nth-child(3){
             width: 125px;
             height: 39px;
         }
         &:nth-child(4){ 
             width: 113px;
             height: 30px;
         }
         &:nth-child(5){ 
             width: 108px;
             height: 32px;
         }  
    }
    
`
const User = styled.div`   
    position: relative;
    width: 90%; 
    margin-top: 68px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 84px 52px 34px 52px;
    border-radius: 5px;
    border: 2px solid #EAEAEA;
    @media (max-width: 900px) {
        width: 100%;
    }
        @media (max-width: 660px) {
            padding: 84px 20px 34px 20px;
        }
    .users_img{
        position: absolute;
        top: -18%;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        img{
            &:nth-child(1){ 
                width: 96px;
                height: 96px;
                z-index: 1;
            }
            &:nth-child(2){
                position: absolute;
                left: 80%;
                top: 5px;
                width: 45px;
                height: 47px;
            }
        }
    }
    p{
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
        letter-spacing: -0.25px;
        text-align: center;
        color: #191919;

        @media (max-width: 500px) {
            font-size: 16px;
            line-height: 24px;
        }
    }
    b{
        margin-top: 12px;
        font-weight: 700;
        font-size: 18px;
        line-height: 29px;
        letter-spacing: -0.25px;
        text-align: center;
        color: #191919;
    }
        h4{
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: -0.25px;
            text-align: center;
            color: #666666;
        }
`
const Cricle = styled.div`
    position: absolute;
    top: 55%;
    right: -25%;
    transform: translateX(-50%);
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background: linear-gradient(180deg, #FFFFFF 0%, #EAEAEA 77.4%, #DFDFDF 100%);

    @media (max-width: 500px) { 
        display: none;
    }
`

function World() {
  return (
    <Section>
        <div className="container">
            <span></span>
            <Cricle></Cricle>
            <h2>Trusted by over 20,000 companies all over the world</h2>
            <p className="p">Arcu cursus vitae congue mauris rhoncus viverra nibh cras pulvinar mattis blandit libero cursus mattis.</p>
            <Image>
                <img src="./assets/images/Shape.png" alt="" />
                <img src="./assets/images/Shape2.png" alt="" />
                <img src="./assets/images/Shape3.png" alt="" />
                <img src="./assets/images/Shape4.png" alt="" />
                <img src="./assets/images/Shape5.png" alt="" />
            </Image>
            <User>
                <div className="users_img">
                    <img src="./assets/images/Rectangle.png" alt="" />
                    <img src="./assets/icons/Qoshtirnoq.svg" alt="" />
                </div>
                <p>“ I love this product and would recommend it to anyone. Could be not easier to use, and our multiple websites are wonderful. We get nice comments all the time. “</p>
                <b>Darya Finger</b>
                <h4>CEO & Co-Founder <a href="@">@Dropbox</a></h4>
            </User>
        </div>
    </Section>
  )
}

export default World