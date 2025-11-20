import user from "../model/users.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


const registeredUsers = async (req, res) => {
    try {
        const { name, email, password, confirmPassword, role } = req.body;

        if (!name || !email || !password || !confirmPassword || !role) {
            return res.status(400).json({
                success: false,
                message: "input can not be empty"
            });

        }


        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "password dose not match"
            });
        }

        const existingUser = await user.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "user already exist"
            });
        }


        const passLength = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, passLength);


        const newUser = await user.create({
            name,
            email,
            password: hashedPassword,
            role
        });



        return res.status(201).json({
            success: true,
            message: "registration successful",
            data: newUser

        });


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "server error"
        });
    }
}
export { registeredUsers };

const loginUser = async (req, res) => {
    try {

        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "input can not be empty"
            });
        }

        const logUser = await user.findOne({ email });
        console.log(logUser);

        const verifiedPassword = await bcrypt.compare(password, logUser.password);
        if (!verifiedPassword) {
            return res.status(400).json({
                success: false,
                message: "invalid credentials"
            });
        }

        const accessToken = await jwt.sign({
            userId: logUser.id,
            userEmail: logUser.email,
            userRole: logUser.role
        }, process.env.JWT, { expiresIn: "15m" });

        return res.status(200).json({
            success: true,
            message: "login successfully",
            accessToken,
            data:logUser
        });










    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "server error"
        });
    }
}
export { loginUser };
