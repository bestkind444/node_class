import jwt from "jsonwebtoken";
async function authMiddleware(req, res, next) {
    const header = req.headers.authorization;

    if (!header || !header.startsWith("Bearer ")) {
        return res.status(401).json({
            success: false,
            message: "no header was provided"
        });
    }

    try {
        const token = header.split(" ")[1];
        const decoded = await jwt.verify(token, process.env.JWT);
        if (!decoded) {
            return res.status(400).json({
                success: false,
                message: "failed to verify token"
            });
        }

        req.userInfo = decoded;
        next()
    } catch (error) {
        console.log(error.message);

    }

}
export { authMiddleware }

