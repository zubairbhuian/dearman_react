import React from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';


export default function DemoTable() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
    <Row>
      <Col sm={12}>
        <Nav variant="pills" className="flex-column">
          <Nav.Item>
            <Nav.Link eventKey="first">Tab 1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second">Tab 2</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="third">Tab 3</Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
      <Col sm={12}>
        <Tab.Content>
          <Tab.Pane eventKey="first">
           <h1>demo 1</h1>
          </Tab.Pane>
          <Tab.Pane eventKey="second">
           <h1>demo 2</h1>
          </Tab.Pane>
          <Tab.Pane eventKey="third">
           <h1>demo 3</h1>
          </Tab.Pane>

        </Tab.Content>
      </Col>
    </Row>
  </Tab.Container>
  )
}
