import { useEffect, useState } from "react";

import { getComment } from "./../services/getComment.js"

import CommentsGallery from "./../components/CommentsGallery"

const Comments = () => {

    const [comment, setComment] = useState([])

    useEffect(() => {
        getComment().then((res) => setComment(res))
    }, [])

    return (
        <div className="comments">
            <h1>Comments</h1>
            <CommentsGallery comment={comment}/>
        </div>
    )
}

export default Comments;