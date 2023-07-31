import { Button } from 'antd';
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Home() {
    // const auth = getAuth();
    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //         // User is signed in, see docs for a list of available properties
    //         // https://firebase.google.com/docs/reference/js/auth.user
    //         console.log("User found! HOME.JS")
    //         const uid = user.uid;
    //         console.log(`Id: ${uid} HOME.JS`)
    //         // ...
    //     } else {
    //         // User is signed out
    //         // ...
    //         console.log("Signed out? HOME.JS")
    //     }
    // });

    return (
        <div>
            <h1 className="App-link">Yay, you've signed in!</h1>

            <Button type="link" href="/" block>
                Home
            </Button>
        </div>
    );
}

export default Home;