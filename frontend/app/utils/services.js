const axios = require('axios');
const URL = 'http://localhost:3000'

function getPosts() {
    axios
        .get(URL + '/posts')
        .then((posts) => {
            return posts.data.data;
        })
        .catch((error) => {
            return error;
        })
}

export { getPosts };
