import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button, List, Typography } from 'antd';

import index_styles from "../styles/index_styles.css";

const { Title } = Typography;
const f1_hero = "/images/f1_hero.jpg";
const f1_hero_vertical = "/images/f1-hero-vertical.jpg";

// Importing icons
const competition = "/images/icons/competition.png"
const money = "/images/icons/money.png"
const expense = "/images/icons/expense.png"
const race = "/images/icons/race.png"
const decision = "/images/icons/decision.png"



function Index() {
    const [imageSrc, setImageSrc] = useState(f1_hero); // Initial image source

    useEffect(() => {
        // Function to detect the device orientation and set the image source accordingly
        const handleOrientationChange = () => {
            if (window.matchMedia("(orientation: portrait)").matches) {
                setImageSrc(f1_hero_vertical); // Switch to vertical image if portrait orientation
            } else {
                setImageSrc(f1_hero); // Use default image for landscape orientation
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

    const listData = [
        {
            "title": "Start with a budget",
            "content": "You'll begin with a fixed amount of money to build your racing empire. Your keen business acumen will be put to the test as you allocate funds wisely for maximum returns.",
            "icon": money,
        },
        {
            "title": "Race and Earn",
            "content": "Participate in every exhilarating race of the season and earn money based on your team's performance. Each race is an opportunity to boost your financial standing and race to the top.",
            "icon": race,
        },
        {
            "title": "Operational Expenses",
            "content": "Success comes at a cost. Manage your team's operating expenses wisely; these must be paid promptly after each race. Failure to meet expenses can result in crucial downgrades that could set you back.",
            "icon": expense,
        },
        {
            "title": "Strategic Decisions",
            "content": "Make tactical decisions on upgrading your team and car components to achieve consistent success. Invest smartly in the right areas to propel your team forward.",
            "icon": decision,
        },
        {
            "title": "League Competitions",
            "content": "Create or join leagues with your friends and compete head-to-head to see who can master the art of turning racing success into financial dominance.",
            "icon": competition,
        },
    ]
    return (
        <div className="App">
            <article className="article">
                <picture className="picture">
                    <source media="(min-width: 0px)" srcSet={imageSrc} />
                    <img src={imageSrc} className="image" alt="Race car on track" />
                </picture>
                <div className="header-container">
                    <Row justify="center" align="middle">
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <Title >Welcome to F1 Manager</Title>
                            <Title level={2}>
                                On the Fantasy F1 platform, we bring you a thrilling fusion of fantasy F1 racing and business management. Step into the shoes of a team owner and unleash your inner entrepreneur as you strive to conquer the world of Formula 1 and emerge as the most prosperous team owner.
                            </Title>
                            <Button><Link to="/signup">Get Started</Link></Button>
                        </Col>
                    </Row>
                </div>
            </article>
            <List itemLayout='vertical' size='large' dataSource={listData} renderItem={(item) =>
                <List.Item extra={<img width={200} src={item.icon} alt="Icon" />}>
                    <List.Item.Meta title={<h2 className='list-header'>{item.title}</h2>} />
                    <p className='list-content'>{item.content}</p>
                </List.Item>
            }
            />
        </div>
    );
}

export default Index;
