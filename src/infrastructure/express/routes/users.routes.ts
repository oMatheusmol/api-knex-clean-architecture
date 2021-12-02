server.route('/').get((req, res) => {
  db('users')
    .select('*')
    .then(users => {
      return res.send(users);
    });
});
