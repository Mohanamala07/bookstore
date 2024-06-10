const navItems = [
    {
        id: "1",
        type: "1",
        title: "Home",
        basepath: "javascript:void(0);",
        links: [],
    },
    {
        id: "2",
        type: "1",
        title: "Categories",
        basepath: "javascript:void(0);",
        links: [
            { path: "/", link: "Fiction" },
            { path: "/about-institution", link: "non-fiction" },
            { path: "/vision", link: "Children's books" },
            { path: "/milestones", link: "Academic & Educational" },
            { path: "/milestones", link: "Comics & Graphic Novels" },
        ],
    },
    {
        id: "3",
        type: "1",
        title: "Special Sections",
        basepath: "javascript:void(0);",
        links: [
            { path: "/", link: "New releases" },
            { path: "/about-institution", link: "Bestsellers" },
            { path: "/vision", link: "Award Winners" },
            { path: "/milestones", link: "Staff picks" },
        ],
    },
    {
        id: "4",
        type: "2", // Type 2 for search bar
        title: "",
        basepath: "javascript:void(0);",
        links: [], // No links inside the search bar
    },
];

export { navItems };
