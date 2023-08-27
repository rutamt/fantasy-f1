import React from "react";
export const Banner00DataSource = {
  wrapper: { className: "banner0 llldykrsl7t-editor_css" },
  textWrapper: { className: "banner0-text-wrapper" },
  title: {
    className: "banner0-title llle34mm6jq-editor_css",
    children: <p>Welcome to Fantasy F1!</p>,
  },
  content: {
    className: "banner0-content llldzu5xmc-editor_css",
    children: (
      <p>
        On the Fantasy F1 platform, we bring you a thrilling fusion of fantasy
        F1 racing and business management. Step into the shoes of a team owner
        and unleash your inner entrepreneur as you strive to conquer the world
        of Formula 1 and emerge as the most prosperous team owner.
      </p>
    ),
  },
  button: {
    className: "banner0-button llldzvllwm-editor_css",
    children: "Learn More",
  },
};
export const Feature00DataSource = {
  wrapper: { className: "home-page-wrapper content0-wrapper" },
  page: { className: "home-page content0" },
  OverPack: { playScale: 0.3, className: "" },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: <p>Features</p>,
      },
    ],
  },
  childWrapper: {
    className: "content0-block-wrapper",
    children: [
      {
        name: "block0",
        className: "content0-block",
        md: 8,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon",
              children:
                "https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png",
            },
            {
              name: "title",
              className: "content0-block-title",
              children: <p>Strategic Financial Management</p>,
            },
            {
              name: "content",
              children: (
                <p>
                  {" "}
                  Begin with a fixed budget and strategically allocate funds to
                  build your racing empire. Your business acumen will be tested
                  as you make wise investment decisions for maximum returns.
                </p>
              ),
            },
          ],
        },
      },
      {
        name: "block1",
        className: "content0-block",
        md: 8,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon",
              children:
                "https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png",
            },
            {
              name: "title",
              className: "content0-block-title",
              children: <p>Race for Profits</p>,
            },
            {
              name: "content",
              children: (
                <p>
                  Participate in thrilling races and earn money based on your
                  team's performance. Each race is an opportunity to improve
                  your financial standing and climb to the top of the rankings.
                </p>
              ),
            },
          ],
        },
      },
      {
        name: "block2",
        className: "content0-block",
        md: 8,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon",
              children:
                "https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png",
            },
            {
              name: "title",
              className: "content0-block-title",
              children: <p>League Competitions</p>,
            },
            {
              name: "content",
              children: (
                <p>
                  {" "}
                  Engage in head-to-head competition with friends by joining or
                  creating leagues. Showcase your skills in transforming racing
                  success into financial dominance, making every race count in
                  the pursuit of victory.
                </p>
              ),
            },
          ],
        },
      },
    ],
  },
};
export const Feature60DataSource = {
  wrapper: { className: "home-page-wrapper feature6-wrapper" },
  OverPack: { className: "home-page feature6", playScale: 0.3 },
  Carousel: {
    className: "feature6-content",
    dots: false,
    wrapper: { className: "feature6-content-wrapper" },
    titleWrapper: {
      className: "feature6-title-wrapper",
      barWrapper: {
        className: "feature6-title-bar-wrapper",
        children: { className: "feature6-title-bar" },
      },
      title: { className: "feature6-title" },
    },
    children: [
      {
        title: {
          className: "feature6-title-text",
          children: <p>Next race</p>,
        },
        className: "feature6-item",
        name: "block0",
        children: [
          {
            md: 8,
            xs: 24,
            className: "feature6-number-wrapper",
            name: "child0",
            number: {
              className: "feature6-number",
              unit: {
                className: "feature6-unit",
                children: <p>Days</p>,
              },
              toText: true,
              children: "116",
            },
            children: {
              className: "feature6-text",
              children: (
                <p>
                  <br />
                </p>
              ),
            },
          },
          {
            md: 8,
            xs: 24,
            className: "feature6-number-wrapper",
            name: "child1",
            number: {
              className: "feature6-number",
              unit: {
                className: "feature6-unit",
                children: <p>Minutes</p>,
              },
              toText: true,
              children: "1.17",
            },
            children: {
              className: "feature6-text",
              children: (
                <p>
                  <br />
                </p>
              ),
            },
          },
          {
            md: 8,
            xs: 24,
            className: "feature6-number-wrapper",
            name: "child2",
            number: {
              className: "feature6-number",
              unit: {
                className: "feature6-unit",
                children: <p>Seconds</p>,
              },
              toText: true,
              children: "2.10",
            },
            children: {
              className: "feature6-text",
              children: (
                <p>
                  <br />
                </p>
              ),
            },
          },
        ],
      },
    ],
  },
};
export const Content110DataSource = {
  OverPack: {
    className: "home-page-wrapper content11-wrapper",
    playScale: 0.3,
  },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: <p>What are you waiting for?</p>,
        className: "title-h1",
      },
      {
        name: "content",
        children: <p>Play Fantasy F1 now!</p>,
        className: "title-content",
      },
    ],
  },
  button: {
    className: "",
    children: {
      a: {
        className: "button",
        href: "#",
        children: <p>Play now</p>,
      },
    },
  },
};
