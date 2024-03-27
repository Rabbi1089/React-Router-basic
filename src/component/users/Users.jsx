import { useLoaderData } from "react-router-dom";
import User from "../user/User";
import './Users.css'


const Users = () => {

    const users = useLoaderData();
    console.log(users)

    return (
        <div>
            <h1>Users {users.length}</h1>
            
            <div className="users">
                {
                    users.map((user , idx) => <User key={idx} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;