import axios from "axios"
import { v4 as uuidv4 } from "uuid"

const Form = () => {

    const postComment = async (item) => {
        axios({
            method: "post",
            url: ("http://localhost:8080/Comments/"),
            data: item
    })
    }

    const createComment = (ev) => {
        let dataPost = {
            name: name,
            comment: comment,
            id: uuidv4()
        }
        postComment(dataPost)
       
    }

    return (
        <div className="form">
            <h1>Form</h1>
            <form onSubmit={(ev) =>  createComment(ev.target.value)}>
                <fieldset>
                    <legend>Add Comment</legend>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input type="text" 
                            id="name"
                            required
                            />
                    </div>
                    <div>
                        <label htmlFor="comment">Comment</label>
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
    console.log(post)
}

export default Form;