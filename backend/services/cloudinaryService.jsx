
export const uploadImage = async (file) => {

  const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
  const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;


  console.log("Cloud Name:", import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);
  console.log("Preset:", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
  if (!CLOUD_NAME || !UPLOAD_PRESET) {
    throw new Error("Variáveis de ambiente não carregadas!");
  }


  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);

  const response = await fetch(CLOUDINARY_URL, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Erro ao realizar upload da imagem para o Cloudinary");
  }

  const data = await response.json();
  return data.secure_url; 
};

