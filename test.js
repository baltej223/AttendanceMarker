const UserManager = require('./userManager.js');

let u = new UserManager("8:00")
u.name("Baltej");
u.link('A');
u.email('b');
u.group('c');
u.rollno("d");
u.cookie("e");
u.date("f");

u.add();

// UserManager.oprations.deleteUser("8:00","baltej");
