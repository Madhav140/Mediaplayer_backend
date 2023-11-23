//import json server library in index.js
 const jsonServer = require('json-server')

//create server using json-server library
const mediaplayerserver = jsonServer.create()

//create path to db.json file
const router = jsonServer.router('db.json')

//middlewares to convert js to json
const middleware = jsonServer.defaults()

//connect/use middleware and router in server
mediaplayerserver.use(middleware)
mediaplayerserver.use(router)

//setup port for the server(because json and react both run on same port)
const port = 5000 || process.env.PORT  

//to listen server for resolving request
mediaplayerserver.listen(port,()=>{
    console.log(`mediaplayerserver started at port number ${port} and ready to fetch request`);
})