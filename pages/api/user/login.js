import axios from "axios";
import { verifyGoogleCredentials } from "@/lib/authHelpers";
import { NEXT_PRIVATE_API_URL } from "@/lib/constants";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const {
      body: { type, payload },
    } = req;

    switch (type) {
      case "Google":
        const { credential } = payload;

        if (payload) {
          return handleGoogleCredentials({ credential, res });
        }
      default:
        const { email, password } = payload;

        if (email && password) {
          return handleCustomCredentials({ email, password, res });
        }
    }

    return res.status(401).json({
      error: "Authentication failed",
    });
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({
      error: `Method ${req.method} not allowed`,
    });
  }
}

const handleGoogleCredentials = async ({ credential, res }) => {
  const { success, payload, error } = await verifyGoogleCredentials(credential);

  if (success) {
    const { email } = payload;

    const { data, status } = await axios({
      url: `${NEXT_PRIVATE_API_URL}/users/verify`,
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: { email },
    });

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
  }

  return res.status(401).json({ error });
};

const handleCustomCredentials = async ({ email, password, res }) => {
  const { data, status } = await axios({
    url: `${NEXT_PRIVATE_API_URL}/users/login`,
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: { email, password },
  });

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
};
