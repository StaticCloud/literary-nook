import interior from '../assets/img/interior.jpg';
import styled from 'styled-components'

const Background = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-position: center left;
    background-image: url(${interior});

    &:before {
        content: ' ';
        display: block;
        position: absolute;
        z-index: 1;
        background-color: #4a873add;
        width: 100%;
        height: 100%;
    }

    div {
        z-index: 1;
        color: white;
    }

    div h1 {
        font-weight: bold;
    }
`;

export default function Home() {
    return (
        <Background>
            <div>
                <h1>THE PLACE FOR ALL YOUR RETRO GAMING NEEDS</h1>
                <p>WIP DESCRIPTION</p>
            </div>
        </Background>
    );
}