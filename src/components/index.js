// Globally used components
import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    display: ${({ flex }) => (flex ? 'flex' : '')};
    justify-content: ${({ center, justify }) => (center ? 'center' : justify)};
    align-items: ${({ center, align }) => (center ? 'center' : align)};
    flex-direction: ${({ column }) => (column ? 'column' : 'row')};
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

export const HomeButton = styled(Button)`
    width: 100px;
    height: 80px;
    color: white !important;
    background-color: #03BCF1 !important;
    padding: 20px 80px !important;
    border-radius: 10px !important;
    position: absolute !important;
    bottom: 50px;
    left: 50px;
`;


export default '';
