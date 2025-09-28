import React, { Component } from "react";
import "./RoleForm.css";
import { Form, Button, Col, Row } from "react-bootstrap";

class RoleForm extends Component {
  render() {
    return (
      <div>
        <h2 id="role-form-title">Thêm chức vụ</h2>
        <div id="role-form-outer-div">
          <Form id="form" onSubmit={this.props.onRoleSubmit}>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Chức vụ
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="Text"
                  placeholder="Chức vụ"
                  name="Role"
                  required
                />
              </Col>
            </Form.Group>
            <div className="button-group">
              <Form.Group as={Row} id="form-submit-button">
                <Col sm={{ span: 10, offset: 2 }}>
                  <Button type="submit">Lưu</Button>
                </Col>
              </Form.Group>
              <Form.Group as={Row} id="form-cancel-button">
                <Col sm={{ span: 10, offset: 2 }} id="form-cancel-button-inner">
                  <Button type="reset" onClick={this.props.onFormClose}>
                    Hủy
                  </Button>
                </Col>
              </Form.Group>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default RoleForm;
