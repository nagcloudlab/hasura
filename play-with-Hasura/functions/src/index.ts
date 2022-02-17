

import * as functions from "firebase-functions";


import * as admin from "firebase-admin";
import { notifyAboutCommentHandler } from "./notifyAboutComment";
import { createUserHandler } from "./createUser";
import { getUserHandler } from "./getUser";
import initApolloServer from "./getUserProfile";
import { loginHandler } from "./login";
import { authHookHandler } from "./authHook";

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
export const getUser = functions.https.onRequest(getUserHandler);
// GraphQL
export const getUserProfile = functions.https.onRequest(
    initApolloServer.createHandler()
);
export const login = functions.https.onRequest(loginHandler);

export const authHook = functions.https.onRequest(authHookHandler);