import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Grid, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";

import colors from "../../config/colors";
// import Video from "../../assets/Madagascar.Escape.2.Africa.2008.720p.BRrip.x264.YIFY.mp4";

const useStyles = makeStyles({
  container: {
    width: "100%",
    marginTop: -22.5,
  },
  videoPlay: {
    backgroundColor: colors.white,
    borderLeft: `1.5px solid #d9d9da`,
    height: "100vh",
  },
  sideBar: {
    backgroundColor: "rgba(98, 128, 140, 0.1)",
  },
  header: {
    backgroundColor: colors.white,
    height: 93,
    borderBottom: `1.5px solid #d9d9da`,
    borderRight: `1.5px solid #d9d9da`,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "0 15px",
  },
  headerMobile: {
    backgroundColor: colors.white,
    height: 93,
    borderBottom: `1.5px solid #d9d9da`,
    borderRight: `1.5px solid #d9d9da`,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 15px",
  },
  icon: {
    color: colors.lightBlack,
    fontSize: 20,
    position: "relative",
    top: 15,
    "&:hover": {
      cursor: "pointer",
      color: "rgba(98, 128, 140, 0.75)",
    },
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 20.5,
    fontWeight: "400",
    paddingLeft: 20,
    paddingTop: 15,
  },
  chapter: {
    backgroundColor: colors.white,
    height: 55,
    display: "flex",
    alignItems: "center",
    paddingLeft: 15,
    borderBottom: `1.5px solid rgba(37, 150, 190, 0.15)`,
    margin: 0,
  },
  chapterTitle: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "400",
  },
  lesson: {
    height: 50,
    borderBottom: `1.5px solid #d9d9da`,
    borderRight: `1.5px solid #d9d9da`,
    display: "flex",
    paddingLeft: 18,
    color: colors.lightBlack,
    fontFamily: "Roboto",
    fontSize: 14,

    margin: 0,
    alignItems: "center",
    transition: "background-color .55s",
    "&:hover": {
      backgroundColor: colors.white,
      cursor: "pointer",
    },
  },
  selectedLesson: {
    backgroundColor: colors.white,
  },
  iconPlay: {
    marginRight: 10,
    color: colors.primary,
    fontSize: 19,
  },
  video: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  videoTitle: {
    fontFamily: "Roboto",
    fontSize: 25,
    fontWeight: "400",
    marginLeft: 60,
  },
  videoTitleMobile: {
    fontFamily: "Roboto",
    fontSize: 25,
    fontWeight: "400",
    marginLeft: 20,
  },
  btnContinue: {
    padding: "12px 25px",
    marginTop: 20,
    color: colors.white,
    backgroundColor: colors.primary,
    fontFamily: "Roboto",
    fontSize: 15.5,
    fontWeight: "500",
    border: 0,
    borderRadius: 5,
    transition: "background-color .3s",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "rgba(37, 150, 190, 0.75)",
    },
  },
  btnIcon: {
    fontSize: 14,
    marginLeft: 7,
  },
  btnPrevious: {
    border: `1.5px solid ${colors.primary}`,
    backgroundColor: colors.white,
    color: colors.primary,
    marginRight: 15,
    transition: "background-color .3s, color .3s",
    "&:hover": {
      cursor: "pointer",
      border: "1.5px solid rgba(37, 150, 190, 0.5)",
      backgroundColor: colors.white,
      color: "rgba(37, 150, 190, 0.5)",
    },
  },
  btnIconPrevious: {
    fontSize: 14,
    marginRight: 7,
  },
  iconGlobe: {
    marginRight: 10,
  },
  courseOutLine: {
    position: "fixed",
    right: 0,
    width: "100%",
  },
  btnView: {
    padding: "12px 25px",
    marginTop: 20,
    color: colors.white,
    backgroundColor: colors.white,
    fontFamily: "Roboto",
    fontSize: 15.5,
    fontWeight: "500",
    border: 0,
    borderRadius: 5,
    transition: "background-color .3s",
    "&:hover": {
      cursor: "pointer",
    },
  },
  btnViewIcon: {
    fontSize: 20,
    marginRight: 7,
    color: colors.primary,
  },
});

