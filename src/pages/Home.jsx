import styled from 'styled-components'

const HomeWrapper = styled.section`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function Home() {
    return (
        <HomeWrapper>
            <div>
                <h1>A PLACE FOR ALL YOUR RETRO GAMING NEEDS</h1>
                <h2>Consoles, games, accessories, and even merch.</h2>
            </div>
        </HomeWrapper>
    );
}