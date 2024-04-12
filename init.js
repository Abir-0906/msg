const mongoose = require('mongoose');

const Chat=require("./models/chat.js");

main().then(()=>{
    console.log("connection  successful")
})
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

  let chats=[{
    from:"Neha",
    to:"priya",
    message:" you are welcome",
    createdate:new Date()
},
{
    from:"Abir",
    to:"Shudd",
    message:" teach me js",
    createdate:new Date()
},
{
    from:"Soumalya",
    to:"Sourish",
    message:" kkr are awesome",
    createdate:new Date()
},
{
    from:"Sneha",
    to:"Priyanka",
    message:" wwe is best",
    createdate:new Date()
},
{
    from:"Kajal",
    to:"koena",
    message:"hii",
    createdate:new Date()
},
{
    from:"amit",
    to:"artit",
    message:"done ",
    createdate:new Date()
},
];

Chat.insertMany(chats);