export async function register(name, email, password) {
  await firebase.auth().createUserWithEmailAndPassword(email, password); //kha nang gap loi: email trung
  await firebase.auth().currentUser.updateProfile({
    displayName: name,
  });

  //luu document voi id la user's uid
  // await firebase.firestore().collection("users").add({ //auto generate uid for doc
  //   name: name,
  //   status: "free",
  //   currentConversation: "",
  // });

  //lay user's uid va gan cho document
  let docId = firebase.auth().currentUser.uid;
  //set = add || update
  await firebase.firestore().collection("users").doc(docId).set({
    //manually generate uid for doc
    name: name,
    status: "free",
    currentConversation: "",
  });
}

export async function login(email, password) {
  await firebase.auth().signInWithEmailAndPassword(email, password);
}

export function authStateChanged(callback) {
  //dang ky dang nhap dang xuat
  firebase.auth().onAuthStateChanged((user) => {
    callback(user);
  });
}
