import { Link, useNavigate } from 'react-router-dom';
import './Post.css'
const Post = ({post}) => {
    const {id , title, body} = post

    const navigate = useNavigate()

    const handleShowDetails = () => {
            navigate(`/post/${id}`)
    }

    return (
        <div className="post">
            <h3>Post id :  {id}</h3>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Show post &nbsp; &nbsp;</Link>
            <button onClick={handleShowDetails}>Show post</button>
        </div>
    );
};

export default Post;