import React, { useEffect, useRef, useState } from "react";
import { useDispatchCart,useCart } from "./ContextReducer";

export default function Card(props) {

  let dispatch = useDispatchCart();
  let data = useCart()
  const priceRef = useRef()
let options = props.option;
 const [qty,setQty]=useState(1);
 const [size,setSize] = useState("");
let priceOptions = Object.keys(options)
const handleAddToCart = async() =>{
  let food=[]
  for(const item of data){
    if(item.id === props.fooduser._id){
      food = item ;
      break;
    } 
  }
  if(food !== []){
    if(food.size === size){
      await dispatch({type:"UPDATE" , id:props.fooduser._id,price:finalPrice,qty:qty})
      return 
    }
    else if(food.size !== size){
      await dispatch({type:"ADD",id:props.fooduser._id ,name : props.fooduser.name,price:finalPrice,qty:qty,size:size})
      return 
    }
    return 
  }
     await dispatch({type:"ADD",id:props.fooduser._id ,name : props.fooduser.name,price:finalPrice,qty:qty,size:size})
   
}

let finalPrice = qty * parseInt(options[size]); 
useEffect(()=>{
  setSize(priceRef.current.value)
},[])
  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
        <img src={props.fooduser.img} className="card-img-top" alt="..." style={{height:"140px",objectFit:"fill"}} />
        <div className="card-body">
          <h5 className="card-title">{props.fooduser.name }</h5>
          <p className="card-text">This is important</p>
          <div className="container w-100">
            <select className="m-2 h-100 bg-success rounded" onChange={(e)=>setQty(e.target.value)}>
              {Array.from(Array(6), (e, i) => { 
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 bg-success rounded" ref ={priceRef} onChange={(e)=>setSize(e.target.value)}>
              {/* <option value="half">Half</option>
              <option value="full">Full</option> */}
              {priceOptions.map((data)=>{
                return <option key={data} value={data}>{data}</option>
              })}
            </select>

            <div className="d-inline h-100 fs-5">
            ₹{finalPrice}/-
            </div>
            <hr></hr>
          <button className={`btn btn-success justify-center ms-2 `} onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
