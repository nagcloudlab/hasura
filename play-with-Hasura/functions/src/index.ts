

import * as functions from "firebase-functions";
import { notifyAboutCommentHandler } from "./notifyAboutComment";
import { createAccountHandler } from "./createAccount";
import { getAccountHandler } from "./getAccount";


// function-1
export const notifyAboutComment = functions.https.onRequest(
    notifyAboutCommentHandler
);
// function-3
export const createAccount = functions.https.onRequest(createAccountHandler);

// function-3
export const getAccount = functions.https.onRequest(getAccountHandler);