//server setup

const PORT = process.env.PORT || 3000

var express = require("express")

var app = express();
var server = app.listen(PORT);

app.use(express.static("public"));

console.log("server running")

var serverSocket = require("socket.io")

var io = serverSocket(server)

io.on("connection", newConnection)

function newConnection(socket) {
    console.log(socket.id)

    socket.on("morse", function (data) {
        this.broadcast.emit("morse", data)
        console.log(this.id + " - morse")
    })

    socket.on("bitsend", function (data) {
        this.broadcast.emit("bitsend", data)
        console.log(this.id + " - bitsend")
    })
}
