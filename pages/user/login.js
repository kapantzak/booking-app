import { useEffect } from "react";
import AuthLayout from "@/layouts/AuthLayout";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { GOOGLE_CLIENT_ID } from "@/lib/constants";

const Login = () => {
  const handleCredentialResponse = async ({ credential }) => {
    const { email, given_name, family_name, name } = jwt_decode(credential);

    axios
      .post("/api/user/verify", { email, given_name, family_name, name })
      .then((resp) => console.log(resp));
  };

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: handleCredentialResponse,
    });
    google.accounts.id.renderButton(document.getElementById("buttonDiv"), {
      theme: "outline",
      size: "large",
    });
    google.accounts.id.prompt();
  }, []);

  return (
    <AuthLayout>
      <div id="buttonDiv"></div>
    </AuthLayout>
  );
};

export default Login;
