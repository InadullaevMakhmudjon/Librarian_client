// Globally used components
import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

const BtnDesigned = styled(Button)`
    width: 100px;
    height: 80px;
    color: white !important;
    background-color: #03BCF1 !important;
    padding: 20px 80px !important;
    border-radius: 10px !important;
    position: fixed !important;
    bottom: 50px;
    left: 50px;
`;

// eslint-disable-next-line react/prop-types
export const HomeButton = ({ onClick }) => (
  <BtnDesigned onClick={onClick} variant="contained">
    <HomeIcon fontSize="large" />
  </BtnDesigned>
);

export const Container = styled.div`
    left: 0px;
    top: 0px;
    height: 100vh;
    width: 100vw;
    position: absolute;
    display: ${({ flex }) => (flex ? 'flex' : '')};
    justify-content: ${({ center, justify }) => (center ? 'center' : justify)};
    align-items: ${({ center, align }) => (center ? 'center' : align)};
    flex-direction: ${({ column }) => (column ? 'column' : 'row')};
    ${(props) => Object.keys(props).map((key) => `${key}: ${props[key]}`).join(';')}  
`;

export const Text = styled.h1`
     font-size: 42px;
     font-weight: 550;
     text-align: center;
     line-height: 0;
     color: ${({ color }) => color};
     margin-top: ${({ top }) => top};
     margin-bottom: ${({ bottom }) => bottom};
     font-size: ${({ size }) => size};
`;

export const Image = styled.img`
    border: ${({ noBorder }) => (noBorder ? '' : '2px solid grey')};
    ${(props) => Object.keys(props).map((key) => `${key}: ${props[key]}`).join(';')}    
`;

export default '';
