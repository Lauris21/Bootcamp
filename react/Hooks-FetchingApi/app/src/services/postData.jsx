import axios from "axios"

const postData = async (item) => {
    axios({
        method: "post",
        url: "http://localhost:8080/Comments",
        data: item
    })
}

export default postData;