import styled from 'styled-components';
import { Button as MButton } from '@material-ui/core';
import image from '../../assets/mainBackground.png';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${image});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    flex-direction: column;
`;

export const BtnCountainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Button = styled(MButton)`
    width: 550px;
    background: #03BCF1 !important;
    height: 130px;
    margin: 25px !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    border-radius: 27px !important;
`;

export default '';
