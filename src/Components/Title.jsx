import React, { Component } from 'react';
import { Row, Col, Jumbotron } from 'reactstrap'

class Title extends Component {
    render() {
        return(
            <div>
                <Row>
                    <Col xs = "12">
                        <Jumbotron>
                            <h1 className = "display-5"> Firebase + React</h1>
                        </Jumbotron>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Title;