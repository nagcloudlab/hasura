

import * as functions from "firebase-functions";


import * as admin from "firebase-admin";
import { notifyAboutCommentHandler } from "./notifyAboutComment";
import { createUserHandler } from "./createUser";
import { getProfileHandler } from "./getProfile";
import initApolloServer from "./remoteSchema";

const adminConfig = JSON.parse(process.env.FIREBASE_CONFIG as string);
if (functions.config()?.hasura?.env === "local") {
    console.log("local")
    const serviceAccount = require("../serviceAccountKey.json");
    adminConfig.credential = admin.credential.cert(serviceAccount);
}
admin.initializeApp(adminConfig);


export const notifyAboutComment = functions.https.onRequest(
    notifyAboutCommentHandler
);
export const createUser = functions.https.onRequest(createUserHandler);
export const getProfile = functions.https.onRequest(getProfileHandler);
// GraphQL
export const userProfile = functions.https.onRequest(
    initApolloServer.createHandler()
);