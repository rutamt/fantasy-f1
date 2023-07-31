import { getAuth, onAuthStateChanged } from "firebase/auth";


function FbUser() {
    const auth = getAuth();
    let User = null;
    onAuthStateChanged(auth, (FbUser) => {
        if (FbUser) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = FbUser.uid;
            // ...
            console.log("Returning FBUSEr in FBUSER.JS")
            User = FbUser
        } else {
            // User is signed out
            // ...
            console.log("Returning FBUSEr as null in FBUSER.JS")
        }
    });

    return User;
}
export default FbUser;