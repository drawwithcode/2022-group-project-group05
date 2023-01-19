//server setup

const PORT = process.env.PORT || 3000

var express = require("express")

var app = express();
var server = app.listen(PORT);

app.use(express.static("public"));

console.log("RUNNING SERVER ON http://localhost:" + PORT)

var serverSocket = require("socket.io")

var io = serverSocket(server)

//libraries setup ends here

//users setup
const COLORS = [
    "#7FEB9E",
    "#5CC8FF",
    "#7D82FE",
    "#D28AFE",
    "#FFABE3",
    "#FF6D6D",
    "#FFAE63",
    "#FFE975"
  ]

let colArray = []

for (let i = 0; i < COLORS.length; i++){
    let colorObj = {
        hex: COLORS[i],
        taken: false
    }

    colArray.push(colorObj)
}

class User{
    constructor(id) {
        this.id = id;
        this.pairedId = 0;
        this.color = 0;
        this.name = "";
        this.msg = [];
        this.timer = 0;
        this.active = false;
        this.success = false;
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
        this.freeColor()
    }

    assignColor() {
        //returns index of first untaken color
        let freeColors = colArray.filter(color => !color.taken);
        let index;

        if (freeColors.length > 0) {
            index = Math.floor(Math.random() * freeColors.length)  
            
            this.color = freeColors[index].hex
            freeColors[index].taken = true
        }

        let log = "colors: "
        for (let i = 0; i < colArray.length; i++){
            log += colArray[i].hex
            
            if (i != colArray.length - 1) {
                log += ", "
            }
        }
        console.log(log)
        console.log("assigned "+ freeColors[index].hex + " to "+this.id)

        return index
    }

    freeColor() {
        let colorObj = colArray.find(obj => obj.hex = this.color)

        colorObj.taken = false;
    }
}

const CLOCK = 300;

var users = [];

var waiting = [];

io.on("connection", newConnection)

function newConnection(socket) {
    console.log(socket.id + " connected")

    //check if user exists and if not, save them
    if (getUser(socket.id) == undefined) {
        users.push(new User(socket.id))
    }

    
    socket.on("ready", function (username) {
        getUser(this.id).name = username;

        //set user to waiting
        waiting.push(this.id)
        console.log(this.id + " ready, unpaired: " + waiting.length)
        console.log("free colors: " + colArray.filter(color => !color.taken).length)

        //if enough users to pair, do
        if (waiting.length > 1) {
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

    socket.on("success", function () {
        console.log("success: "+this.id)
        let sender = getUser(this.id);
        
        if(!sender.success){
            let pair = [sender, getUser(sender.pairedId)]

            pair[0].success = true;
            pair[1].success = true;

            let random = Math.round(Math.random())

            for (let i = 0; i < pair.length; i++) {
                while(pair[i].msg.length < 70) {
                    pair[i].msg.push(true)
                }
            }

            let msg = {};

            msg.msg1 = pair[random].msg
            msg.color1 = pair[random].color
            msg.name1 = pair[random].name

            msg.msg2 = pair[1 - random].msg
            msg.color2 = pair[1 - random].color
            msg.name2 = pair[1 - random].name
            
            for (let i = 0; i < pair.length; i++) {
                io.to(pair[i].id).emit("success", msg)
            }
        }

    })

    //remove disconnected user and unpair them
    //also informs unpaired clients of the status change
    socket.on("disconnect", function () {
        console.log(socket.id + " disconnected")
        console.log("waiting: " + waiting)
        let userIndex = users.findIndex(user => user.id == this.id);
        let disconnected = users[userIndex];
        let waitIndex = waiting.indexOf(this.id);

        //check if user was waiting
        if (waitIndex != -1) {
            //user was waiting
            waiting.splice(waitIndex, 1)
            //unpaired -= 1;
            console.log("was unpaired")
        }
        else if (disconnected.success) {
            disconnected.reset()
        }
        else {
            console.log("waiting: " + waiting)
            console.log(disconnected.id)
            //user was paired
            if (disconnected.pairedId != 0) {
                let paired = getUser(disconnected.pairedId)

                //set paired user to waiting
                io.to(paired.id).emit("unpaired", 0)
                waiting.push(paired.id)
                paired.reset();
                
                //reset user
                disconnected.reset();

                console.log("was paired")
            }
        }

        if (waiting.length > 1) {
            pair();
        }

        users.splice(userIndex, 1)
    })
} 

//takes the first two waiting users and pairs them
function pair() {
    if(colArray.filter(color => !color.taken).length > 1){
        console.log("pairing")
        let pairingUsers = [getUser(waiting[0]), getUser(waiting[1])]

        for (let i = 0; i < pairingUsers.length; i++) {
            let user = pairingUsers[i]
            //assign paired id to users
            user.pairedId = pairingUsers[1 - i].id
                
            //assign colors to users
            user.assignColor()

            //start timers
            user.timer = setInterval(function () {
                user.updateMsg()
            }, CLOCK)
        }

        let msg = [{}, {}];

        for (let i = 0; i < msg.length; i++) {
            //send users pair id
            msg[i].id = pairingUsers[1 - i].id

            //send users their color and color to search
            msg[i].userColor = pairingUsers[i].color
            msg[i].pairColor = pairingUsers[1 - i].color

            //send users color of paired
            msg[i].pairName = pairingUsers[1 - i].name

            //send the message
            io.to(pairingUsers[i].id).emit("paired", msg[i])
        }

        console.log(msg)

        console.log("paired " + pairingUsers[0].id + " and " + pairingUsers[1].id)
        waiting.splice(0, 2);
        console.log(waiting)
    }
}

//just a nicer way to write this
function getUser(id) {
    return users.find(user => user.id == id)
}