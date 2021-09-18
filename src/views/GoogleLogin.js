import React from "react";
import GoogleLogin from "react-google-login";

const clientId = "";

function GoogleLoginHandle({ onSocial }) {
  const onSuccess = async (response) => {
    console.log(response);

    const {
      googleId,
      profileObj: { email, name },
    } = response;

    await onSocial({
      socialId: googleId,
      socialType: "google",
      email,
      nickname: name,
    });
  };

  const onFailure = (error) => {
    console.log(error);
    alert("로그인 에러 발생");
  };

  return (
    <div>
      Google Login
      <GoogleLogin
        clientId={clientId}
        responseType={"id_token"}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>
  );
}

export default GoogleLoginHandle;
