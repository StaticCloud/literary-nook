import interior from '../assets/img/interior.jpg';
import styled from 'styled-components'

const Background = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    background-size: cover;
    background-position: center;
    background-image: url(${interior});

    &:after {
        content: ' ';
        display: block;
        position: absolute;
        z-index: 1;
        background-color: #00000077;
        width: 100%;
        height: 100%;
    }
`;

export default function Home() {
    return (
        <Background/>
    );
}