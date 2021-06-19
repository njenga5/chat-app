import { Avatar, makeStyles } from "@material-ui/core";
import { Done, DoneAll } from "@material-ui/icons";
import thumbnail from "../../cod.jpg";    //Please load your icon here
import bg from "../../bg.jpg";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  messageHolder: {
    width: "100%",
    backgroundImage: `url(${bg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderRadius: "10px 10px 2px 2px",
    height: "84vh",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  msgReceivedGroup: {
    display: "flex",
    width: "100%",
    marginBottom: theme.spacing(2) + 4,
    "& > div:first-child": {
      marginTop: "auto",
      marginRight: theme.spacing(0.5) + 1,
    },
    "& > div:last-child": {
      flexGrow: 1,
    },
  },
  msgReceived: {
    maxWidth: "75%",
    margin: "1px 0",
    display: "flex",
    "&:first-child > $msgReceivedText": {
      borderTopLeftRadius: theme.spacing(2.5),
    },
    "&:last-child > $msgReceivedText": {
      borderBottomLeftRadius: theme.spacing(2.5),
    },
  },
  msgReceivedText: {
    background: "#373737",
    minHeight: theme.spacing(2.5),
    padding: theme.spacing(1) + 2,
    borderRadius: "4px 20px 20px 4px",
    color: "#EFDC",
  },
  msgGroupSent: {
    width: "100%",
    marginBottom: theme.spacing(2.5),
    textAlign: "right",
  },
  msgSent: {
    display: "flex",
    width: "75%",
    margin: "2px 0 2px auto",
    "&:first-child > $message-sent-text": {
      borderTopRightRadius: theme.spacing(2.5),
    },
    "&:last-child > $message-sent-text": {
      borderBottomRightRadius: theme.spacing(2.5),
    },
  },
  msgSentText: {
    background: "#0099ff",
    borderRadius: "20px 4px 4px 20px",
    minHeight: theme.spacing(2.5),
    padding: theme.spacing(1.25),
    marginLeft: "auto",
    textAlign: "left",
  },
}));

const MsgHolder = (props) => {
  const { msgToSend, incomingMsg } = props;
  const classes = useStyles();
  return (
    <div className={classes.messageHolder}>
      {incomingMsg && (
        <div className={classes.msgReceivedGroup}>
          <div>
            <Avatar alt="username" src={thumbnail} className={classes.small} />
          </div>
          <div>
            <div className={classes.msgReceived}>
              <div className={classes.msgReceivedText}>{incomingMsg}</div>
            </div>
          </div>
        </div>
      )}
      {msgToSend && (
        <div className={classes.msgGroupSent}>
          <div className={classes.msgSent}>
            <div className={classes.msgSentText}>{msgToSend}</div>
            <DoneAll fontSize="small" style={{ color: "blue", marginTop: "auto" }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MsgHolder;
