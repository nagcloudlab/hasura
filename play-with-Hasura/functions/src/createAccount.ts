
import { Request, Response, logger } from "firebase-functions";

export const createAccountHandler = async (
    request: Request,
    response: Response
) => {
    try {
        logger.log(request.body);
        const { email, password, /*displayName*/ } = request.body.input.credentials;

        // persist account details into db

        response.status(200).send({
            id: 1,
            email: email,
            displayName: password
        });
    } catch (error) {
        response.status(500).send({ message: `Message: ${error.message}` });
    }

}