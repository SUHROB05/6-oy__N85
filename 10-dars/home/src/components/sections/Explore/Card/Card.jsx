import React from 'react'
import styled from "styled-components"

const Card_content = styled.div`
    border-radius: 5px;
    padding: 20px;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    cursor: pointer;
    border: 1px solid #EAEAEA;
    transition: all 0.3s;

    @media (max-width: 450px) {
        flex-wrap: wrap-reverse;
        justify-content: center;
        text-align: center;
    }

    &:hover{
        box-shadow: 0px 1px 3px 0px #19191929;
        background-color: #EAEAEA;
    }
   
    .card__text{
        display: flex;
        flex-direction: column;
        gap: 4px;
        h3{
            font-weight: 700;
            font-size: 22px;
            line-height: 34px;
            letter-spacing: -0.25px;
            color: #191919;

            @media (max-width: 1000px) {
                font-size: 20px;
                line-height: 30px;
            }
                @media (max-width: 350px) {
                    font-size: 18px;
                    line-height: 28px;
                }
        }
        p{
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: -0.25px;
            color: #666666;

            @media (max-width: 1000px) {
                font-size: 14px;        
            }
                @media (max-width: 350px) {
                    font-size: 12px;
                }
        }
    }
    button{
        box-shadow: 0px 1px 3px 0px #19191929;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 12px;
        border-radius:50%;
        background-color: #FFFFFF;

        img {
            width: 12px;
            height: 12px;
        }
    }   
`

function Card({ title, description, image }) {
    return (
        <>
            <Card_content>
                <div className="card__text">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <button><img src={image} alt="" /></button>
            </Card_content>
        </>
    )
}

export default Card