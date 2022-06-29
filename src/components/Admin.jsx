import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

export default function Admin(props) {
    const [display,setDisplay]=useState('hidden')
    const changDisplay=()=>{
        if(display=='hidden'){
            setDisplay('visible')
        }
        else setDisplay('hidden')
    }
    const[title, setTitle]=useState('')
    const onChangeTitle=(event)=>{
        let t=event.target.value;
        setTitle(t)
    }
    const[price, setPrice]=useState('')
    const onChangePrice=(event)=>{
        let p=event.target.value;
        setPrice(p)
    }
    const[description, setDescription]=useState('')
    const onChangeDescription=(event)=>{
        let d=event.target.value;
        setDescription(d)
    }
    const[image, setImage]=useState('')
    const onChangeImage=(event)=>{
        let i=event.target.value;
        setImage(i)
    }
    const add=()=>{
        props.addProdact(title,price,description,image)
    }
    
    return (
        <div>
            <button className='home' ><Link to='/home'> home </Link></button>
            <button className='home' ><Link to='/stats'> stats </Link></button>
            <br />
            <button type="button" class="btn btn-outline-light text-dark" onClick={changDisplay}>Add</button>
            <form className='form' style={{visibility:display}}>
                <div class="row">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Enter title" name="title" onChange={onChangeTitle}/>
                    </div>
                    <div class="col">
                        <input type="number" class="form-control" placeholder="Enter price" name="price"onChange={onChangePrice}/>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Enter description" name="description"onChange={onChangeDescription}/>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Enter image" name="image"onChange={onChangeImage}/>
                    </div>
                    <div class="col">
                        <button type="button" class="btn btn-success" onClick={add}>+</button>
                    </div>
                    
                </div>
            </form>
            <table class="table" >
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Option</th>
                </tr>
                {
                    props.listProdacts.map((prodact) => {
                        return <tr>
                            <td>{prodact.title}</td>
                            <td>{prodact.price}</td>
                            <td>
                                <button id="myBtn" type="button" class="btn btn-outline-primary">Edit</button>
                                
                                <button type="button" class="btn btn-outline-danger">Delete</button>
                            </td>
                        </tr>
                    })
                }
            </table>
        </div>
    )
}
