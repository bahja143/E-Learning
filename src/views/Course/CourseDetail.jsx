import React from "react";
import { Container, Grid, ButtonUnstyled, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";

import colors from "../../config/colors";
import Header from "../../components/layout/Header";

const useStyles = makeStyles({
  container: {
    padding: "75px 0",
  },
  img: {
    width: "100%",
    objectFit: "cover",
    borderRadius: 15,
    marginBottom: 25,
  },
  playIcon: {
    color: colors.white,
    fontSize: 25,
  },
  playButton: {
    backgroundColor: colors.primary,
    width: 65,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    position: "absolute",
    "&:hover": {
      cursor: "pointer",
    },
  },
  videoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  categoryText: {
    fontSize: 16,
    fontFamily: "Roboto",
    fontWeight: "400",
    color: colors.white,
  },
  categoryContainer: {
    display: "inline-block",
    backgroundColor: colors.yellow,
    padding: "6px 20px",
    borderRadius: 5,
    position: "relative",
    top: -70,
    left: 20,
  },
  heading: {
    fontFamily: "Roboto",
    fontSize: 22.5,
    fontWeight: "500",
    position: "relative",
    top: -35,
    lineHeight: 1.4,
  },
  teacher: {
    width: 55,
    height: 55,
    borderRadius: 100,
  },
  name: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "500",
    marginLeft: 17,
    marginRight: 20,
  },
  verticalSymbol: {
    color: "#d3d3d6",
    position: "relative",
    top: 16,
  },
  enrollments: {
    fontFamily: "Roboto",
    fontSize: 15,
    fontWeight: "400",
    color: colors.primary,
    marginLeft: 22.5,
    position: "relative",
    top: 5.5,
  },
  enrollmentsMobile: {
    position: "relative",
    top: -28,
    left: -5,
  },
  teacherContainer: {
    width: "100%",
    position: "relative",
    top: -35,
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 28,
    fontWeight: "500",
  },
  text: {
    fontFamily: "Roboto",
    color: colors.lightBlack,
    lineHeight: 1.75,
    wordSpacing: 1.25,
  },
  info: {
    backgroundColor: "rgba(37, 150, 190, 0.1)",
    borderRadius: 10,
    border: "1.5px solid rgba(37, 150, 190, 0.3)",
    padding: "65px 25px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  price: {
    display: "inline-block",
    fontFamily: "Roboto",
    color: colors.primary,
    fontSize: 35,
    fontWeight: "700",
    position: "relative",
    top: -30,
  },
  icon: {
    color: colors.primary,
    marginRight: 5,
  },
  instructor: {
    fontFamily: "Roboto",
    fontSize: 17,
    fontWeight: "400",
  },
  instructorName: {
    fontFamily: "Roboto",
    color: colors.lightBlack,
  },
  instructorContainer: {
    borderTop: `1.25px solid #d3d3d6`,
    padding: "15px 0",
  },
  btn: {
    display: "flex",
    width: 150,
    height: 55,
    color: colors.white,
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "500",
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    border: 0,
    position: "relative",
    top: 30,
    transition: "background-color .75s",
    "&:hover": {
      backgroundColor: colors.black,
      cursor: "pointer",
    },
  },
  instrInfoContainer: {},
  descriptionContainer: {
    position: "relative",
    top: -50,
  },
  nav: {
    fontFamily: "Roboto",
    fontSize: 19,
    fontWeight: "500",
    marginBottom: 25,
  },
  brand: {
    color: colors.primary,
    marginLeft: 5,
  },
  navItem: {
    display: "inline-block",
    marginRight: 5,
    transition: "color .3s",
    "&:hover": {
      color: colors.primary,
      cursor: "pointer",
    },
  },
  titleNav: {
    fontFamily: "Roboto",
    fontSize: 31,
    fontWeight: "500",
    marginTop: -0.1,
  },
  header: {
    padding: "40px 0",
  },
  iconAward: {
    color: colors.white,
    fontSize: 60,
  },
  awardContainer: {
    backgroundColor: colors.primary,
    width: 50,
    height: 50,
    padding: 25,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const CourseDetail = () => {
  const classes = useStyles();
  const mobile = useMediaQuery("(max-width:768px)");

  return (
    <>
      <Header>
        <Container className={classes.header}>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Grid container flexDirection="column">
                <Grid item>
                  <p className={classes.nav}>
                    <span className={classes.navItem}>Home </span> //
                    <span className={classes.brand}>Courses Details</span>
                  </p>
                </Grid>
                <Grid item>
                  <p className={classes.titleNav}>
                    Courses <span className={classes.brand}>Details</span>
                  </p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <div className={classes.awardContainer}>
                <i className={`fas fa-award ${classes.iconAward}`} />
              </div>
            </Grid>
          </Grid>
        </Container>
      </Header>
      <Container className={classes.container}>
        <Grid container spacing={8}>
          <Grid item xl={8} xs={12} sm={6}>
            <Grid container>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={12}>
                    <div className={classes.videoContainer}>
                      <div className={classes.playButton}>
                        <i className={`fas fa-play ${classes.playIcon}`} />
                      </div>
                      <img
                        src="https://template.hasthemes.com/edule/eduLe/assets/images/courses/courses-details.jpg"
                        className={classes.img}
                        alt="thumbnail"
                      />
                    </div>
                    <div className={classes.categoryContainer}>
                      <span className={classes.categoryText}>Finance</span>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <p className={classes.heading}>
                      Finance & Investment Series: Learn to Budget and Calculate
                      Your Net Worth.
                    </p>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Grid
                  container
                  className={classes.teacherContainer}
                  justifyContent="center"
                >
                  <Grid item xs={2} xl={0.8} sm={1.5}>
                    <img
                      className={classes.teacher}
                      src="https://template.hasthemes.com/edule/eduLe/assets/images/author/author-01.jpg"
                      alt="Teacher"
                    />
                  </Grid>

                  <Grid
                    item
                    xs={10}
                    xl={11.2}
                    sm={10.5}
                    className={classes.instrInfoContainer}
                  >
                    <Grid container>
                      <Grid item>
                        <p className={classes.name}>Pamela Foster</p>
                      </Grid>
                      <Grid item>
                        <span className={classes.verticalSymbol}> &#124;</span>
                        <span className={classes.verticalSymbol}> &#124;</span>
                      </Grid>
                      <Grid item>
                        <p
                          className={`${classes.enrollments} ${
                            mobile && classes.enrollmentsMobile
                          }`}
                        >
                          286 Enrolled Students
                        </p>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} className={classes.descriptionContainer}>
                <p className={classes.title}> Description:</p>
                <p className={classes.text}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <p className={classes.text}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularsed in the 1960 with
                  release containing Lorem Ipsum passages desktop publishing
                  software.
                </p>

                <p className={classes.title}>Curriculum:</p>
                <p className={classes.text}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularsed in the 1960 with
                  release containing Lorem Ipsum passages desktop publishing
                  software.
                </p>

                <p className={classes.title}>Certification:</p>
                <p className={classes.text}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularsed in the 1960 with
                  release containing Lorem Ipsum passages desktop publishing
                  software.
                </p>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xl={4} xs={12} sm={6}>
            <div className={classes.info}>
              <span className={classes.price}>$420.38</span>

              <Grid container>
                <Grid item xl={12} xs={12}>
                  <Grid
                    container
                    justifyContent="space-between"
                    className={classes.instructorContainer}
                  >
                    <Grid item>
                      <i className={`fas fa-user-tie ${classes.icon}`} />
                      <span className={classes.instructor}> Instructor</span>
                    </Grid>

                    <Grid item>
                      <span className={classes.instructorName}>
                        Pamela Foster
                      </span>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xl={12} xs={12}>
                  <Grid
                    container
                    justifyContent="space-between"
                    className={classes.instructorContainer}
                  >
                    <Grid item>
                      <i className={`fas fa-clock ${classes.icon}`} />
                      <span className={classes.instructor}> Duration</span>
                    </Grid>

                    <Grid item>
                      <span className={classes.instructorName}>
                        08 hr 15 mins
                      </span>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xl={12} xs={12}>
                  <Grid
                    container
                    justifyContent="space-between"
                    className={classes.instructorContainer}
                  >
                    <Grid item>
                      <i className={`fas fa-film ${classes.icon}`} />
                      <span className={classes.instructor}> Lectures</span>
                    </Grid>

                    <Grid item>
                      <span className={classes.instructorName}>29</span>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xl={12} xs={12}>
                  <Grid
                    container
                    justifyContent="space-between"
                    className={classes.instructorContainer}
                  >
                    <Grid item>
                      <i className={`fas fa-book ${classes.icon}`} />
                      <span className={classes.instructor}> Language</span>
                    </Grid>

                    <Grid item>
                      <span className={classes.instructorName}>English</span>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xl={12} xs={12}>
                  <Grid
                    container
                    justifyContent="space-between"
                    className={classes.instructorContainer}
                  >
                    <Grid item>
                      <i className={`fas fa-signal ${classes.icon}`} />
                      <span className={classes.instructor}> Level</span>
                    </Grid>

                    <Grid item>
                      <span className={classes.instructorName}>Secondary</span>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xl={12} xs={12}>
                  <Grid
                    container
                    justifyContent="space-between"
                    className={classes.instructorContainer}
                  >
                    <Grid item>
                      <i className={`fas fa-certificate ${classes.icon}`} />
                      <span className={classes.instructor}> Certificate</span>
                    </Grid>

                    <Grid item>
                      <span className={classes.instructorName}>Yes</span>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <ButtonUnstyled variant="contained" className={classes.btn}>
                Enroll Now
              </ButtonUnstyled>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CourseDetail;
