import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

const Blog = () => {
  return (
    <Container>
      <Row>
        <Col md="9">
          <div className="d-flex align-items-center me-5">
            <div className="flex-shrink-0">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://emgotas.files.wordpress.com/2016/11/what-is-a-team.jpg"
                alt="photo"
              />
            </div>
            <div className="flex-grow-1 ms-3">
              <h5>Blog post</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </Col>

        <Col md="3">
          <h5 className="text-center mt-5">Категорії</h5>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>категорія 1</ListGroup.Item>
              <ListGroup.Item>категорія 2</ListGroup.Item>
              <ListGroup.Item>категорія 3</ListGroup.Item>
              <ListGroup.Item>категорія 4</ListGroup.Item>
              <ListGroup.Item>категорія 5</ListGroup.Item>
            </ListGroup>
          </Card>
          <Card className="mt-3 bg-light">
            <Card.Body>
              <Card.Title>Slide widget</Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md="9">
          <div className="d-flex align-items-center me-5">
            <div className="flex-shrink-0">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://emgotas.files.wordpress.com/2016/11/what-is-a-team.jpg"
                alt="photo"
              />
            </div>
            <div className="flex-grow-1 ms-3">
              <h5>Blog post</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col md="9">
          <div className="d-flex align-items-center me-5">
            <div className="flex-shrink-0">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://emgotas.files.wordpress.com/2016/11/what-is-a-team.jpg"
                alt="photo"
              />
            </div>
            <div className="flex-grow-1 ms-3">
              <h5>Blog post</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col md="9">
          <div className="d-flex align-items-center me-5">
            <div className="flex-shrink-0">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://emgotas.files.wordpress.com/2016/11/what-is-a-team.jpg"
                alt="photo"
              />
            </div>
            <div className="flex-grow-1 ms-3">
              <h5>Blog post</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;
