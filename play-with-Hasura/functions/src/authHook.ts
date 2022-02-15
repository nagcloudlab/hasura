import { Request, Response } from "firebase-functions";

export const authHookHandler = async (request: Request, response: Response) => {
    try {
        const customAuthHeader = request.headers["x-secret"];
        if (!customAuthHeader || customAuthHeader !== "trust-me")
            throw Error("No header or invalid");
        response.status(200).send({
            "x-hasura-role": "user",
            "x-hasure-user-id": "23423h3gjh2432hj4b"
        });
    } catch (error) {
        response.status(401).send({ message: `Message: ${error.message}` });
    }
};