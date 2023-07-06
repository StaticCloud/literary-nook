import styled from 'styled-components'

const HeaderWrapper = styled.header`
    display: flex;
    height: 70px;
    width: 100%;
    position: fixed;
    color: white;
    z-index: 2;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    border-bottom: 1px solid white;

    nav { 
        display: flex;
    }

    nav p {
        font-weight: bold;
        padding: 3px 12px;

        border-left: 2px dotted white;
    }

    nav p:first-child {
        border-left: none;
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