import { useEffect, useState } from 'react';
import { ui, uiConfig } from "../firebase/fbconfig";
import signup_hero from "../photos/signup_hero.jpg"
import signup_hero_vertical from "../photos/signup_hero_vertical.jpg"
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import signup_styles from "../styles/signup_styles.css";

const antIcon = (
    <LoadingOutlined
        style={{
            fontSize: 24,
        }}
        spin
    />
);

function SignUp() {

    useEffect(() => ui.start('#firebaseui-auth-container', uiConfig), []);
    const [imageSrc, setImageSrc] = useState(signup_hero); // Initial image source

    useEffect(() => {
        // Function to detect the device orientation and set the image source accordingly
        const handleOrientationChange = () => {
            if (window.matchMedia("(orientation: portrait)").matches) {
                setImageSrc(signup_hero_vertical); // Switch to vertical image if portrait orientation
            } else {
                setImageSrc(signup_hero); // Use default image for landscape orientation
            }
        };

        // Add event listener to handle orientation changes
        window.addEventListener("orientationchange", handleOrientationChange);

        // Call the function initially to set the initial image based on the current orientation
        handleOrientationChange();

        // Clean up the event listener when the component is unmounted
        return () => {
            window.removeEventListener("orientationchange", handleOrientationChange);
        };
    }, []);
    return (

        <div>
            <div class="parent-container">
                <img src={imageSrc} className={"hero"} />
                <h1 className={'header'}>Login</h1>
                <div id="firebaseui-auth-container" ></div>
                <div id="loader"><Spin indicator={antIcon} /></div>
            </div>
        </div>
    );
}

export default SignUp;