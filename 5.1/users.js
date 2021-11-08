const fs = require('fs');
const createUser =require('./creatUser.js');
const updateUser =require('./updateUser.js');
const getUser =require('./getUser.js');
const deleteUser = require('./deleteUser.js');

const getAllUsers=()=>{
    return JSON.parse(fs.readFileSync('users.json').toString());
}

    


// console.log(getUser('plg6q5d8kvqhwegd'));

// console.log(getAllUsers());

// updateUser('plg6q8mokvqjbuee','kablan2','kablan2@gmail.com');


// console.log(getAllUsers());


// deleteUser('plg6q5d8kvqhwegd');