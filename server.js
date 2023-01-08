//server setup

const PORT = process.env.PORT || 3000

var express = require("express")

var app = express();
var server = app.listen(PORT);

app.use("/public", express.static("public"));

console.log("server running on localhost://" + PORT)

var serverSocket = require("socket.io")

var io = serverSocket(server)

//libraries setup ends here

class User{
    constructor(id) {
        this.id = id;
        this.pairedId = 0;
    }
}

var users = [];

var waiting = [];

var unpaired = 0;

io.on("connection", newConnection)

function newConnection(socket) {
    console.log(socket.id + " connected")

    //check if user exists and if not, save them
    if (getUser(socket.id) == undefined) {
        users.push(new User(socket.id))
    }

    //when user starts, add them to waitlist, if they  can be paired, pair 
    socket.on("start", function () {
        waiting.push(getUser(this.id))

        unpaired += 1;
        if (unpaired > 1) {
            pair();
        }
    })

    //when user sends morse message, forward to paired user
    socket.on("morse", function (data) {
        var receiver = getUser(this.id).pairedId;

        if (receiver != 0) {
            io.to(receiver).emit("morse", data)
        }
        
        console.log(this.id + " - morse")
    })

    //remove disconnected user and unpair them
    //also informs unpaired clients of the status change
    socket.on("disconnect", function () {
        console.log(socket.id + " disconnected")
        var userIndex = users.findIndex(user => user.id == this.id);

        if (users[userIndex].pairedId == 0) {
            waiting.splice(waiting.findIndex(user => user.id == this.id), 1)
            unpaired -= 1;
            console.log("was unpaired")
        }
        else {
            var paired = getUser(users[userIndex].pairedId)
            paired.pairedId = 0;
            io.to(paired.id).emit("unpaired", 0)
            waiting.push(paired)
            unpaired += 1;
            console.log("was paired")
        }

        if (unpaired > 1) {
            pair();
        }

        users.splice(userIndex, 1)
    })
} 

//takes the first two waiting users and pairs them
function pair() {
    waiting[0].pairedId = waiting[1].id
    waiting[1].pairedId = waiting[0].id
    unpaired -= 2;

    io.to(waiting[0].id).emit("paired", waiting[1].id)
    io.to(waiting[1].id).emit("paired", waiting[0].id)
    console.log("paired " + waiting[0].id + " and " + waiting[1].id)
    waiting.splice(0, 2);
    console.log(waiting)
}

//just a nicer way to write this
function getUser(id) {
    return users.find(user => user.id == id)
}