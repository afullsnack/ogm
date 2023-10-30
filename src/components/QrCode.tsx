import { QRCodeSVG } from "qrcode.react";
import speakeasy from "speakeasy";

function QRCodeComp() {
  return (
    <div className="p-2 bg-white flex items-center justify-center">
      <QRCodeSVG value={speakeasy.generateSecret({ length: 20 })} size={180} />
    </div>
  );
}

export default QRCodeComp;
