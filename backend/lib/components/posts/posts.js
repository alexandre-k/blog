import { posts } from '../../database';

export function getPosts(request, reply) {
    posts.view('posts', 'all', (err, body) => {
        if (err) throw err;
        return reply({data: body.rows});
    });
}

export function getPost(request, reply) {
    console.log(request.params.id);
    posts.get(request.params.id, (err, body) => {
        if (err) throw err;
        return reply({data: body})
            .header('Authorization', request.headers.authorization);
    });
}

