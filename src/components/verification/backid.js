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
            <img className="placeholder" src={Png.backID} alt="ncx" />
            <div className="uploaded-img" style={{ display: "flex", gap: 10 }}>
                {fileData?.file?.map((item, idx) => (
                <div style={{ display: "grid", gap: 10 }} key={idx}>
                    <img src={item?.blob} width={200} height={200} alt="ncx"/>
                    <span>{item.name}</span>
                </div>
                ))}
            </div>
            <h1>2. Upload back of ID card (color image)</h1>
            <p>Please make sure the ID is fully visible and in focus</p>
            <input className="upload-Images" type="file" name="file" onChange={handleChange} />
        </div>
  );
}