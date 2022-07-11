import { useEffect, useState } from "react";
import axios from "axios";
import { GOOGLE_CLIENT_ID } from "@/lib/constants";

const useAuth = () => {
  const [userCredentials, setUserCredentials] = useState({});

  const initializeGoogleButton = () => {
    google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: handleGoogleCredentialResponse,
    });
    google.accounts.id.renderButton(document.getElementById("buttonDiv"), {
      theme: "outline",
      size: "large",
    });
    google.accounts.id.prompt();
  };

  const handleGoogleCredentialResponse = async ({ credential }) => {
    axios
      .post("/api/user/login", { type: "Google", payload: { credential } })
      .then((resp) => console.log(resp));
  };

  const handleCustomCredentials = (e) => {
    e.preventDefault();
    axios
      .post("/api/user/login", {
        type: "Custom",
        payload: { ...userCredentials },
      })
      .then((resp) => console.log(resp));
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setUserCredentials((userCredentials) => ({ ...userCredentials, email }));
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setUserCredentials((userCredentials) => ({ ...userCredentials, password }));
  };

  //   useEffect(() => {
  //     google.accounts.id.initialize({
  //       client_id: GOOGLE_CLIENT_ID,
  //       callback: handleGoogleCredentialResponse,
  //     });
  //     google.accounts.id.renderButton(document.getElementById("buttonDiv"), {
  //       theme: "outline",
  //       size: "large",
  //     });
  //     google.accounts.id.prompt();
  //   }, []);

  return {
    initializeGoogleButton,
    handleCustomCredentials,
    handleEmailChange,
    handlePasswordChange,
  };
};

export default useAuth;
