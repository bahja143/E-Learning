import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Container, Grid, useMediaQuery, ButtonUnstyled } from "@mui/material";

import colors from "../../config/colors";
import Image from "../../assets/Student.png";

import Header from "../../components/layout/Header";
import Card from "../../components/Common/Card";
import Pagination from "../../components/Common/Pagination";
import GuideCard from "../../components/Common/GuideCard";

import paginate from "../../utility/paginate";

const useStyles = makeStyles({
  img: {
    height: 500,
    position: "relative",
    top: 4,
  },
  imgMobile: {
    width: "100%",
    height: "100%",
  },
  favoriteText: {
    fontSize: 22,
    fontFamily: "Roboto",
    fontWeight: "500",
    color: colors.primary,
    position: "relative",
    top: 10,
  },
  heading: {
    fontSize: 45,
    fontFamily: "Roboto",
    fontWeight: "500",
    position: "relative",
    top: -35,
  },
  text: {
    fontFamily: "Roboto",
    fontSize: 18,
    color: colors.lightBlack,
    lineHeight: 1.75,
    wordSpacing: 2.25,
    position: "relative",
    top: -65,
  },
  btn: {
    display: "flex",
    width: 180,
    height: 57,
    color: colors.white,
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "500",
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    position: "relative",
    top: -60,
    border: 0,
    transition: "background-color .75s",
    "&:hover": {
      backgroundColor: colors.black,
      cursor: "pointer",
    },
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 35,
    fontWeight: "500",
  },
  brand: {
    color: colors.primary,
  },
  search: {
    marginTop: 75,
  },
  inputContainer: {
    border: `1.5px solid rgba(37, 150, 190, 0.25)`,
    width: 325,
    height: 50,
    borderRadius: 8,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputMargin: {
    marginTop: 20,
  },
  input: {
    width: "98%",
    height: "98%",
    border: 0,
    margin: "0 15px",
    fontFamily: "Roboto",
    fontSize: 17,
    "&:focus": {
      outline: 0,
    },
  },
  searchIcon: {
    color: colors.primary,
    fontSize: 17,
  },
  iconContainer: {
    width: 55,
    height: 45,
    backgroundColor: "rgba(37, 150, 190, 0.1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 6,
    borderRadius: 7,
    "&:hover": {
      cursor: "pointer",
    },
  },
  courses: {
    marginTop: 75,
    display: "flex",
    justifyContent: "center",
    paddingBottom: 50,
  },
  pagination: {
    paddingBottom: 50,
  },
  subTitle: {
    fontFamily: "Roboto",
    fontSize: 35,
    textAlign: "center",
    fontWeight: "500",
    marginTop: 80,
  },
  guide: {
    paddingBottom: 75,
  },
  iconGuide: {
    color: colors.primary,
    position: "relative",
    top: 125,
    fontSize: 25,
  },
});

const data = [
  {
    id: 1,
    title: "Data Science and Machine Learning with Python - Hands On!",
    price: "385.00",
    category: "Science",
    image:
      "https://template.hasthemes.com/edule/eduLe/assets/images/courses/courses-01.jpg",
    instructor: {
      name: "Jason Williams",
      image:
        "https://template.hasthemes.com/edule/eduLe/assets/images/author/author-01.jpg",
    },
  },
  {
    id: 2,
    title: "Create Amazing Color Schemes for Your UX Design Projects",
    price: "420.00",
    category: "Science",
    image:
      "https://template.hasthemes.com/edule/eduLe/assets/images/courses/courses-02.jpg",
    instructor: {
      name: "Pamela Foster",
      image:
        "https://template.hasthemes.com/edule/eduLe/assets/images/author/author-02.jpg",
    },
  },
  {
    id: 3,
    title: "Culture & Leadership: Strategies for a Successful Business",
    price: "295.00",
    category: "Science",
    image:
      "https://template.hasthemes.com/edule/eduLe/assets/images/courses/courses-03.jpg",
    instructor: {
      name: "Rose Simmons",
      image:
        "https://template.hasthemes.com/edule/eduLe/assets/images/author/author-03.jpg",
    },
  },
  {
    id: 4,
    title: "Finance Series: Learn to Budget and Calculate your Net Worth.",
    price: "0",
    category: "Finance",
    image:
      "https://template.hasthemes.com/edule/eduLe/assets/images/courses/courses-04.jpg",
    instructor: {
      name: "Rose Simmons",
      image:
        "https://template.hasthemes.com/edule/eduLe/assets/images/author/author-04.jpg",
    },
  },
  {
    id: 5,
    title: "Build Brand Into Marketing: Tackling the New Marketing Landscape",
    price: "136.00",
    category: "Marketing",
    image:
      "https://template.hasthemes.com/edule/eduLe/assets/images/courses/courses-05.jpg",
    instructor: {
      name: "Jason Williams",
      image:
        "https://template.hasthemes.com/edule/eduLe/assets/images/author/author-05.jpg",
    },
  },
  {
    id: 6,
    title:
      "Graphic Design: Illustrating Badges and Icons with Geometric Shapes",
    price: "237.00",
    category: "Marketing",
    image:
      "https://template.hasthemes.com/edule/eduLe/assets/images/courses/courses-06.jpg",
    instructor: {
      name: "Jason Williams",
      image:
        "https://template.hasthemes.com/edule/eduLe/assets/images/author/author-06.jpg",
    },
  },
  {
    id: 7,
    title: "Data Science and Machine Learning with Python - Hands On!",
    price: "385.00",
    category: "Science",
    image:
      "https://template.hasthemes.com/edule/eduLe/assets/images/courses/courses-01.jpg",
    instructor: {
      name: "Jason Williams",
      image:
        "https://template.hasthemes.com/edule/eduLe/assets/images/author/author-01.jpg",
    },
  },
  {
    id: 8,
    title: "Create Amazing Color Schemes for Your UX Design Projects",
    price: "420.00",
    category: "Science",
    image:
      "https://template.hasthemes.com/edule/eduLe/assets/images/courses/courses-02.jpg",
    instructor: {
      name: "Pamela Foster",
      image:
        "https://template.hasthemes.com/edule/eduLe/assets/images/author/author-02.jpg",
    },
  },
  {
    id: 9,
    title: "Culture & Leadership: Strategies for a Successful Business",
    price: "295.00",
    category: "Science",
    image:
      "https://template.hasthemes.com/edule/eduLe/assets/images/courses/courses-03.jpg",
    instructor: {
      name: "Rose Simmons",
      image:
        "https://template.hasthemes.com/edule/eduLe/assets/images/author/author-03.jpg",
    },
  },
  {
    id: 10,
    title: "Finance Series: Learn to Budget and Calculate your Net Worth.",
    price: "0",
    category: "Finance",
    image:
      "https://template.hasthemes.com/edule/eduLe/assets/images/courses/courses-04.jpg",
    instructor: {
      name: "Rose Simmons",
      image:
        "https://template.hasthemes.com/edule/eduLe/assets/images/author/author-04.jpg",
    },
  },
  {
    id: 11,
    title: "Build Brand Into Marketing: Tackling the New Marketing Landscape",
    price: "136.00",
    category: "Marketing",
    image:
      "https://template.hasthemes.com/edule/eduLe/assets/images/courses/courses-05.jpg",
    instructor: {
      name: "Jason Williams",
      image:
        "https://template.hasthemes.com/edule/eduLe/assets/images/author/author-05.jpg",
    },
  },
  {
    id: 12,
    title:
      "Graphic Design: Illustrating Badges and Icons with Geometric Shapes",
    price: "237.00",
    category: "Marketing",
    image:
      "https://template.hasthemes.com/edule/eduLe/assets/images/courses/courses-06.jpg",
    instructor: {
      name: "Jason Williams",
      image:
        "https://template.hasthemes.com/edule/eduLe/assets/images/author/author-06.jpg",
    },
  },
  {
    id: 13,
    title: "Finance Series: Learn to Budget and Calculate your Net Worth.",
    price: "0",
    category: "Finance",
    image:
      "https://template.hasthemes.com/edule/eduLe/assets/images/courses/courses-04.jpg",
    instructor: {
      name: "Rose Simmons",
      image:
        "https://template.hasthemes.com/edule/eduLe/assets/images/author/author-04.jpg",
    },
  },
  {
    id: 14,
    title: "Build Brand Into Marketing: Tackling the New Marketing Landscape",
    price: "136.00",
    category: "Marketing",
    image:
      "https://template.hasthemes.com/edule/eduLe/assets/images/courses/courses-05.jpg",
    instructor: {
      name: "Jason Williams",
      image:
        "https://template.hasthemes.com/edule/eduLe/assets/images/author/author-05.jpg",
    },
  },
  {
    id: 15,
    title:
      "Graphic Design: Illustrating Badges and Icons with Geometric Shapes",
    price: "237.00",
    category: "Marketing",
    image:
      "https://template.hasthemes.com/edule/eduLe/assets/images/courses/courses-06.jpg",
    instructor: {
      name: "Jason Williams",
      image:
        "https://template.hasthemes.com/edule/eduLe/assets/images/author/author-06.jpg",
    },
  },
];

const howItWorks = [
  {
    id: 1,
    title: "Find Your Course",
    text: "It has survived not only centurie also leap into electronic.",
    icon: "search",
  },
  {
    id: 2,
    type: "arrow",
  },
  {
    id: 3,
    title: "Book A Seat",
    text: "It has survived not only centurie also leap into electronic.",
    icon: "file-alt",
  },
  {
    id: 4,
    type: "arrow",
  },
  {
    id: 5,
    title: "Get Certificate",
    text: "It has survived not only centurie also leap into electronic.",
    icon: "award",
  },
];

const Home = () => {
  const classes = useStyles();
  const mobile = useMediaQuery("(max-width:1024px)");
  const exactMobile = useMediaQuery("(max-width:375px)");

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(3);
  const [courses] = useState(data);
  const [paginatedData, setData] = useState(
    paginate(courses, pageSize, currentPage)
  );

  const handleCurrentPage = (page) => {
    setData(paginate(courses, pageSize, page));
    setCurrentPage(page);
  };

  return (
    <>
      <Header>
        <Container>
          <Grid container flexDirection="row" justifyContent="center">
            <Grid item xl={6} sm={6} lg={5}>
              <Grid container flexDirection="column">
                <Grid item xl={12}>
                  <p className={classes.favoriteText}>
                    Start your favourite course
                  </p>
                </Grid>
                <Grid item xl={12}>
                  <p className={classes.heading}>
                    Now learning from anywhere, and build your bright career.
                  </p>
                </Grid>
                <Grid item xl={12}>
                  <p className={classes.text}>
                    It has survived not only five centuries but also the leap
                    into electronic typesetting.
                  </p>
                </Grid>
                <Grid item xl={12}>
                  <ButtonUnstyled variant="contained" className={classes.btn}>
                    Start A Course
                  </ButtonUnstyled>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xl={6} sm={6} lg={7}>
              <img
                className={mobile ? classes.imgMobile : classes.img}
                src={Image}
                alt="Student with a book"
              />
            </Grid>
          </Grid>
        </Container>
      </Header>

      <Container>
        <Grid
          container
          justifyContent="space-between"
          className={classes.search}
        >
          <Grid item>
            <span className={classes.title}>
              All <span className={classes.brand}>Courses</span> of Iqra
            </span>
          </Grid>
          <Grid item>
            <div
              className={
                exactMobile
                  ? `${classes.inputContainer} ${classes.inputMargin}`
                  : classes.inputContainer
              }
            >
              <input
                type="text"
                className={classes.input}
                placeholder="Search your course"
              />
              <div className={classes.iconContainer}>
                <i className={`fas fa-search ${classes.searchIcon}`}></i>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>

      <Container className={classes.courses}>
        <Grid container spacing={4}>
          {paginatedData.map((c) => (
            <Grid item xl={4} sm={6} lg={4} xs={12} key={c.id}>
              <Card course={c} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container className={classes.pagination}>
        <Pagination
          count={courses.length}
          pageSize={pageSize}
          currentPage={currentPage}
          handleCurrentPage={handleCurrentPage}
        />
      </Container>

      <Container>
        <p className={classes.subTitle}>
          How It <span className={classes.brand}>Works</span>
        </p>

        <Grid
          container
          className={classes.guide}
          spacing={4}
          justifyContent="center"
        >
          {howItWorks.map((h) =>
            h.type ? (
              !mobile && (
                <Grid item xl={0} sm={0} key={h.id}>
                  <i className={`fas fa-chevron-right ${classes.iconGuide}`} />
                </Grid>
              )
            ) : (
              <Grid item xl={3.6} sm={3.6} key={h.id}>
                <GuideCard item={h} />
              </Grid>
            )
          )}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
