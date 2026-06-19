import { useState } from "react";

const UploadAvatar = () => {

  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleFileChange = (e) => {

    const selectedFile = e.target.files[0];

    if (!selectedFile) return;

    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const handleUpload = async () => {

    if (!file) {
      setError("Selecione uma imagem antes de enviar");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setMessage("");

      const formData = new FormData();
      formData.append("avatar", file);

      // 🔌 backend ready
      const response = await fetch("http://localhost:3000/profile/avatar", {
        method: "POST",
        body: formData
        // Authorization: `Bearer token`
      });

      if (!response.ok) {
        throw new Error("Erro ao fazer upload do avatar");
      }

      setMessage("Avatar atualizado com sucesso!");

    } catch (err) {
      console.error(err);
      setError("Não foi possível atualizar o avatar");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>

      <h1>Alterar Foto</h1>

      <hr />

      {preview && (
        <img
          src={preview}
          alt="Preview do avatar"
          width="150"
          style={{ borderRadius: "8px" }}
        />
      )}

      <div style={{ marginTop: "10px" }}>

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />

      </div>

      <div style={{ marginTop: "10px" }}>

        <button onClick={handleUpload} disabled={loading}>
          {loading ? "Enviando..." : "Salvar Avatar"}
        </button>

      </div>

      {message && (
        <p style={{ color: "green", marginTop: "10px" }}>
          {message}
        </p>
      )}

      {error && (
        <p style={{ color: "red", marginTop: "10px" }}>
          {error}
        </p>
      )}

    </div>
  );
};

export default UploadAvatar;