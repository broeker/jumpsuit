import React from 'react'
import Modal from 'react-responsive-modal';

class responsiveModal extends React.Component {
  state = {
      open: false,
    };

    onOpenModal = () => {
      this.setState({ open: true });
    };

    onCloseModal = () => {
      this.setState({ open: false });
    };
  openModal () {
    this.setState({isOpen: true})
  }  render() {
    const { open } = this.state;
    return (

<>
  <a onClick={this.onOpenModal}>Open modal</a>
  <Modal open={open} onClose={this.onCloseModal} center>
  <h2>Simple centered modal</h2>
  <p>asdfasfas klasjdf aksjd fkas dfkj askdfj askd fkj askdf </p>
  </Modal>
</>
    )
  }
}

export default responsiveModal

