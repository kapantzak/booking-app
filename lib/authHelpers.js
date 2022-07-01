import { OAuth2Client } from "google-auth-library";
import { GOOGLE_CLIENT_ID } from "@/lib/constants";

/**
 * Validate Google ID token
 * [https://developers.google.com/identity/gsi/web/guides/verify-google-id-token#using-a-google-api-client-library]
 *
 * @param {String} credential
 * @returns {Object} { success: <Boolean>, payload: <Object>, error: <Object> }
 */
const verifyGoogleCredentials = async (credential) => {
  try {
    const client = new OAuth2Client(GOOGLE_CLIENT_ID);

    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();

    return {
      success: true,
      payload,
    };
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
};

export { verifyGoogleCredentials };
