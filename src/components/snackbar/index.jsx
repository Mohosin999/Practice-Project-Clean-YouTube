import React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

// type TransitionProps = Omit<SlideProps, 'direction'>;

// function TransitionLeft(props: TransitionProps) {
//   return <Slide {...props} direction="left" />;
// }

// function TransitionUp(props: TransitionProps) {
//   return <Slide {...props} direction="up" />;
// }

// function TransitionRight(props: TransitionProps) {
//   return <Slide {...props} direction="right" />;
// }

// function TransitionDown(props: TransitionProps) {
//   return <Slide {...props} direction="down" />;
// }

const SnackBar = () => {
  const [open, setOpen] = React.useState(false);
  //   const [transition, setTransition] = React.useState<
  //     React.ComponentType<TransitionProps> | undefined
  //   >(undefined);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  //   const handleClose = () => {
  //     setOpen(false);
  //   };

  return (
    <div>
      {/* <Button onClick={handleClick(TransitionLeft)}>Right</Button>
      <Button onClick={handleClick(TransitionUp)}>Up</Button>
      <Button onClick={handleClick(TransitionRight)}>Left</Button>
      <Button onClick={handleClick(TransitionDown)}>Down</Button>
      <Snackbar
        open={open}
        onClose={handleClose}
        TransitionComponent={transition}
        message="I love snacks"
        key={transition ? transition.name : ""}
      /> */}
      <button onClick={handleOpen}>Add to favorite</button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <MuiAlert
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Added to Favorites
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default SnackBar;
