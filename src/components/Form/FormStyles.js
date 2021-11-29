import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: "rgba(0,0,0,0.4)",
    boxShadow: "inset -4px -4px rgba(0,0,0,0.5)",
    color: "rgba(255,255,255,0.87)",
    borderRadius: "1.125rem",
    textTransform: "uppercase",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
    padding: "10px",
  },

  buttonSubmit: {
    marginRight: "2rem",
    borderRadius: "50px",
    marginBottom: 10,
    backgroundColor: "rgba(230,160,68,1)",
  },
  clearSubmit: {
    borderRadius: "50px",
    marginBottom: 10,
    
  },
  cssFocused: { color: "rgba(230,160,68,0.8)" },
  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: `rgba(255,255,255,0.8) !important`,
    },
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "rgba(255,255,255,0.5) !important",
  },
  cssLabel: {
    color: "rgba(255,255,255,0.8)",
  },
  inputColor: { color: "rgba(255,255,255,0.85)" },
}));
