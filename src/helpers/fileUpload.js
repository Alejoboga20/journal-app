export const fileUpload = async (file) => {
  const cloudUrl = 'https://api.cloudinary.com/v1_1/finastra/upload';

  const formData = new FormData();
  formData.append('upload_preset', 'react-journal-app');
  formData.append('file', file);

  try {
    const response = await fetch(cloudUrl, {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      const cloudResponse = await response.json();
      return cloudResponse.secure_url;
    } else {
      throw await response.json();
    }
  } catch (e) {
    return null;
  }
};
