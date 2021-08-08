import React from 'react';
import firebase from "firebase";

export default function Posts() {

  const [documents, setDocuments] = React.useState([]);
  const db = firebase.firestore();
  React.useEffect(() => {
    db.collection("Posts")
      .get()
      .then((querySnapshot) => {
        let arr = [];
        querySnapshot.docs.map((doc) =>
          arr.push({ id: doc.id, value: doc.data() })
        );
        setDocuments(arr);
      });
  }, [db]);
  
  return(<div> {documents.value.title} </div>);
  //return("hi");
}