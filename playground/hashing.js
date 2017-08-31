const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const password = '123abc!';

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash);
//     });
// });

const hashedPassword = '$2a$10$D0n0QYbAv2PiUxfWsXCJle/BwLzVqhhbYLpdwoZZGrl8PUqzoy/U.';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
})

// const data = {
//     id: 10
// }

// const token = jwt.sign(data,'123abc');
// console.log(token);
// const decoded = jwt.verify(token, '123abc');
// console.log(decoded);
// // jwt.verify;


// // const message ='This is a message';
// // const hash = SHA256(message).toString();
// // console.log(`Message: ${message}`);
// // console.log(`Hash: ${hash}`);

// // const data = {
// //     id: 4
// // };
// // const token = {
// //     data,
// //     hash: SHA256(JSON.stringify(data)).toString()
// // };
