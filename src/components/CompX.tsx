import React from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { getUsers } from '../redux/slices/users';
import Card from './Card';
import Buttonn from './Button';

export default function CompX() {



    const storeState = useAppSelector( state => state.users);

    const isLoading = storeState.isLoading;
    const isError = storeState.isError;

    if(isLoading){
        
        return <h1>Loading...</h1>;
        
    }
    else if (isError){

return <h1 style={{color:"red"}}>Error: 404</h1>

    }



  return (
    <div>


    <Card/> 

<Buttonn text={"Fetch Users"}  />


    </div>
  )
}
