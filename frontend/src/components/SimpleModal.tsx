import React, { Component } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    position: "absolute",
    width: 800,
    margin: "0 auto",
    left: 0,
    right: 0,
    top: "40%",
    padding: 15,
    backgroundColor: "white",
    border: "2px solid #000",
  } as React.CSSProperties;
}

type Props = {
  open: boolean;
  toggleModal: any
};

export default class SimpleModal extends Component<Props> {
  state = {
    open: this.props.open,
  };
  render() {
    const { open, toggleModal } = this.props;

    return (
      <div>
        <Modal
          open={open}
          onClose={toggleModal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div style={getModalStyle()} >
            {this.props.children}
          </div>
        </Modal>
      </div>
    );
  }
}
