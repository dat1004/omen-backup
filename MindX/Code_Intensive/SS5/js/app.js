//Firebase Cloud Firestore

//Create: chi tao 1 document
function addUser(_name, _age, _address) {
  firebase.firestore().collection("users").add({
    name: _name,
    age: _age,
    address: _address,
  });
}

//Read
//Read 1 document by Id
async function getUserById(_id) {
  //chỗ nào có promise -> có await -> function có async
  let response = await firebase.firestore().collection("users").doc(_id).get();
  console.log(response.data());
}
//Read all documents in 1 collection
async function getAllUsers() {
  let response = await firebase.firestore().collection("users").get();
  for (let doc of response.docs) {
    let data = doc.data();
    data.id = doc.id;
    console.log(data);
  }
}

//Read documents in 1 collection with condition
async function getUsersWithCondition() {
  //lay ra users co age >=30
  let response = await firebase
    .firestore()
    .collection("users")
    .where("age", ">=", 30)
    .get();
  for (let doc of response.docs) {
    let data = doc.data();
    data.id = doc.id;
    console.log(data);
  }
}
