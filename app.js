const express = require("express");
const app = express();
const routers = require("./routes");
require('./passport');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routers.authRouter);
app.use("/users", routers.userRouter);
app.use("/posts", routers.postRouter);

const PORT = process.env.DEFAULT_PORT || 3000;
app.listen(PORT, (err) => {
    if (err) {
        throw err;
    }
    console.log(`Application running on port ${PORT}`);
});
