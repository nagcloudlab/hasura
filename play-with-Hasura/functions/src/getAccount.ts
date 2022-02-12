
import { Request, Response, logger } from "firebase-functions";

export const getAccountHandler = async (
    request: Request,
    response: Response
) => {
    try {
        logger.log(request.body);
        const { id } = request.body.input;

        // persist account details into db

        response.status(200).send({
            id: id,
            email: "tom@mail.com",
            displayName: "TOM"
        });
    } catch (error) {
        response.status(500).send({ message: `Message: ${error.message}` });
    }

}