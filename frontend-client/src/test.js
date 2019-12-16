fetch("http://localhost:3000/api/users")
  .then(r => r.json())
  .then(data => {
    console.log(data.users);
  });

let testUser = {
  f_name: "Rick",
  l_name: "Pearse",
  email: "rick@pearse.com",
  address: "6216 Garden Rose Path, Austin, TX 78754",
  balance: 17,
  rating: 4.5,
  pic_link: "https://randomuser.me/api/portraits/men/17.jpg",
  password: "123"
};
const configObject = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  },
  body: JSON.stringify(testUser)
};
fetch("http://localhost:3000/api/users", configObject).then(response =>
  response.json().then(data => {
    console.log(data);
  })
);
