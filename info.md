For adding a user in json file, 

```Javascript
let newUser = new user(time);  // Time: time at which user want to mark their attendence
newUser.link() // pass it the link of google form
newUser.name() //pass name of user
newUser.email() //pass email which will be used at the time filling
newUser.group() //pas user's group
newUser.rollno() //pass user's roll number
newUser.cookie() //pass user's cookie
newUser.date() //pass date
// above are the function which will create a new user for adding it to json file
newUser.add();
```