import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import { createPost, updatePost } from "../../actions/postActions";

import useStyles from "./FormStyles";

const Form = ({ currentId, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const post = useSelector((state) =>
    currentId ? state.posts.find((content) => content._id === currentId) : null
  );

  console.log(currentId)
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, postData));
      clearHandler();
    } else {
      dispatch(createPost(postData));
      clearHandler();
    }
  };

  const clearHandler = () => {
      setCurrentId(null);
      setPostData({
        creator: "",
        title: "",
        message: "",
        tags: "",
        selectedFile: "",
      });
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={submitHandler}
      >
        <Typography variant="h6">
          {currentId ? `Edit NOW: ${post.title}` : "New Thoughts"}
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Author"
          fullWidth
          value={postData.creator}
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
            },
          }}
          InputProps={{
            classes: {
              input: classes.inputColor,
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
            },
          }}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
            },
          }}
          InputProps={{
            classes: {
              input: classes.inputColor,
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
            },
          }}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          rows={4}
          value={postData.message}
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
            },
          }}
          InputProps={{
            classes: {
              input: classes.inputColor,
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
            },
          }}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags (coma separated)"
          fullWidth
          value={postData.tags}
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
            },
          }}
          InputProps={{
            classes: {
              input: classes.inputColor,
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
            },
          }}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          size="large"
          type="submit"
        >
          SAVE
        </Button>
        <Button
          className={classes.clearSubmit}
          variant="contained"
          color="secondary"
          size="medium"
          onClick={clearHandler}
        >
          CLEAR
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
