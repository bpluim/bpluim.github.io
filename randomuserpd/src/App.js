import styled from '@emotion/styled';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Profile from './pages/Profile';

const App = () => (
    <Router>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
      </Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/member/:id" element={<Profile />} />
        
      </Routes>
    </Router>
);

const Nav = styled.nav({
  height: '100px',
  background: '#282c34',
  padding: '0 20%',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  '& > a': {
    color: '#fff',
    marginRight: 15,
    textDecoration: 'none',
    '&:visited': {
      color: '#fff'
    }
  }
})

export default App;