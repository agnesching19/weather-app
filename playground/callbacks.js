const getUser = (id, callback) => {
  let user = {
    id: id,
    name: 'Bob'
  };
  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(27, (userObject) => {
  console.log(userObject);
});
