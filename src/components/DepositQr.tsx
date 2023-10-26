import { QRCodeSVG } from "qrcode.react";
import { FC } from "react";

const DepositQRCode: FC<{ address: string }> = ({ address }) => {
  // TODO: also save in the db as the users auth

  return (
    <div className="p-2 bg-white flex items-center justify-center">
      <QRCodeSVG value={address} size={180} />
    </div>
  );
};

export default DepositQRCode;
