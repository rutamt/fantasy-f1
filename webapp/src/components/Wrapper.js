import { Menu, Layout } from 'antd';
import { SwapRightOutlined, CarOutlined } from "@ant-design/icons";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const { Content, Footer, Header } = Layout;


function Wrapper({ children }) {

    const auth = getAuth();
    const user = auth.currentUser;
    console.log(user);

    function FbSignOut() {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("Signed out")
        }).catch((error) => {
            // An error happened.
            console.log(error)
        });

    }
    const items = [
        {
            label: <a href="/" rel="noopener noreferrer">F1 Fantasy</a>

        },
        {
            label: <a href="/home" rel="noopener noreferrer">Home</a>,
            key: 'mail',
            icon: <SwapRightOutlined />,
        },

    ];

    // If user is signed in, display log out button
    if (user) {
        console.log(`User: ${user}`)
        items.push({
            label: "Sign out",
            key: 'alipay',
            onClick: FbSignOut(),
        },)
    }
    // If no user, display signup button
    else {
        console.log("No User")
        items.push({
            label: (
                <a href="/signup" rel="noopener noreferrer">

                    Login
                </a>
            ),
            key: 'alipay',
        },)
    }

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
                    <Menu theme="dark" mode="horizontal" items={items} defaultSelectedKeys={1} />;
                </Header>

                <Content>
                    {children}
                </Content>

                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©2023 Created by Ant UED
                </Footer>
            </Layout>

        </div>
    )
}


export default Wrapper;
