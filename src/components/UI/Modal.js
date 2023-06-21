import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

export default function Modal(props) {
  const Backdrop = (props) => {
    return <div className={classes.backdrop} />;
  };

  const ModalOverlay = (props) => {
    return (
      <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
      </div>
    );
  };

  const portalElement = document.getElementById("overlays");

  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
}
