export default {
  hostName: "website-yigitsh.vercel.app",
  siteName: {
    first: "yigit",
    second: "sh",
  },
  personal: {
    name: "Yiğit",
    position: "Full-stack Developer",
    description:
      "Hello 👋, I'm a student. I'm {age} years old now and I have some small projects. I spend more time from classes on my projects and cycling.",
    birthday: {
      day: process.env.BIRTHDAY,
      month: process.env.BIRTHMONTH,
      year: process.env.BIRTHYEAR,
      gmt: "GMT+3:00", // Europe/Istanbul GMT zone
      time: process.env.BIRTHTIME,
    },
    socialAccounts: [
      {
        color: "#7289da",
        textColor: "#ffffff",
        name: "Discord",
        accountId: "304347029046558721",
        url: "https://discord.com/channels/@me/304347029046558721",
      },
      {
        color: "#24292e",
        textColor: "#ffffff",
        name: "Github",
        url: "https://github.com/SherlockYigit",
      },
    ],
  },
  routes: [
    {
      invisible: true,
      name: "Home",
      description:
        "Hello, you can access my blog, portfolio or other necessary links from this page on this homepage.",
      to: "/",
    },
    {
      name: "Projects",
      description: "You can see my projects on this page.",
      to: "/projects",
    },
    {
      name: "Repositories",
      description:
        "You can see the repositories I have developed on github from this page.",
      to: "/#repos",
    },
    {
      name: "Blog",
      description: "You can see the posts I have published on this page.",
      to: "/blog",
    },
  ],
  projects: [
    {
      name: "yigitsh API",
      description: "A simple and functional API service.",
      to: "https://yigitsh-api.herokuapp.com/",
    },
  ],
  metaTags: {
    themeColor: "#0c011e",
    siteType: "personal",
    imagePath: "/avatar.webp",
  },
};
