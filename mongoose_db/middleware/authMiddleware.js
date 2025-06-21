const jwt = require('jsonwebtoken');

JWT_SCRET = "@#$%!123*&456ancmwkirs,alopa";

// Create the token when login or register
const token = jwt.sign("Pavan",JWT_SCRET)

console.log("The token is: "+token);

// Verify the token
const verified = jwt.verify(token, JWT_SCRET);

console.log(verified);
