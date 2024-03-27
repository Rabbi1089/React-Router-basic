import './User.css'

const User = ({user}) => {

    const {name, address, email,phone,website} = user

    return (
        <div className="user">
            <h5>Name : {name}</h5>
            <h4>Email : {email}</h4>
            <h4>phone : {phone}</h4>
            <h4>Website : {website}</h4>
        </div>
    );
};

export default User;