import styled from 'styled-components';
import { Button, Card, IconButton } from '@material-ui/core';

export const Header = styled.div`
    height: 200px;
    width: 100vw;
    background-color: #03BCF1;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 20px;
    color: white;
    height: 160px;
    font-weight: 100;
    position: absolute;
    top: 0;
    left: 350px;
`;

export const BookContainer = styled.div`
    width: 95vw;
    height: 50%;
    margin-top: 50px;
`;

export const BtnDone = styled(Button)`
    height: 80px;
    background-color: #03BCF1 !important;
    padding: 20px 80px !important;
    border-radius: 10px !important;
    position: fixed !important;
    bottom: 50px !important;
`;

export const Book = styled(Card)`
    margin: 30px;
    width: 350px;
    box-shadow: 0px 0px 16px rgba(0,0,0,0.2);
    border-radius: 8px;
    border: 0.5px solid rgba(0,0,0,0.3);
    padding: 16px;
    position: absolute;
    display: flex;
    flex-direction: row;
`;

export const BookContents = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    margin-left: 16px;
`;

export const Empty = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


export const BtnRemove = styled(IconButton)`
    position: absolute !important;
    top: 10px !important;
    right: 10px !important;
`;
