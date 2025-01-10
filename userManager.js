let JsonDatabase  = require("./JsonDatabase.js")

let db = new JsonDatabase(".","users")
// db.create_database()

class user{
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
        // console.log(typeof userAtCurrentTime);
        try{
        db.insert_into(this.time,[...userAtCurrentTime,[this.link,this.name, this.email, this.group, this.rollno, this.cookie, this.date]]);
        }
        catch(e){
            console.error("Error While adding user to json file, Error is:", e);
        }
    }
    
}
const users = {
    at:(time)=>{
        return db.read_database()[time];
    }
}
//ces
let u = new user("8:00")
u.name("baltej");
u.link('A');
u.email('b');
u.group('c');
u.rollno("d");
u.cookie("e");
u.date("f");

u.add();