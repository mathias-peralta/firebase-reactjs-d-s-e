import React, { Component } from 'react';
import db from '../FirebaseConfig';
import { Table, Button, Row, Col, InputGroup, Input } from 'reactstrap';

class Todo extends Component{
    state = {
        items:[],
        inputValue: ' ',
        edit: false,
        id: ''
    }

    componentDidMount() {
        db.collection('TODO').onSnapshot((snapShots) => {
            this.setState({
                items: snapShots.docs.map( doc => {
                    return {id: doc.id, data: doc.data()}
                    
                })
            })
        })
        
    }
    onChangeValue = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }
    action = () => {
        const { inputValue, edit } = this.state;
        !edit ?
        db.collection('TODO').add({
            item: inputValue
        }).then(()=> {
            console.log("text added");
        }).catch(()=> {
            console.log("error");
        }):
        this.update();
    }
    getTodo = (id) => {
        let docRef = db.collection('TODO').doc(id);
        docRef.get().then((doc) => {
            if(doc.exists){
                this.setState({
                    inputValue: doc.data().item,
                    edit: true,
                    id: doc.id
                })
            }else{
                alert('Document not found')
            }
        }).catch(() => {
            console.log("error");
        })
    }

    update = () => {
        const { id, inputValue } = this.state;
        db.collection('TODO').doc(id).update({
            item: inputValue
        }).then(()=> {
            alert('Acutalizado');
        })
    }

    deleteItem = (id) => {
        db.collection("TODO").doc(id).delete()
    }
    render() {
        const { items, inputValue } = this.state;
        console.log(this.state.items);
        return (
            <div>
                <Row>
                    <Col xs = "10">
                        <InputGroup>
                            <input 
                                placeholder = "Agregar un nuevo item"
                                value = {inputValue}
                                onChange= {this.onChangeValue}
                            />
                        </InputGroup>
                    </Col>
                    <Col xs ="2">
                        <div className = "text-right">
                            <Button color = "info" onClick={this.action}>
                                {this.state.edit ? 'Editar': 'Guardar'}
                            </Button>
                        </div>
                    </Col>
                </Row>
                <Table hover className = "text-center">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Editar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items && items !== undefined ? items.map((item, key) => (
                            <tr key={key}>
                                <td>{item.data.item}</td>
                                <td><Button color="warning"
                                    onClick= {()=> this.getTodo(item.id)}
                                >Editar</Button></td>
                                <td><Button color="danger" onClick = {this.deleteItem(item.id)}>Eliminar</Button></td>
                            </tr>
                        )):null }
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Todo;