import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const Home = () => {

    return (
        <AppBody>
            <h1>This home page is just a formality</h1>
            <h3>The search page is where it's at!!</h3>
            <Link to="/search"><SearchIcon fontSize="large"/></Link>
            <p>psst...click on the search icon</p>
        </AppBody>
    )
};

const AppBody = styled.div({
    height: '100%',
    padding: '5% 20%',
    background: '#fff',
    color: '#000',
    textAlign: 'center',
    'a': {
        color: 'red',
        '&:visited': {
            color: 'red'
        }
    }
})

export default Home;