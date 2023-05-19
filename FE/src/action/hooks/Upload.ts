import { postAsync } from "../api/UploadImage";

export const UploadImage = async (formData: any | null) => {
  const response = await postAsync("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response;
};
