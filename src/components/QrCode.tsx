import { QRCodeSVG } from "qrcode.react";
import { FC } from "react";
import speakeasy from "speakeasy";

const QRCodeComp: FC = () => {
  const generatedSecret = () => speakeasy.generateSecret({ length: 20 });

  // TODO: also save in the db as the users auth

  return (
    <div class="p-2 bg-white">
      <QRCodeSVG value={generatedSecret()} />
    </div>
  );
};

export default QRCodeComp;
