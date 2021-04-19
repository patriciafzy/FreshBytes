import { storage } from "@/firebase/firebase";

export const uploadImage = async (image, imageName) => {
  imageName = UID() + imageName;

  const storageRef = storage.ref();

  const imageRef = storageRef.child("images/" + imageName);

  await imageRef.put(image).then(console.log);

  return imageRef.getDownloadURL();
};

export const deleteImage = (imageName) => {
  const storageRef = storage.ref();
  const imageRef = storageRef.child("images/" + imageName);

  return imageRef
    .delete()
    .then(() => {
      console.log("Successfully deleted image");
    })
    .catch((error) => {
      console.log(error);
    });
};

// Get Unique Identifier
const UID = () => Math.random().toString(36).substr(2, 9) + "_";
