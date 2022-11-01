
const CommentsGallery = ({ comment }) => {

    return (
        <div>
            {comment ? (
                comment.map((item) => (
                    <figure key={item.id}>
                        <h3>{item.name}</h3>
                        <p>{item.comment}</p>
                    </figure>
                ))
            ) : (
                <p>Not Found</p>
            )}
        </div>
    )
}

export default CommentsGallery;