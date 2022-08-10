import Form from "../components/Form"
import { Modal } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { useState } from "react"

const Contact = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <h3> This is contact</h3>

      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleClose}>
        Save Changes
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form setShow={handleClose} />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      <Form />
    </>
  )
}
export default Contact
