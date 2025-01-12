// let JsonDatabase  = require("./JsonDatabase.js")
import JsonDatabase from "./JsonDatabase.js"

let db = new JsonDatabase(".","users")
// db.create_database()

export default class User{
    constructor(time){
        this.time = time.trim();
    }
    link(link){
        this.link = link.trim();
    }
    name(name){
        this.name = name.trim();
    }
    email(email){
        this.email = email.trim();
    }
    group(group){
        this.group = group.trim();
    }
    rollno(rollno){
        this.rollno = rollno.trim();
    }
    cookie(cookie){
        this.cookie = cookie.trim();
    }
    date(date){
        this.date = date.trim();
    }
    add(){
        let database = db.read_database()
        console.log(database)
        let userAtCurrentTime = database[this.time]
        console.log("user at currrect time:",userAtCurrentTime)
        console.log(typeof userAtCurrentTime);
        try{
        db.insert_into(this.time,[...userAtCurrentTime,[this.link,this.name, this.email, this.group, this.rollno, this.cookie, this.date]]);
        }
        catch(e){
            console.error("Error While adding user to json file, Error is:", e);
        }
    }
    oprations(){

    }
    
}
const oprations = {
    usersAt:(time)=>{
        return db.read_database()[time];
    },
    deleteUser(time, name){
        let database = db.read_database();
        if (!(time&&name)) throw new Error("Wrong parameters passed.");
        let usersAtTime = oprations.usersAt(time);  // Its an array of all the users who want there attendece to be done at some time
        let emptyUserArray=[]; 
        usersAtTime.forEach((user) => {
            let userName = user[1];
            if (userName === name.trim()){  // if matching name is found 
                return;
            }
            else{
                emptyUserArray += user;
            }
        });
        database[time] = emptyUserArray;
        db.write_json(database);
    }
}
// module.exports = User;
//ces
// let u = new User("8:00")
// u.name("baltej");
// u.link('A');
// u.email('b');
// u.group('c');
// u.rollno("d");
// u.cookie("e");
// u.date("f");

// u.add();

// oprations.deleteUser("8:00","baltej");