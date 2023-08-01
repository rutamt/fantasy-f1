import { Component } from 'react';
import { Menu, Layout } from 'antd';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/fbconfig";
import { Link } from 'react-router-dom';

const { Content, Footer, Header } = Layout;

class PageWrapper extends Component {

    constructor(props) {
        super(props);
        const LoginLink = <Link to="/signup">Login</Link>;
        const Signout = <div onClick={this.FbSignOut}>Sign out</div>;

        this.state = {
            firebaseUser: null,
        };
        this.state.items = [
            { label: <Link to="/" >F1 Fantasy</Link>, key: "root" },
            { label: <Link to="/home">Home</Link>, key: 'home', },
            { label: this.state.firebaseUser ? Signout : LoginLink, key: "login-out" },
        ]
    }

    componentDidMount() {
        onAuthStateChanged(auth, (user) => {
            console.log("onAuthStateChanged()", user);
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                // console.log("User found! Wrapper.js")
                // console.log(`Id: ${uid} Wrapper.js`)
                this.setState({ firebaseUser: user })
                // ...
            } else {
                // User is signed out
                // ...
                // console.log("Signed out. Wrapper.js");
                this.setState({ firebaseUser: null })
            }
        });
    }

    FbSignOut() {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("Signed out")
        }).catch((error) => {
            // An error happened.
            console.log(error)
        });

    }

    componentWillUnmount() {
        console.log("Component will unmount")
    }

    render() {
        return (
            <div>
                <Layout>
                    <Header
                        style={{
                            position: 'sticky',
                            top: 0,
                            zIndex: 1,
                            width: '100%',
                            padding: 0,
                            alignItems: 'center',
                        }}
                    >
                        <div className="demo-logo">
                        </div>
                        <Menu theme="dark" mode="horizontal" items={this.state.items} defaultSelectedKeys={1} />;
                    </Header>

                    <Content>
                        {this.props.page}
                    </Content>

                    <Footer
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        Fantasy F1 ©2023 Created by the Awesome Rutam!!
                    </Footer>
                </Layout>

            </div>
        )
    }
}


export default PageWrapper;
