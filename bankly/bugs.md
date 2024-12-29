1 - App.js contains a duplicate "module.exports = app;" 

2 - data.sql - Added a method to createdb bankly. We get errors when trying to run data.sql in Terminal because there is no direction to create the bankly database if it does not exist already.

3 - helpers/createToken.js - createToken lacked a way of checking if the payload fails. Added a way to check that.

4 - helpers/partialUpdate.js - Added a check if sqlForPartialUpdate fails

5 - In middleware/auth.js - There is an unnecessary use of defining a status error with "err.status = 401". I removed this as we are working with authorization through JSON web tokens. If the credentials do not match, we would automatically receive an Unauthorized access error.

6 - models/user.js - Added a try/catch to authenticate to catch errors. Also removed info from getAll(), which is now unnecessary as the info is accounted for in previous checked in the Model.

7 - routes/auth.js - Added an ExpressError to ('/login') as it lacked a way to check if the username is valid.