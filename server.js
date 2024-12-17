let express = require("express");

let app = express();
let port = 3000;

app.get("/", (req, res) => {
    res.send(Math.random(). toString());
    
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});