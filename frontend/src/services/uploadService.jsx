
export const uploadImage = async (file) => {

  const token = localStorage.getItem("token") ? localStorage.getItem("token") : null;
  

  const formData = new FormData();
  formData.append("image", file);

  try {

    const response = await fetch("http://localhost:4000/api/upload/image", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`
      },
      body: formData


    });

    const data = await response.json();


    if (!response.ok) {
      throw new Error(data.errors ? data.errors[0] : "Erro ao enviar imagem");
    }


    return data.url;
  } catch (error) {
    console.error("Erro no service de upload:", error);
    throw error;
  }
};