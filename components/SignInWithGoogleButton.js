import { GOOGLE_CLIENT_ID } from "@/lib/constants";

const SignInWithGoogleButton = () => {
  return (
    <>
      <div id="g_id_onload" data-client_id={GOOGLE_CLIENT_ID}></div>
      <div
        class="g_id_signin"
        data-type="standard"
        data-size="large"
        data-theme="outline"
        data-text="sign_in_with"
        data-shape="rectangular"
        data-logo_alignment="left"
      ></div>
    </>
  );
};

export default SignInWithGoogleButton;
