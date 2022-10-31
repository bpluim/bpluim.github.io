import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';

const MemberCard = (member) => (
    <Card sx={{ width: 200, textAlign: 'center', margin: '15px 5px', bgcolor: '#282c34', color: '#fff' }} key={member.login.uuid}>
        <MemberImage src={member.picture.medium} />
        <p>{member.name.first} {member.name.last}</p>
        <p>Age: {member.dob.age}</p>
        <Link to={`/member/${member.login.uuid}`}>View</Link>
    </Card>
);

const MemberImage = styled.img({
  marginTop: 5,
  borderRadius: '50%',
  border: 'solid 2px #fff',
})

export default MemberCard;