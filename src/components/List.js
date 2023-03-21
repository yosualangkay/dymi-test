import React from "react";
import { Button,Table,Form,Row,Col, Container } from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function List({data, handleDelete}){
    return(
        <Container>
            <Table striped bordered hover>
            <thead>
                            <tr>
                            <th>Product Name</th>
                                            <th>Product Price</th>
                                            <th>Qty</th>
                                            <th>Total</th>
                                            <th>Aksi</th>
                                            </tr>
                                        </thead>
                {
                    data.map((product) => {
                        return(
                        <>
                        
                                        <tbody>
                                            <tr>
                                            <td>{product.namaProduct}</td>
                                            <td>{product.price}</td>
                                            <td>{product.qty}</td>
                                            <td>{product.price*product.qty}</td>
                                            <td><Button variant='danger' onClick={() => handleDelete(product.id)}>Delete</Button></td>
                                            </tr>
                                        </tbody>
                        </>
                        )
                    })
                }
                
                </Table>
                
                
        </Container>
    )
}

export default List;