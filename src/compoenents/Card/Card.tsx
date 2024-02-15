import React from 'react'
import './Card.css';
import {Product} from '../../Product'

type CardProps = {
    /* id: number, */
    index: number,
    product: Product
    setProducts: Function
    /* quantity: number */
    /* onDelete: Function; */
}



export const Card = (props: CardProps) => {
    const product = props.product;
    const changeQty = (value: number) => {
        props.setProducts((prevState: Product[]) => {
          prevState[props.index].quantity = Math.max(prevState[props.index].quantity + value, 0);
          return [...prevState];
        })
      }
            return (
                <div className="col">
                    <div className="card" style={{width: '18rem', textAlign:'center'}}>
                       {/*  <button onClick={() => this.props.onIncrement(this.props.id)} className="btn btn-primary">Insert  */}
                        <p><span className='dark-text'>{product.quantity}</span></p>
                        <div className="fixedHeight">
                            <img src={product.image} className="stylized img-fluid" alt="..." />
                        </div>
                        
                        <div className="card-body">
                            <h5 className="card-title">{product.title} </h5>
                            <p className="card-text">€{product.price}</p>
                            <button onClick={() => {changeQty(1)}} className="btn btn-primary">+</button>
                            <button onClick={() => {changeQty(-1)}} className="btn btn-primary">-</button>
                        </div>
                    </div>
                </div>
            );
    }   
   

