import React from 'react';
import './ListItems.css';
import { Container, Row, Col } from "react-bootstrap";
import CancelIcon from '@material-ui/icons/Cancel';

function ListItems(props) {
    const items = props.items;
    const listItems = items.map(item => {
        return <div className='List' key={item.key}>

            <Container>
                <Row>
                    <Col sm={8}>{item.text}</Col>
                    <Col sm={2}><CancelIcon
                        style={{ color: 'white', fontSize: 30 }}
                        onClick={() => props.deleteItem(item.key)}>
                        close
                    </CancelIcon></Col>
                </Row>
            </Container>

        </div>
    })
    return (
        <div>
            {listItems}
        </div>
    )
}

export default ListItems;