import React, { useState } from "react";
import ProfileForm from "./components/ProfileForm";
import "./App.css";
import "./reset.css";

function App() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [qrCode, setQrCode] = useState(null);

  const handleSubmit = (profileData) => {
    setProfile(profileData);
    // QRコードを生成する処理を呼び出す.（JSON文字列を使用）
    setQrCode(JSON.stringify(profileData));
  };

  return (
    <div className="container">
      <h1 className="title">ConnectCord</h1>
      <div>
        <ProfileForm onSubmit={handleSubmit} />
      </div>
      {/* <div>
        <QRcodeDisplay data={qrCode} />
      </div> */}
    </div>
  );
}

export default App;
