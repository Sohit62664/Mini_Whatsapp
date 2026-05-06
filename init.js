const mongoose = require("mongoose");
const chat = require("./models/chat");


main().then(() => {
    console.log("connection Successfull");
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let All_Chats = [
  {
    from: "Neha",
    to: "Meena",
    msg: "Send me your notes",
    created_at: new Date()
  },
  {
    from: "Rahul",
    to: "Amit",
    msg: "Did you complete the assignment?",
    created_at: new Date(Date.now() - 1000 * 60 * 5) // 5 min ago
  },
  {
    from: "Priya",
    to: "Neha",
    msg: "Let's meet after class",
    created_at: new Date(Date.now() - 1000 * 60 * 30) // 30 min ago
  },
  {
    from: "Amit",
    to: "Rahul",
    msg: "Yes, I will send it tonight",
    created_at: new Date(Date.now() - 1000 * 60 * 60) // 1 hr ago
  },
  {
    from: "Meena",
    to: "Neha",
    msg: "Okay, I'll share them soon",
    created_at: new Date(Date.now() - 1000 * 60 * 90)
  },
  {
    from: "Sohit",
    to: "Priya",
    msg: "Have you revised trees in DSA?",
    created_at: new Date(Date.now() - 1000 * 60 * 120)
  },
  {
    from: "Karan",
    to: "Sohit",
    msg: "Bro, let's practice problems on LeetCode",
    created_at: new Date(Date.now() - 1000 * 60 * 180)
  },
  {
    from: "Anjali",
    to: "Karan",
    msg: "Can you explain BFS once?",
    created_at: new Date(Date.now() - 1000 * 60 * 240)
  },
  {
    from: "Vikas",
    to: "Anjali",
    msg: "Sure, I'll call you in the evening",
    created_at: new Date(Date.now() - 1000 * 60 * 300)
  },
  {
    from: "Meena",
    to: "Vikas",
    msg: "Don't forget the lab work submission",
    created_at: new Date(Date.now() - 1000 * 60 * 360)
  }
];

chat.insertMany(All_Chats); 

// chat1.save().then(res => { console.log(res) });