const data = {
  title: "The Ultimate HTML5 & CSS3",
  chapters: [
    {
      id: 1,
      title: "Getting Started (3m)",
      lessons: [
        { id: 1, title: "Introduction (0:53)" },
        { id: 2, title: "Who This Course Is For (0:37)" },
        { id: 3, title: "Getting Help", type: "file" },
        { id: 4, title: "Follow Me Around", type: "file" },
        { id: 5, title: "Learning Paths", type: "file" },
      ],
    },
    {
      id: 2,
      title: "Web Development Fundamentals (36m)",
      lessons: [
        { id: 1, title: "Introduction (1:02)" },
        { id: 2, title: "Languages and Tools of Web Development (5:54)" },
        { id: 3, title: "How the Web Works (4:50)" },
        {
          id: 4,
          title: "Inspecting HTTP Requests and Responses (4:03)",
        },
        { id: 5, title: "Formatting Code (2:15)" },
        { id: 6, title: "Inspecting Pages Using DevTools (2:13)" },
        { id: 7, title: "Validating Web Pages (3:58)" },
        { id: 8, title: "How the Web Works (4:50)" },
        {
          id: 9,
          title: "Summary",
          type: "type",
        },
      ],
    },
    {
      id: 3,
      title: "CSS Basics (69m)",
      lessons: [
        { id: 1, title: "Introduction (0:51)" },
        { id: 2, title: "Providing CSS (6:06)" },
        { id: 3, title: "Normalizing CSS (2:58)" },
        {
          id: 4,
          title: "Basic Selectors (4:56)",
        },
        { id: 5, title: "Pseudo-class Selectors (9:06)" },
        { id: 6, title: "Pseudo-element Selectors (4:42)" },
        { id: 7, title: "Selectors Specificty (8:01)" },
        { id: 8, title: "Inheritance (2:43)" },
        {
          id: 9,
          title: "Colors (6:47)",
          type: "type",
        },
        { id: 10, title: "Pseudo-element Selectors (4:42)" },
        { id: 11, title: "Selectors Specificty (8:01)" },
        { id: 12, title: "Inheritance (2:43)" },
        {
          id: 13,
          title: "Colors (6:47)",
          type: "type",
        },
      ],
    },
    {
      id: 4,
      title: "CSS Basics (69m)",
      lessons: [
        { id: 1, title: "Introduction (0:51)" },
        { id: 2, title: "Providing CSS (6:06)" },
        { id: 3, title: "Normalizing CSS (2:58)" },
        {
          id: 4,
          title: "Basic Selectors (4:56)",
        },
        { id: 5, title: "Pseudo-class Selectors (9:06)" },
        { id: 6, title: "Pseudo-element Selectors (4:42)" },
        { id: 7, title: "Selectors Specificty (8:01)" },
        { id: 8, title: "Inheritance (2:43)" },
        {
          id: 9,
          title: "Colors (6:47)",
          type: "type",
        },
        { id: 10, title: "Pseudo-element Selectors (4:42)" },
        { id: 11, title: "Selectors Specificty (8:01)" },
        { id: 12, title: "Inheritance (2:43)" },
        {
          id: 13,
          title: "Colors (6:47)",
          type: "type",
        },
      ],
    },
  ],
};

