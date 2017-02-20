import { users } from '../../database';


export function verifyCredentials(request, reply) {
    const { username, password } = request.query;
    users.view('users', 'by_user', { q: username }, (err, doc) => {
        if (!err) return reply({authenticated: is_authenticated(doc, username, password)});
    });
}

function is_authenticated(doc, username, password) {
    return doc.rows[0].value.username === username && doc.rows[0].value.password === password;
}
