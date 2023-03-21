import { Button,Form,Row,Col } from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './List';
import { uid } from 'uid';
import { Alert } from 'bootstrap';

function FormAdd(){
 
    const [showHide, setShow] = useState(true)
    const [jumlahTotal, setJumlahTotal] = useState(0)
    const [product, setProduct] = useState([
        {
            id:1,
            namaProduct:"Product 1",
            price: 13000,
            qty:1,
            total: 13000
        },
        {
            id:2,
            namaProduct:"Product 2",
            price: 11000,
            qty:2,
            total: 22000
        },
        
       
    ]);

    //Hitung GrandTotal
        const grandTotal = product.reduce((sum, item) => {
            return sum + item.total
        }, 0)                
        // setJumlahTotal(grandTotal)
    
       

    const [formData, setFormData] = useState([
        {
            namaProduct: "",
            price: 0,
            qty: 0,
            total: 0
        }
    ]);

    function handleShow(){
        if(showHide===true){
            setShow(false)
        }else{
            setShow(true)
        }
    }

    function handleChange(e){
        let data = { ...formData}
        data[e.target.name] = e.target.value
        setFormData(data)
    }

    //submit
    function handleSubmit(e){
        e.preventDefault()
        // alert('ok')
       
        if(formData.qty === 0){
            alert("Qty tidak boleh kurang dari 1")
        }
        if(formData.namaProduct === ""){
            alert("Nama tidak boleh kosong")
        }

        //tambah data
        let data = [...product]
       
        data.push({
            id:uid(),
            namaProduct:formData.namaProduct,
            price:formData.price,
            qty:formData.qty,
        })
        setProduct(data)

    }

    function handleDelete(id){
        let data = [...product]
        let filterData = data.filter(product => product.id !== id)
        setProduct(filterData)
    }


    return(
        <div className="container">
            <Button variant='primary' onClick={handleShow} style={{
                margin:'12px',
                marginLeft:'-90%'
            }}>New</Button>

                <Form hidden={showHide} onSubmit={handleSubmit}>
                <Row>
                    <Col><Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" value={formData.namaProduct} name='namaProduct' onChange={handleChange}/>
                </Form.Group></Col>
                    <Col><Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Product Price</Form.Label>
                    <Form.Control type="number" value={formData.price} name='price' onChange={handleChange}/>
                </Form.Group></Col>
                <Col><Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Qty</Form.Label>
                    <Form.Control type="number" value={formData.qty} name='qty' onChange={handleChange}/>
                </Form.Group></Col>
                </Row>

            
                <Button variant='success' type='submit' style={{
                margin:'12px',
                float:'left'
            }}>Submit</Button>
                </Form>

            <List data={product} handleDelete={handleDelete} />

            
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label style={{float:'left'}}>Grand Total</Form.Label>
                                    <Form.Control type="text" name='grandTotal' value={grandTotal} disabled  />
                        </Form.Group>
                    </Col>
                    <Col>
                    {/* <Button onClick={hitungGrand}>Refresh</Button> */}
                    </Col>
                </Row>
        </div>
    )
}

export default FormAdd;