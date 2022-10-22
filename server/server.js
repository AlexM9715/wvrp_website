const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;
const DB = "wvrp_website_db";

// ---- middleware ----
app.use(cors(), express.json(), express.urlencoded({extended:true}));
// --------------------

// database connection
require("./config/mongoose")(DB);

// route connection
require("./routes/merchRoutes")(app);

// start the server
app.listen(PORT, () => console.log(`Server up on port: ${PORT}`));