import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const Holder = styled.div`
    margin-top: 8%;
    display: flex;
    flex-direction: row;
`;

export const TextContainer = styled.div`
    margin-left: 80px;
    display: flex;
    height: 350px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`;

export const Image = styled.image`
    height: 350px;
    width: 300px;
    border: 2px solid grey;
`;

export const BtnBorrow = styled(Button)`
    height: 80px;
    background-color: #03BCF1 !important;
    padding: 20px 80px !important;
    border-radius: 10px !important;
    position: absolute !important;
    bottom: 50px !important;
`;
