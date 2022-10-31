import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import InputUnstyled from '@mui/base/InputUnstyled';
import MemberCard from './components/MemberCard';
import _ from 'lodash';

function App() {
  const [members, setMembers] = useState();
  const [filteredMembers, setFilteredMembers] = useState();
  const [search, setSearch] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://randomuser.me/api/?md5=29eadab2d7b659eb61d462bfcb4c28dc")
    .then((response) => response.json())
    .then((response) => setMembers(response.results))
  }, [])

  useEffect(() => {
    if (members) setLoading(true)
  }, [members])

  const filterMembers = (searchVal) => {
    setFilteredMembers(members.filter((member) => {
      if (member === '') {
        return member
      } else if (member.name.first.toLowerCase().includes(searchVal.toLowerCase()) || member.name.last.toLowerCase().includes(searchVal.toLowerCase())) {
        return member
      }
    }))
  }

  console.log({members})

  return (
    <AppBody>
      <InputUnstyled placeholder="search" value={search} onChange={(e) => {
        setSearch(e.target.value)
        _.debounce(filterMembers(e.target.value),300)
        }}/>
      {!loading ? 
        <h3>Loading...</h3>
        :
        <CardsContainer>
          {!filteredMembers
            ? members.map(member => <MemberCard member={member} />)
            : filteredMembers.map(member => <MemberCard member={member} />)
            }
        </CardsContainer>
      }
    </AppBody>
  );
}

const AppBody = styled.div({
  height: '100%',
  padding: '10% 20%',
  background: '#fff',
  color: '#000'
})

const CardsContainer = styled.div({
  marginTop: 30,
  display: 'flex',
  justifyContent: 'space-evenly',
  flexFlow: 'row wrap',
})

export default App;
