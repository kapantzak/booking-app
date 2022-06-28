import axios from "axios";
import { NEXT_PRIVATE_API_URL } from "@/lib/constants";

/**
 * Handles the verification request.
 * The goal of this request is to send the email to the backend and see
 * if it belongs to an existing account or we should create a new one.
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
export default async function handler(req, res) {
  if (req.method === "POST") {
    const {
      body: { email },
    } = req;

    const { data, status } = await axios.post(
      `${NEXT_PRIVATE_API_URL}/users/verify`,
      { email }
    );

    if (status === 200) {
      return res.status(200).json({
        success: "Logged in successfully",
        data,
      });
    } else {
      return res.status(status).json({
        error: "Authentication failed",
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({
      error: `Method ${req.method} not allowed`,
    });
  }
}
