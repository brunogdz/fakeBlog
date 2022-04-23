import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  where,
} from "firebase/firestore";

export const useFetchDocuments = (docCollection, search = null, uid = null) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  // deal with memory leak - Take more attention here
  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    async function loadData() {
      setLoading(true);

      const collectionRef = await collection(db, docCollection);

      try {
        // query
        let q;
        if (search) {
          q = await query(collectionRef, where("tags", "array-contains", search), orderBy("createdAt", "desc"));
        } else {
          q = await query(collectionRef, orderBy("createdAt", "desc"));
        }

        await onSnapshot(q, (querySnapshot) => {
          setDocuments(
            querySnapshot.docs.map((doc) => ({
              // getting the information - id from the document
              id: doc.id,
              ...doc.data(),
            }))
          );
        });

        setLoading(false);
      } catch (e) {
        console.log(e);
        setError(error.message);
        setLoading(false);
      }
    }
    loadData();
  }, [docCollection, search, uid, cancelled]);

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { documents, loading, error };
};
