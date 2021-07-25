import React from 'react';
import styled from 'styled-components';

const cardWidth = 320;
const borderRadius = 8;
const transition = 'all 0.45s ease';

const ExtraContainer = styled.div`
  transition: ${transition}
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Image = styled.figure`
  z-index: 1;
  position: relative;
  margin: 15px;
  width: ${cardWidth}px;
  height: 250px;
  background: url(${(props) => props.image}) no-repeat center ;
  background-size: contain;
  border-radius: ${borderRadius}px ${borderRadius}px 0 0;
  cursor: pointer;
  backface-visibility: hidden;
  transition: ${transition};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0);
    transition: ${transition};

  }
`;

const Content = styled.div`
  z-index: 1;
  position: relative;
  padding: 20px 20px 30px;
`;

const Title = styled.span`
  display: block;
  margin-bottom: 4px;
  font-weight: 400;
  color: #0F1111;
  transition: ${transition};
`;

const Description = styled.span`
  display: block;
  margin: 5px;
  font-size: 1.2em;
  color: #B12704;
  font-weight: 700;
  transition: ${transition};
  transition-delay: 0.04s;
`;

const BottomButton = styled.button`
  cursor: pointer;
  background: #f0c13b;
  border: 1px solid;
  margin-top: 20px;
  border-color: #ad7f14;
  height:30px;
  width: 50%;
  visibility:hidden;
  opacity: 0;
  transition: ${transition};
`;

const Style = styled.span`
  position: relative;
  flex: 1 1; 
  text-align: center;
  background: #ffffff;
  border: none;
  border-radius: ${borderRadius}px;
  box-shadow:  10px 10px rgba(0, 0, 0, 0.12), 0px 20px 20px -10px gray;
  transition: ${transition};

  &:hover {
    transform: scale(1.04);

    ${Title},
    ${Description},
    ${ExtraContainer},
     {
      transform: scale(0.9);
    }

    ${Title} {
      transform: translateY(-10px);
    }

    ${Description} {
      transform: translateY(-12px);
    }

    ${ExtraContainer} {
      transform: translateY(-14px);
    }

    ${BottomButton} {
      visibility: visible;
      opacity: 1;
    }
    

    ${Image} {
      transform: translateY(4px) scale(0.88);
      border-radius: ${borderRadius - 2}px;

      &::before {
        background: rgba(0, 0, 0, 0.07);
      }
    }
  }
`;



const Card = ({ id, title, description, image, button, hideButton, action, extra }) => (
  <Style>
    <ImageContainer>
      <Image image={image} />
    </ImageContainer>
    <Content>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <ExtraContainer>{extra}</ExtraContainer>
      {!hideButton && <BottomButton onClick={action}> {button} </BottomButton>} 
    </Content>
  </Style>
);

export default Card;