const WatchCourse = () => {
  const classes = useStyles();
  const [course] = useState(data);
  const [lesson, setLesson] = useState({});
  const mobile = useMediaQuery("(max-width:1024px)");
  const [show, setShow] = useState(false);

  const handleShowNav = () => {
    show ? setShow(false) : setShow(true);
  };

  return (
    <div className={classes.container}>
      <Grid container>
        {!mobile ? (
          <Grid item xl={2.5} xs={12}>
            <div className={classes.sideBar}>
              <div className={classes.header}>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <i className={`fas fa-home ${classes.icon}`} />
                  </Grid>
                </Grid>
              </div>

              <div>
                <p className={classes.title}>{course.title}</p>
                {course.chapters.map((c) => (
                  <>
                    <p className={classes.chapter} key={c.id}>
                      <span className={classes.chapterTitle}>{c.title}</span>
                    </p>
                    {c.lessons.map((l, index) => (
                      <>
                        <p
                          className={`${classes.lesson} ${
                            lesson.lessonId === l.id &&
                            lesson.chapterId === c.id &&
                            classes.selectedLesson
                          }`}
                          key={l.id}
                          onClick={() =>
                            setLesson({ lessonId: l.id, chapterId: c.id })
                          }
                        >
                          {l.type ? (
                            <i
                              className={`far fa-file-alt ${classes.iconPlay}`}
                            />
                          ) : lesson.lessonId === l.id &&
                            lesson.chapterId === c.id ? (
                            <i
                              className={`fas fa-pause-circle ${classes.iconPlay}`}
                            />
                          ) : (
                            <i className={`fas fa-play ${classes.iconPlay}`} />
                          )}{" "}
                          {index + 1}- {l.title}
                        </p>
                      </>
                    ))}
                  </>
                ))}
              </div>
            </div>
          </Grid>
        ) : null}
        <Grid
          item
          xl={9.5}
          className={!mobile && classes.courseOutLine}
          xs={12}
        >
          <div className={classes.videoPlay}>
            <div className={mobile ? classes.headerMobile : classes.header}>
              {mobile && (
                <button
                  className={`${classes.btnView}`}
                  onClick={handleShowNav}
                >
                  <i className={`fas fa-bars ${classes.btnViewIcon}`} />
                </button>
              )}
              <div>
                <button
                  className={`${classes.btnContinue} ${classes.btnPrevious}`}
                >
                  <i
                    className={`fas fa-chevron-circle-right ${classes.btnIconPrevious}`}
                  />{" "}
                  {!mobile && "Previous Lecture"}
                </button>
                <button className={classes.btnContinue}>
                  {!mobile && " Complete and Continue"}{" "}
                  <i
                    className={`fas fa-chevron-circle-right ${classes.btnIcon}`}
                  />
                </button>
              </div>
            </div>
            <Grid container>
              {mobile && show ? (
                <Grid item xl={2.5} lg={2.5} xs={12}>
                  <div className={classes.sideBar}>
                    {/* <div className={classes.header}>
                      <Grid container justifyContent="space-between">
                        <Grid item>
                          <i className={`fas fa-home ${classes.icon}`} />
                        </Grid>
                      </Grid>
                    </div> */}

                    <div>
                      <p className={classes.title}>{course.title}</p>
                      {course.chapters.map((c) => (
                        <>
                          <p className={classes.chapter} key={c.id}>
                            <span className={classes.chapterTitle}>
                              {c.title}
                            </span>
                          </p>
                          {c.lessons.map((l, index) => (
                            <>
                              <p
                                className={`${classes.lesson} ${
                                  lesson.lessonId === l.id &&
                                  lesson.chapterId === c.id &&
                                  classes.selectedLesson
                                }`}
                                key={l.id}
                                onClick={() =>
                                  setLesson({ lessonId: l.id, chapterId: c.id })
                                }
                              >
                                {l.type ? (
                                  <i
                                    className={`far fa-file-alt ${classes.iconPlay}`}
                                  />
                                ) : lesson.lessonId === l.id &&
                                  lesson.chapterId === c.id ? (
                                  <i
                                    className={`fas fa-pause-circle ${classes.iconPlay}`}
                                  />
                                ) : (
                                  <i
                                    className={`fas fa-play ${classes.iconPlay}`}
                                  />
                                )}{" "}
                                {index + 1}- {l.title}
                              </p>
                            </>
                          ))}
                        </>
                      ))}
                    </div>
                  </div>
                </Grid>
              ) : null}
            </Grid>
            {/* <p
              className={mobile ? classes.videoTitleMobile : classes.videoTitle}
            >
              {" "}
              <i className={`fas fa-film ${classes.iconGlobe}`} /> 3- How to
              Take this Course
            </p>
            <div className={classes.video}>
              <ReactPlayer
                controls
                width="95%"
                height="80%"
                // url={Video}
                config={{ youtube: true }}
              />
            </div> */}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default WatchCourse;
