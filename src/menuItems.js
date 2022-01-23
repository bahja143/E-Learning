const menuItem = [
  { id: 1, name: "Home" },
  {
    id: 2,
    name: "All Course",
    children: [
      { id: 1, name: "Courses" },
      { id: 2, name: "Course Detail" },
    ],
  },
  {
    id: 3,
    name: "Pages",
    children: [
      { id: 1, name: "About" },
      { id: 2, name: "Register" },
      { id: 3, name: "Login" },
    ],
  },
  {
    id: 4,
    name: "Blog",
    children: [
      { id: 1, name: "Blog" },
      { id: 2, name: "Blog Detail" },
    ],
  },
];

export default menuItem;
