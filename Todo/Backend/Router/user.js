import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { UserModal } from '../Modals/user.modal.js';
import { savedTodoModal } from "../Modals/savedTodos.modal.js";
import { UserLoginModal } from "../Modals/userLogin.modal.js";

import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

router.post("/register", async (req, res) => {
    const { userName, email, password } = req.body;
    console.log("Body data", req.body);
    const user = await UserModal.findOne({ email });

    // If user tries to register with an existing username  
    if (user) {
        return res.status(201).json({ message: ` Please Resgister with a new login name ${email} already exists` })
    }

    // When user uses a new username
    const hashedPassword = await bcrypt.hash(password, 12);
    console.log("HashedPassword", hashedPassword)

    // Adding this new user to our database
    const newUser = new UserModal({ userName, password: hashedPassword, email });
    await newUser.save();

    res.json({ message: "User Registered Sucessfully!" });
});

router.post("/login", async (req, res) => {
    const { password, email } = req.body; //password added
    const user = await UserModal.findOne({ email });

    if (user === null) {
        return res.status(400).json({ message: `${email} doesnot exist` });
    }

    // if user enters correct login id we need to verify user enters a correct password
    const isValidPassword = await bcrypt.compare(password, user.password)

    if (!isValidPassword) { //if user has entered an incorrect password
        return res.status(401).json({ message: "Please enter the correct password!!!" });
    }

    // Now since user has entered both username and password correct
    // When a user logs in, a server can generate a JWT token containing information about the user (such as user ID, username, or roles) and sign it using a secret key. This token is then sent to the client, and the client includes it in subsequent requests to authenticate the user.

    const secret = process.env.SECRET_KEY;
    // console.log("Secret key is:", secret);
    const token = jwt.sign({ userID: user._id, password: password }, secret);
    // console.log("Token generated while login: ", token);
    res.status(200).json({ token, userID: user._id });

});

export { router as userRouter };

export const verifyToken = (req, res, next) => {
    // console.log(req.headers);
    const token = req.headers.authorization; // Extract the token from the Authorization header
    // console.log("Token is: ", req.headers.authorization);
    if (token) {
        // If a token is present, verify it using the provided SECRET_KEY
        jwt.verify(token, process.env.SECRET_KEY, (err) => {
            if (err) { // If there's an error in verification, send a 403 Forbidden status
                return res.status(403).send(`Token not verified: ${err.message}`);
            }
            next(); // If verification succeeds, proceed to the next middleware or route handler
        });
    }
    else {  // If no token is present in the Authorization header, send a 401 Unauthorized status

        //To include a valid token in the Authorization header for authentication, 
        //you typically need to do this on the client side. 
        //When making HTTP requests(using Fetch API or Axios), you can set the Authorization header to include the token.

        return res.status(401).json({ error: 'Unauthorized: Token missing or invalid format' });
    }
};

