import React from 'react';
import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

const MemberCard = (props) => {
    const {member} = props;

    return (
        <Card sx={{ width: 200, textAlign: 'center', margin: '15px 5px', bgcolor: '#282c34', color: '#fff' }} key={member.login.uuid}>
            <MemberImage src={member.picture.medium} />
            <p>{member.name.first} {member.name.last}</p>
            <p>Age: {member.dob.age}</p>
            <Button variant="contained" sx={{ marginBottom: '5px' }}>View</Button>
        </Card>
    )
}

const MemberImage = styled.img({
  marginTop: 5,
  borderRadius: '50%',
  border: 'solid 2px #fff',
})

export default MemberCard;