const axios = require('axios');
const URL = 'http://localhost:3000'

function getPosts() {
    axios
        .get(URL + '/posts')
        .then((posts) => {
            console.log(posts.data.data)
            return posts.data.data;
        })
        .catch((error) => {
            return error;
        })
}

module.exports = getPosts
