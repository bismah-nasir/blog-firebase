// This service completely hides the data store from the rest of the app.
// No other part of the app knows how the data is stored. If anyone wants
// to read or write data, they have to go through this service.

import { db } from "../firebaseConfig"
import {
  collection,
  query,
  doc,
  getDoc,
  getDocs,
  addDoc,
  orderBy,
  limit,
  Timestamp,
  updateDoc,
  deleteDoc,
} from "firebase/firestore"

// Create Artile
export async function createArticle({ title, body }) {
  const data = { title, body, date: Timestamp.now() }
  const docRef = await addDoc(collection(db, "articles"), data)
  return { id: docRef.id, ...data }
}

// Read All first 20 ordered by date
export async function fetchArticles() {
  const snapshot = await getDocs(
    query(collection(db, "articles"), orderBy("date", "desc"), limit(20))
  )
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))
}

// Read one (by ID)
export async function getArticle(id) {
  const docRef = doc(db, "articles", id);
  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    throw new Error("Article not found");
  }

  return { id: snapshot.id, ...snapshot.data() };
}

// Update article (by ID)
export async function updateArticle(id, updatedFields) {
  const docRef = doc(db, "articles", id);
  await updateDoc(docRef, updatedFields);
  // return true;
}

// Delete Article (by ID)
export async function deleteArticle(id) {
  const docRef = doc(db, "articles", id);
  await deleteDoc(docRef);
  // return true;
}