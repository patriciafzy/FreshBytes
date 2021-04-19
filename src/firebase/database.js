import { database } from "@/firebase/firebase";

export const addItem = (itemData) => {
  const timeNow = Date.now();

  return database.collection("items").add({
    ...itemData,
    createdAt: timeNow,
  });
};

export const updateItem = (itemData, docID) => {
  console.log(docID);
  return database
    .collection("items")
    .doc(docID)
    .update({
      ...itemData,
    });
};

export const deleteItem = (itemId) =>
  database.collection("items").doc(itemId).delete();

export const addOrder = async (cartItems) => {
  const uid = UID();
  const timeNow = Date.now();

  let promises = [];

  cartItems.forEach((item) => {
    promises.push(
      database.collection("orders").add({
        ...item,
        orderId: uid,
        createdAt: timeNow,
      })
    );
  });

  await Promise.all(promises);
};

// Get Unique Identifier
const UID = () => Math.random().toString(36).substr(2, 9);

export const reduceItems = async (cartItems) => {
  let promises = [];

  cartItems.forEach((item) => {
    promises.push(
      database
        .collection("items")
        .doc(item.id)
        .update({
          quantity: item.quantity - item.currentQuantity,
        })
    );
  });

  await Promise.all(promises);
};
