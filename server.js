//server setup

const PORT = process.env.PORT || 3000

var express = require("express")

var app = express();
var server = app.listen(PORT);

app.use("/public", express.static("public"));

console.log("RUNNING SERVER ON http://localhost:" + PORT + "/public")

var serverSocket = require("socket.io")

var io = serverSocket(server)

//libraries setup ends here

class User{
    constructor(id) {
        this.id = id;
        this.pairedId = 0;
        this.color = 0;
        this.msg = [];
        this.timer = 0;
        this.active = false;
    }

    updateMsg(){
        this.msg.push(this.active);

        if(this.msg.length > 70){
            this.msg.shift()
        }
        else if(this.msg.length == 10){
            console.log("id: "+this.id+"; msg: "+this.msg)
        }
    }

    reset(){
        this.pairedId = 0;
        this.msg = [];
        clearInterval(this.timer)
        this.active = false;
    }
}

const CLOCK = 882;

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
        console.log(this.id + " ready, unpaired: " + unpaired)
        if (unpaired > 1) {
            pair();
        }
    })

    //when user sends morse message, forward to paired user
    socket.on("morse", function (data) {
        var sender = getUser(this.id);
        var receiverId = sender.pairedId;
        
        if (receiverId != 0) {
            io.to(receiverId).emit("morse", data)

            //save the state of the sender (pressing or not)
            sender.active = data;
        }
        
        console.log(this.id + " - morse")
    })

    //remove disconnected user and unpair them
    //also informs unpaired clients of the status change
    socket.on("disconnect", function () {
        console.log(socket.id + " disconnected")
        var userIndex = users.findIndex(user => user.id == this.id);
        var waitIndex = waiting.findIndex(user => user.id == this.id);

        //check if user was waiting
        if (waitIndex != -1) {
            //user was waiting
            waiting.splice(waitIndex, 1)
            unpaired -= 1;
            console.log("was unpaired")
        }
        else {
            console.log(waiting)
            console.log(users[userIndex])
            //user was paired
            if (users[userIndex].pairedId != 0) {
                //stop user timer
                clearInterval(users[userIndex].timer)

                var paired = getUser(users[userIndex].pairedId)

                //set paired user to waiting
                io.to(paired.id).emit("unpaired", 0)
                waiting.push(paired)
                paired.reset();
                
                unpaired += 1;
                console.log("was paired")
            }
        }

        if (unpaired > 1) {
            pair();
        }

        users.splice(userIndex, 1)
    })
} 

//takes the first two waiting users and pairs them
function pair() {
    console.log("pairing")
    waiting[0].pairedId = waiting[1].id
    waiting[1].pairedId = waiting[0].id
    unpaired -= 2;

    io.to(waiting[0].id).emit("paired", waiting[1])
    io.to(waiting[1].id).emit("paired", waiting[0])

    //start the users' timers
    for (let i = 0; i <= 1; i++){
        let user = getUser(waiting[i].id)
        user.timer = setInterval(function () {
            user.updateMsg()
        }, CLOCK)
    }

    console.log("paired " + waiting[0].id + " and " + waiting[1].id)
    waiting.splice(0, 2);
    console.log(waiting)
}

//just a nicer way to write this
function getUser(id) {
    return users.find(user => user.id == id)
}