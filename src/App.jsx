import DynamicQRCodeGenerator from "./Qr3_with_library";
import Qr1 from "./Qr1";
import QrCodeGenerator from "./Qr4_with_library";

function App() {
  return (
    <div className="App">
      <DynamicQRCodeGenerator />
      <Qr1 />
      <QrCodeGenerator />
    </div>
  );
}

export default App;
