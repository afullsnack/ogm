import QRCode from "qrcode.react";
import { useEffect, useState } from "react";
import speakeasy from "speakeasy";

function QRCodeComp() {
  const [secret, setSecret] = useState("secretestringdude");
  useEffect(() => {
    try {
      const token = speakeasy.generateSecret({ length: 20 });
      if (token) {
        setSecret(token);
      }
    } catch (e: any) {
      console.log(e.message ?? e.toString());
    }
  }, []);

  // TODO: also save in the db as the users auth

  return (
    <div className="p-2 bg-white flex items-center justify-center">
      <QRCode value={secret} size={180} renderAs="svg" />
    </div>
  );
}

export default QRCodeComp;
