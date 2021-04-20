import React from 'react'
import styles from './styles.module.css';
export { ProgressBar, ProgressBarThin } from './ProgressBar';
export {PaymentFailureAnime, PaymentSuccessAnime} from './AnimeSymbol';
export { DisplayCard } from './DisplayCard';
export {SmallSpinner, Spinner, PayButton, ProceedToPayButton} from './SpinnersAndPaymentButtons';
export {ModalBox, ModalBodyDiv, ModalButton, ModalHeader, ModalFooter, ModalTextDiv, CloseSpan} from './ModalElements';
export {SideBar, SideBarItem} from './SideBar';
export { Button } from './ButtonStyles';
export const MainButton = ({children, onClick}) => {
  return <button className = {styles.MainButton} onClick = {onClick}>{children}</button> 
}