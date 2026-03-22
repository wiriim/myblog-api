const jwt = require("jsonwebtoken");
require("dotenv").config();
const prisma = require("../lib/prisma");
const bcrypt = require("bcryptjs");

async function signIn(req, res) {
    const {username, password} = req.body;
    const user = await prisma.user.findUnique({
        where: {username}
    })
    if (!user){
        res.status(500).json({error: 'User not found.'});
    }
    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched){
        res.status(500).json({error: 'Incorrect password.'});
    }
    jwt.sign({ user }, process.env.SECRET_KEY, { expiresIn: '1h' }, function (err, token) {
        res.json({ token });
    });
}

module.exports = { signIn };
