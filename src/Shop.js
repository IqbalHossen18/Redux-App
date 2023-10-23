import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators } from './state'
import { bindActionCreators } from 'redux'

export const Shop = () => {
   
  const dispatch = useDispatch()

  
  // const action = bindActionCreators(actionCreators, dispatch)


  const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch)

  const balance = useSelector(state=>state.amount)
  return (
    <>
      <div className="container mt-5">
        <h1>Withdraw / Deposit Money</h1>
        {/* <button disabled={balance < 1} onClick={()=>{dispatch(actionCreators.withdrawMoney(500))}} style={{width:'40px', fontWeight:'bold'}} className='btn btn-warning mx-2'>-</button>
          <strong>Update Balance : {balance} BDT</strong>
        <button onClick={()=>{dispatch(actionCreators.depositMoney(500))}} style={{width:'40px', fontWeight:'bold'}} className='btn btn-warning mx-2'>+</button> */}


        {/* <button disabled={balance < 1} onClick={()=>{action.withdrawMoney(500))}} style={{width:'40px', fontWeight:'bold'}} className='btn btn-warning mx-2'>-</button>
          <strong>Update Balance : {balance} BDT</strong>
        <button onClick={()=>{action.depositMoney(500))}} style={{width:'40px', fontWeight:'bold'}} className='btn btn-warning mx-2'>+</button> */}



        <button disabled={balance < 1} onClick={()=>{withdrawMoney(500)}} style={{width:'40px', fontWeight:'bold'}} className='btn btn-warning mx-2'>-</button>
          <strong>Update Balance : {balance} BDT</strong>
        <button onClick={()=>{depositMoney(500)}} style={{width:'40px', fontWeight:'bold'}} className='btn btn-warning mx-2'>+</button>
      </div>
    </>
  )
}
