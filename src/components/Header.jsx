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

    nav { 
        display: flex;
    }

    nav p {
        font-weight: bold;
        padding: 5px;
        margin-right: 10px;
    }

    nav p:first-child {
        border-left: none;
    }
`

const Selected = styled.p`
    position: relative;

    &:before {
        content: 'HOME';
        color: #4a873a;
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;
    }

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        background-color: white;
    }
`;

function Header() {
    return (
        <HeaderWrapper>
            <h1>RETRO CRAWLER</h1>
            <nav>
                <Selected>HOME</Selected>
                <p>ABOUT</p>
                <p>CONTACT</p>
            </nav>
        </HeaderWrapper>
    );
}

export default Header;