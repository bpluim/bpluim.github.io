import {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import { useParams, Link } from 'react-router-dom';
import { format } from 'date-fns';

const Profile = () => {
    const { id } = useParams();

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch(`https://randomuser.me/api/?uuid=${id}`)
        .then((response) => response.json())
        .then((response) => setUser(response.results[0]))
    }, []);

    useEffect(() => {
        if (user) setLoading(true)
    }, [user]);

    return (
        <AppBody>
            <Link to="/search"><h2> Back to Search</h2></Link>
            <div>
                {!loading 
                    ?   <p>Loading...</p>
                    :   <div>
                            <MemberImage src={user.picture.large} />
                            <h2>Name: {user.name.title} {user.name.first} {user.name.last}</h2>
                            <p>Street: {user.location.street.number} {user.location.street.name}</p>
                            <p>City: {user.location.city}</p>
                            <p>State: {user.location.state}</p>
                            <p>Postcode: {user.location.postcode}</p>
                            <p>Email Address: {user.email}</p>
                            <p>January 1, 2019</p>
                            <p>Date Of Birth: {format(new Date(user.dob.date), 'MMMM dd, yyyy')}</p>
                            <p>Phone Number: {user.phone}</p>
                        </div>
                }
            </div>
        </AppBody>
    )
}

const AppBody = styled.div({
    height: '100%',
    padding: '5% 20%',
    background: '#fff',
    color: '#000'
})

const MemberImage = styled.img({
  marginTop: 5,
  borderRadius: '50%',
  border: 'solid 2px #282c34',
})

export default Profile;