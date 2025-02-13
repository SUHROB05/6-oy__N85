import styled from "styled-components";

const Cards = styled.div`
    width: 100%;
    max-width: 420px;
    margin: 0 auto;
    height: auto;
    border-radius: 5px;
    padding: 28px 24px 24px 24px;
    background: linear-gradient(225.78deg, #FBFBFB 0%, #FFFFFF 98.68%);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 4px;
    transition: all 0.3s ease;
    div{
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background-color: #0070F4;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 8px;
    }
    b{
      font-weight: 700;
      font-size: 20px;
      line-height: 30px;
      letter-spacing: -0.25px;
      text-align: center;
      color: #191919;

      @media (max-width: 300px) {
        font-size: 16px;
        line-height: 24px;
      }
    }
    p{
      widht: 100%;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.25px;
      text-align: center;
      color: #666666;

      @media (max-width: 300px) {
        font-size: 12px;
        line-height: 18px;
      }
    }
    &:hover{
      box-shadow: 0px 1px 9px 0px #EAEAEA;
    }
`

function Card({img, title, description}) {
  return (
    <Cards>
      <div>
        <img src={img} alt={title} />
      </div>
      <b>{title}</b>
      <p>{description}</p>
    </Cards>
  )
}

export default Card