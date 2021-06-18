//Firebase Authentication
/*
    Register: firebase.auth().createUserWithEmailAndPassword("email","password");
    Login: firebase.auth().signInWithEmailAndPassword("email","password");
    Logout: firebase.auth().signOut();
    showCurrentUser: firebase.auth().currentUser;
    updateUserInfo: firebase.auth().currentUser.updateProfile({...});
    changeStatus: onAuthStateChanged;
*/

//Firebase Cloud Firestore
/*
    function addUser(_name,_age,_address) {
        firebase.firestore().collection("users").add({
            name: _name,
            age: _age,
            address: _address
        });
    }
*/