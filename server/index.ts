import express from "express"
import bodyParser from "body-parser"
import {computerRoutes} from "./src/router/computerRoutes"
import {mobileRoutes} from "./src/router/mobileRoutes"
import {audioRoutes} from "./src/router/audioRoutes"
import {televisionRoutes} from "./src/router/televisionRoutes"

const app = express();

const port = process.env.port || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));
app.use("/computers", computerRoutes);
app.use("/mobiles", mobileRoutes);
app.use("/audios", audioRoutes);
app.use("/televisions", televisionRoutes)

app.get("/home", (req, res) => {
    res.send("Welcome")
})

const run = () =>{
    try{
      app.listen(port, () => console.log(`server running on port: http://localhost:${port}`));
    }catch(e){
      console.log(`we have some error: ${e} ☹️`)
    }
}

run();