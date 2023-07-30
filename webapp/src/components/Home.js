import { Button } from 'antd';

function Home() {

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