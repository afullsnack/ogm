import QRCode from "qrcode.react";
import { FC, useEffect, useState } from "react";
import speakeasy from "speakeasy";

const QRCodeComp: FC = () => {
  const [secret, setSecret] = useState("");
  useEffect(() => {
    try {
      const token = generatedSecret();
      if (token) {
        setSecret(token);
      }
    } catch (e: any) {
      console.log(e.message ?? e.toString());
    }
  }, []);
  const generatedSecret = (): string => {
    return speakeasy.generateSecret({ length: 20 });
  };

  // TODO: also save in the db as the users auth

  return (
    <div className="p-2 bg-white flex items-center justify-center">
      <QRCode value={secret} size={180} renderAs="svg" />
    </div>
  );
};

export default QRCodeComp;
