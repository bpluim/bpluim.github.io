import styled from '@emotion/styled';

const MemberProfile = (member) => (
    <div>
        <MemberImage src={member.picture.medium} />
        <h2>{member.name.title} {member.name.first} {member.name.last}</h2>
    </div>
);

const MemberImage = styled.img({
  marginTop: 5,
  borderRadius: '50%',
  border: 'solid 2px #fff',
})

export default MemberProfile;