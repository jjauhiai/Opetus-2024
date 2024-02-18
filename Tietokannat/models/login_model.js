const db = require('../database');

const login={
  checkPassword: function(username, callback) {
      return db.query('SELECT password FROM user WHERE username = ?',[username], callback); 
    }
};
function myAuthorizer(username, password,cb){
    db.query('SELECT password FROM user WHERE username = ?',[username], 
      function(dbError, dbResults, fields) {
        if(dbError){
              response.json(dbError);
            }
        else {
          if (dbResults.length > 0) {
            bcrypt.compare(password,dbResults[0].password, 
              function(err,res) {
                if(res) {
                  console.log("succes");
                  return cb(null, true);
                }
                else {
                  console.log("wrong password");
                  return cb(null, false);
                }			
                response.end();
              }
            );
          }
          else{
            console.log("user does not exists");
            return cb(null, false);
          }
        }
      }
    );
  }
          
module.exports = login;