const router = require('express').Router();
const bcrypt = require('bcrypt');
const db = require('../db/dbconn');
const generateJWT = require('../utilities/generateJWT');

router.post('/login', (req, res) => {
    const {username, password} = req.body;
    try {
        const sqlCheckUsername = "SELECT id from users WHERE username = ?";
        db.query(sqlCheckUsername, [username], async (err, result) => {
            if (err) throw err;
            if (!result.length){
                return res.status(401).json({
                    status: "failed",
                    message: "Username or password are incorrect"
                });
            } else {
                const userPassDb = result[0].password;
                const isPassValid = await bcrypt.compare(password, userPassDb);
                if (!isPassValid){
                    return res.status(401).json({
                        status: "failed",
                        message: "Username or password are incorrect"
                    });
                } else {
                    const userId = result[0].user_id;
                    const accessToken = generateJWT(userId);
                    res.status(200).json({
                        status: "success",
                        userId,
                        message: "User logged in",
                        accessToken
                    });
                }
            }
        })
    } catch (error) {
        res.server(500).json({
            status: "failed",
            message: "Server error"
        });
    }
});

router.post('/register', (res, req) => {
    const {firstName, lastName, username, password, password2} = req.body;
    try {
        const sqlCheckUser = "SELECT username FROM users where username = ?";
        db.query(sqlCheckUser, [username], async (err, result) => {
            if (err) throw err;
            if (result.length > 0){
                return res.status(401).json({ 
                    status: "failed",
                    message: "This username is already taken."
                });
            }
            else if (password !== password2){
                return res.status(401).json({
                    status: "failed",
                    message: "Passwords do not match."
                });
            } else {
                const salt = await bcrypt.genSalt(10);
                const encryptesPass = await bcrypt.hash(password, salt);

                const sqlCreateUser = "INSERT INTO users (first_name, last_name, username, password) VALUES (?, ?, ?, ?)";
                db.query(sqlCreateUser, [firstName, lastName, username, encryptesPass], (err, result) => {
                    if (err) throw err;
                    else {
                        const userId = result.insertId;
                        const accessToken = generateJWT(userId);
                        res.status(201).json({
                            status: "success",
                            message: "New user created",
                            accessToken,
                            userId
                        });
                    }
                });
            }
        });
    } catch (error) {
        res.status(500).json({
            status: "failed",
            message: "Server Error"
        });
    }
});

module.exports = router;