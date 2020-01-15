import styled, { keyframes } from 'styled-components';
import image from '../../assets/waiting.png';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const Waiting = styled.div`
    background-image: url(${image});
    background-repeat: no-repeat;
    background-size: cover;
    width: 400px;
    height: 400px;
    animation: ${rotate} 2s infinite;
`;

export const Holder = styled.div`
    display: flex;
    margin-top: 50px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;
