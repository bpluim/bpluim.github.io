import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import InputUnstyled from '@mui/base/InputUnstyled';
import Card from '@mui/material/Card';

function App() {
  const [members, setMembers] = useState();
  const [search, setSearch] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=20")
    .then((response) => response.json())
    .then((response) => {
      setMembers(response.results)
      setLoading(true);
    })
  }, [])

  console.log({members})

  return (
    <div className="App" style={{height: '100%',background: "282c34"}}>
      <AppBody>
        <InputUnstyled placeholder="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
        {!loading ? 
          <h3>Loading...</h3>
          :
          <CardsContainer>
            {members.map(member => (
              <Card sx={{ width: 200, textAlign: 'center', margin: '15px 5px' }} key={member.login.uuid}>
                <MemberImage src={member.picture.large} />
                <p>{member.name.first} {member.name.last}</p>
                <p>Age: {member.dob.age}</p>
              </Card>
            ))}
          </CardsContainer>
        }
      </AppBody>
    </div>
  );
}

const AppBody = styled.div({
  height: '100%',
  padding: '10% 20%',
  background: '#282c34',
  color: '#fff'
})

const CardsContainer = styled.div({
  marginTop: 30,
  display: 'flex',
  justifyContent: 'space-evenly',
  flexFlow: 'row wrap'
})

const MemberImage = styled.img({
  borderRadius: '50%',
  border: 'solid 2px #282c34',
})

export default App;
