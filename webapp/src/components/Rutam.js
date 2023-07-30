import axios from "axios";
import { Button, message } from 'antd';

function Rutam() {
    const [messageApi, contextHolder] = message.useMessage();
    const info = () => {
        axios.get("http://127.0.0.1:5000/")
            .then(function (response) {
                // handle success
                console.log(response.data);
                messageApi.info(JSON.stringify(response.data));
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });

    };



    return (
        <div className="App">
            {contextHolder}
            <h1 className="App-link">Hello world</h1>
            <Button onClick={info} type="primary">Button</Button>
            <Button type="link" href="/signup" block>
                Link
            </Button>
        </div>
    );
}

export default Rutam;