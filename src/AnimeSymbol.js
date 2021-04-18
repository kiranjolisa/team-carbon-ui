import React from "react";
import styles from './AnimeSymbols.module.css';
import cx from 'classnames'
export const PaymentSuccessAnime = () => {
    return(
     <div className = {cx(styles.o_circle, 
     styles.c_container__circle, 
     styles.o_circle__sign_success)}>
    <div className= {styles.o_circle__sign}></div>  
    </div>   
    )
}
export const PaymentFailureAnime = () => {
    return(
        <div className = {cx(styles.o_circle, 
            styles.c_container__circle, 
            styles.o_circle__sign_failure)}>
    <div className= {styles.o_circle__sign}></div>  
    </div>
    )
}
