import { v4 as uuidv4 } from "uuid"
import { useNavigate } from "react-router-dom"

import postData from "./../services/postData"

const Form = () => {

    const navigate = useNavigate();

    const createComment = (ev) => {
        const dataPost = {
            name: user.value,
            comment: comment.value,
            id: uuidv4()
        }
        postData(dataPost)
    }

    return (
        <div className="form">
            <h1>Form</h1>
            <form onSubmit={(ev) => {
                createComment(ev), navigate("/comments")}}>
                <fieldset>
                    <legend>Add Comment</legend>
                    <div>
                        <label htmlFor="user">Name:</label>
                        <input type="text" 
                            id="user"
                            required
                            />
                    </div>
                    <div>
                        <label htmlFor="comment">Comment:</label>
                        <textarea type="text" 
                            id="comment"
                            required
                            />
                    </div>
                </fieldset>
                <input type="submit" value="Post" />
            </form>
        </div>
    )
}

export default Form;