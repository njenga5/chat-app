import { TextField, Button, makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import { cyan } from "@material-ui/core/colors";
import { useState } from "react";
import io from "socket.io-client";
import MsgHolder from "./components/MsgHolder";
import "./App.css";

const socket = io("http://localhost:5000");

const useStyles = makeStyles((theme) => ({
  button: {
    padding: theme.spacing(1) - 1,
    color: "aqua",
  },
  textfield: {
    width: "87%",
    flexShrink: 1,
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "40%",
    margin: "auto",
    height: "95vh",
    position: "relative",
  },
  form: {
    position: "absolute",
    bottom: 10,
    width: "100%",
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: cyan,
  },
});

const App = () => {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const [msgToSend, setMsgToSend] = useState("");
  const [incomingMsg, setIncomingMsg] = useState("");

  socket.on("message", (incmsg) => {
    setIncomingMsg(incmsg);
  });
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      setMsgToSend(value);
      value && socket.emit("message", value);
    }
    setValue("");
  };

  return (
    <div className={classes.wrapper}>
      <MsgHolder msgToSend={msgToSend} incomingMsg={incomingMsg}/>
      <form onSubmit={handleSubmit} className={classes.form}>
        <ThemeProvider theme={theme}>
          <TextField
            variant="outlined"
            onChange={handleChange}
            value={value}
            placeholder="Enter message here..."
            size="small"
            color="primary"
            inputProps={{ style: { color: "white" } }}
            className={classes.textfield}
          />
        </ThemeProvider>
        <Button variant="text" color="primary" className={classes.button}>
          <Send />
        </Button>
      </form>
    </div>
  );
};

export default App;
