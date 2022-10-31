import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import InputUnstyled from '@mui/base/InputUnstyled';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import _ from 'lodash';

const Search = () => {
    const navigate = useNavigate();

    const [members, setMembers] = useState();
    const [filteredMembers, setFilteredMembers] = useState();
    const [search, setSearch] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=50")
        .then((response) => response.json())
        .then((response) => setMembers(response.results))
    }, [])

    useEffect(() => {
        if (members) setLoading(true)
    }, [members])

    const filterMembers = (searchVal) => {
        setFilteredMembers(members.filter((member) => {
            const fullName = `${member.name.first} ${member.name.last}`;

            if (member === '') {
                return member
            } else if (member.name.first.toLowerCase().includes(searchVal.toLowerCase()) || member.name.last.toLowerCase().includes(searchVal.toLowerCase())) {
                return member
            } else if (fullName.toLowerCase().includes(searchVal.toLowerCase())) {
                return member
            }
        }))
    }

    return (
        <AppBody>
            <InputUnstyled placeholder="Search..." value={search} onChange={(e) => {
                setSearch(e.target.value)
                _.debounce(filterMembers(e.target.value), 1000)
                }}/>
            {!loading ? 
                <h3>Loading...</h3>
                :
                <CardsContainer>
                {!filteredMembers
                    ? members.map(member => (
                        <Card sx={{ width: 200, textAlign: 'center', margin: '15px 5px', bgcolor: '#282c34', color: '#fff', padding: '10px 0' }} key={member.login.uuid}>
                            <MemberImage src={member.picture.thumbnail} />
                            <h4>{member.name.first} {member.name.last}</h4>
                            <p>Age: {member.dob.age}</p>
                            <Button variant="outlined" onClick={() => navigate(`/member/${member.login.uuid}`)}>View Profile</Button>
                        </Card>
                    ))
                    : filteredMembers.map(member => (
                        <Card sx={{ width: 200, textAlign: 'center', margin: '15px 5px', bgcolor: '#282c34', color: '#fff', padding: '10px 0' }} key={member.login.uuid}>
                            <MemberImage src={member.picture.medium} />
                            <h4>{member.name.first} {member.name.last}</h4>
                            <p>Age: {member.dob.age}</p>
                            <Button variant="outlined" onClick={() => navigate(`/member/${member.login.uuid}`)}>View Profile</Button>
                        </Card>
                    ))
                    }
                </CardsContainer>
            }
        </AppBody>
    )
}

const AppBody = styled.div({
    height: '100%',
    padding: '5% 20%',
    background: '#fff',
    color: '#000'
})

const CardsContainer = styled.div({
    marginTop: 30,
    display: 'flex',
    justifyContent: 'space-evenly',
    flexFlow: 'row wrap',
})

const MemberImage = styled.img({
  borderRadius: '50%',
  border: 'solid 2px #fff',
})

export default Search