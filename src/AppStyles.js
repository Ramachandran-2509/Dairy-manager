import { makeStyles } from '@material-ui/core/styles';




export default makeStyles(() => ({
  appBar: {
    borderRadius: 50,
    margin: "1.8rem 0",
    padding: "0.5rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
    boxShadow: "inset -4px -4px rgba(0,0,0,0.5)",
  },
  heading: {
    color: "rgba(255,255,255,0.8)",
    fontFamily: "Poppins",
    fontWeight: 400,
    
  },
  image: {
    marginRight: "1rem",
    backgroundColor: "white",
    borderRadius: 15,
  },
}));