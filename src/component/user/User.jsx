import { Link, useNavigate } from 'react-router-dom';
import './User.css'

const User = ({user}) => {

    const navigate = useNavigate()

    const {id, name, address, email,phone,website} = user

    const handleShowDetails = () =>{
        navigate(`/users/${id}`)
    }

    return (
        <div className="user">
            <h5>Name : {name}</h5>
            <h4>Email : {email}</h4>
            <h4>phone : {phone}</h4>
            <h4>Website : {website}</h4>
            <Link to={`/users/${id}`}>Show Details  </Link>
            <button onClick={handleShowDetails}>Show detail</button>
        </div>
    );
};

export default User;