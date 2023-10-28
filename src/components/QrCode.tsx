import QRCode from "qrcode.react";
import { FC } from "react";
import speakeasy from "speakeasy";

const QRCodeComp: FC = () => {
  const generatedSecret = () => speakeasy.generateSecret({ length: 20 });

  // TODO: also save in the db as the users auth

  return (
    <div className="p-2 bg-white flex items-center justify-center">
      <QRCode value={generatedSecret()} size={180} />
    </div>
  );
};

export default QRCodeComp;
