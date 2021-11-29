import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import logo from "./images/logo/diarylogo.png";
import useStyles from "./AppStyles";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/postActions";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, currentId]);

  return (
    <Container className={classes.container} maxWidth="lg">
      <AppBar className={classes.appBar} position="static" >
        <img
          className={classes.image}
          src={logo}
          alt={"DiaryLogo"}
          height="50"
        ></img>
        <Typography  className={classes.heading} variant="h6" align="center">
          Dairy Manager
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            className={classes.mainContainer}
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId}  setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
