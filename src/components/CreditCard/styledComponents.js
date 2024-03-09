import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-heigth: 100vh;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px 0px;
  padding: 10px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
export const CreditCartBackground = styled.div`
  background-image: linear-gradient(to bottom, #344e7a, #344e7a);
  background-size: cover;
  min-height: 50vh;
  padding: 25px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
  }
`
export const CreditCardContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  height: 200px;
  width: 280px;
  margin: 10px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 15px;
`
export const CreditCardHeading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  border-bottom: 3px solid #ffd773;
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`
export const CardNumber = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 5px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
export const CardHolderName = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 15px;
  font-weigth: normal;
  margin-bottom: 4px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const CardName = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  margin-top: 0px;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`
export const PaymentMethodCard = styled.div`
  background-color: #ffffff;
  height: 220px;
  width: 340px;
  box-shadow: 0px 8px 8px 0px;
  border-radius: 8px;
  margin-top: 10px;
  @media screen and (min-width: 768px) {
    margin-left: 15px;
  }
`
export const PaymentHeading = styled.h1`
  font-family: 'Roboto';
  color: #3b4b69;
  font-size: 22px;
  font-weight: 500;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 14px;
`
export const PaymentCardNumberInput = styled.input`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #c3cad9;
  color: #475569;
  font-size: 16px;
  margin-bottom: 12px;
`
export const PaymentCardNameInput = styled.input`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #c3cad9;
  color: #475569;
  font-size: 16px;
`
