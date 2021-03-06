import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  button: {
    borderColor: "#ffb549",
    color: "#ffb549",
    fontWeight: 600,
    marginBottom: "8px",
    "&:hover": {
      backgroundColor: "#ffb549",
      color: "#fff",
    },
  },
});

export const Answer = ({ content, select, nextId }) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      variant="outlined"
      onClick={() => {
        select(content, nextId);
      }}
    >
      {content}
    </Button>
  );
};
