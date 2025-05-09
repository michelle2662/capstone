import { NextRequest } from "next/server";
import jwt from "jsonwebtoken"

export const getDataFromToken = (request : NextRequest ) => {
    try {
        const token = request.cookies.get("token")?.value;
        if (!token) throw new Error("Token not found");

        const secret = process.env.TOKEN_SECRET;
        if (!secret) throw new Error("TOKEN_SECRET not defined");

        const decodedToken: any = jwt.verify(token, secret);
        return decodedToken.id;
    } catch (error :any) {
        console.error("Error in getDataFromToken:", error);
        throw new Error("Invalid or missing token");;
    }
}