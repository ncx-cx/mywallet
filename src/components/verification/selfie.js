import { useUploadFile } from "dex-react-file-upload";
import Png from "../Png";

export default function App() {
  const { handleChange, fileData } = useUploadFile({
    handleError(props) {
      console.log(props);
    },
    multiple: false,
    maxFile: 1,
    maxfileSize: 1500, //in kb,
  });

  return (
        <div className="card-container">
            <img className="placeholder" src={Png.selfie} alt="ncx" />
            <div className="uploaded-img" style={{ display: "flex", gap: 10 }}>
                {fileData?.file?.map((item, idx) => (
                <div style={{ display: "grid", gap: 10 }} key={idx}>
                    <img src={item?.blob} width={200} height={200} alt="ncx"/>
                    <span>{item.name}</span>
                </div>
                ))}
            </div>
            <h1>3. Selfie Proof to verify your identity</h1>
            <p>Take a selfie by holding your ID card also your card.</p>
            <input className="upload-Images" type="file" name="file" onChange={handleChange} />
        </div>
  );
}