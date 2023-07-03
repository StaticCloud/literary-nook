import styled from 'styled-components'

const HeaderWrapper = styled.header`
    display: flex;
    height: 70px;
    justify-content: space-between;
    align-items: center;
    margin: 0 20px;

    nav { 
        display: flex;
    }

    nav p {
        margin: 0 10px;
    }
`

function Header() {
    return (
        <HeaderWrapper>
            <h1>RETRO CRAWLER</h1>
            <nav>
                <p>HOME</p>
                <p>ABOUT</p>
                <p>CONTACT</p>
            </nav>
        </HeaderWrapper>
    );
}

export default Header;