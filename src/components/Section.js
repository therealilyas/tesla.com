import React from 'react'
import styled from 'styled-components'

function Section({title, description,leftBtnText,rightBtnText,backgroundIMg}) {
    // console.log(props)
    return (
        <Wrap bgImage={backgroundIMg}>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
            <Buttons>
                <ButtonGroup>
                    <LeftButton>
                        {leftBtnText}
                    </LeftButton>
                    {rightBtnText &&
                        <RightButton>
                            {rightBtnText}
                        </RightButton>
                    }
                </ButtonGroup>
                <DownArrow src="/images/down-arrow.svg"/>

            </Buttons>
            
        </Wrap>
    )
}

export default Section

const div = styled.div

const Wrap = div` 
    width:100vw;
    height:100vh;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    background-image: url('/images/model-s.jpg');
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    background-image: ${props => `url("images/${props.bgImage}")`};

`
const ItemText = div`
    padding-top:15vh;
    text-allign:center;
`

const ButtonGroup = div`
    display:flex;
    margin-bottom:30px;
    @media(max-width:768px){
        flex-direction:column;
    }
`

const LeftButton = div`
    background-color:rgba(23,26,32,0.8);
    height:40px;
    width:256px;
    color: white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius: 100px;
    opacity:0.85;
    text-transform: uppercase;
    font-size:12px;
    cursor:pointer;
    margin:8px;
`

const RightButton = styled(LeftButton)`
    background:white;
    opacity:0.65;
    color:black;
`
const img = styled.img
const DownArrow = img`
    height:40px;
    overflow-x:hidden;
    animation: animateDown infinite 1.5s;
`

const Buttons = div``