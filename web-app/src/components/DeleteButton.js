import React from "react";
import Button from "calcite-react/Button";
import TrashIcon from "calcite-ui-icons-react/TrashIcon";
import Modal from "calcite-react/Modal";

class DeleteButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  openModal = () => {
    this.setState({
      open: true,
    });
  };

  closeModal = () => {
    this.setState({
      open: false,
    });
  };

  handleDelete = () => {
    this.props.confirmDelete();
    this.closeModal();
  };

  render() {
    const docsModalZIndex = { zIndex: 1001 };

    return (
      <div>
        <Button
          iconButton
          icon={<TrashIcon size={14} />}
          onClick={this.openModal}
        />
        <Modal
          open={this.state.open}
          onRequestClose={this.closeModal}
          appElement={document.body}
          overlayStyle={docsModalZIndex}
          secondaryActions={[
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                key="cancel"
                onClick={this.closeModal}
                clearGray
                iconPosition="before"
              >
                Cancel
              </Button>
              <Button
                key="yes"
                onClick={this.handleDelete}
                blue
                iconPosition="before"
              >
                Confirm
              </Button>
            </div>,
          ]}
        >
          Are you sure you would like to delete this player card?
        </Modal>
      </div>
    );
  }
}

// AddButton.propTypes = {
//   onPlayerAdd: PropTypes.func,
// };

// AddButton.defaultProps = {
//   onPlayerAdd: () => {},
// };

export default DeleteButton;
