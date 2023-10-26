import { QRCodeSVG } from "qrcode.react";
import { FC } from "react";
import speakeasy from "speakeasy";

const DepositQRCode: FC<{ address: string }> = ({ address }) => {
  // TODO: also save in the db as the users auth

  return (
    <div class="p-2 bg-white flex items-center justify-center">
      <QRCodeSVG value={address} size={180} />
    </div>
  );
};

export default DepositQRCode;
