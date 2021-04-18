import { database } from "@/firebase/firebase";

export const addItem = (itemData) => database.collection("items").add(itemData);

export const deleteItem = (itemId) =>
  database.collection("items").doc(itemId).delete();

export const addOrder = async (cartItems) => {
  const uid = UID();

  let promises = [];

  cartItems.forEach((item) => {
    promises.push(
      database.collection("orders").add({
        ...item,
        orderId: uid,
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
