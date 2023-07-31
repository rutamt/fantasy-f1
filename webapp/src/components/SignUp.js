import { Button, Layout } from 'antd';
import { useEffect } from 'react';

import { ui, uiConfig } from "../firebase/fbconfig";

function SignUp() {

    useEffect(() => ui.start('#firebaseui-auth-container', uiConfig), []);

    return (

        <div>

            <div id="firebaseui-auth-container" ></div>
            <div id="loader">Loading...</div>

            <Button type="link" href="/" block>
                Home
            </Button>

        </div>
    );
}

export default SignUp;