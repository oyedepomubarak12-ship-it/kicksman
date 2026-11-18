
import { LoaderCircle } from "lucide-react";

export default function Loader({
  message = "Loading...",
  fullScreen = false
}) {
  return (
    <div className={`loader-container ${fullScreen ? "loader-fullscreen" : ""}`}>
      <LoaderCircle className="loader-icon" size={38} />

      <p>{message}</p>
    </div>
  );
}
