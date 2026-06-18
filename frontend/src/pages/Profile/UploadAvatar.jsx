import { useState } from "react";

const UploadAvatar = () => {

  const [preview, setPreview] =
    useState(null);

  const handleFileChange = (e) => {

    const file = e.target.files[0];

    if (file) {

      setPreview(
        URL.createObjectURL(file)
      );

    }

  };

  return (

    <div>

      <h1>Alterar Foto</h1>

      {preview && (

        <img
          src={preview}
          alt="Preview"
          width="150"
        />

      )}

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />

    </div>

  );

};

export default UploadAvatar;