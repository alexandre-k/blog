const axios = require('axios');
const URL = 'http://localhost:3000'

function getPosts() {
    return axios
        .get(URL + '/posts')
        .then((posts) => {
            return posts.data.data;
        })
        .catch((error) => {
            return error;
        })
}

function getPostDetails() {
    return axios
        .get(URL + '/post')
        .then((post) => {
            return post.data.data;
        })
        .catch((error) => {
            return error;
        })
}

export { getPosts, getPostDetails };
