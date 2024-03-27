import { useLoaderData, useNavigate } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData();
    const {name ,phone , website} = user;
    const navigate = useNavigate()

    const handleGoBack = () => {
            navigate(-1)
    }

    return (
        <div>
            <h1>user details of : {name}</h1>
            <p>Phone : {phone}</p>
            <p>Website : {website}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div> 
    );
};

export default UserDetails;