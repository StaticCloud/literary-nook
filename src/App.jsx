import Header from './components/Header'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import styled from 'styled-components'

const Main = styled.main`
  height: calc(100vh - 70px);
`;

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Main>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
      </Main>
    </BrowserRouter>
  )
}

export default App
