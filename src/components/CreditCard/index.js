import {useState} from 'react'

import {
  AppContainer,
  CreditCartBackground,
  CreditCardContainer,
  CreditCardHeading,
  CardNumber,
  CardHolderName,
  CardName,
  PaymentMethodCard,
  PaymentHeading,
  InputContainer,
  PaymentCardNumberInput,
  PaymentCardNameInput,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumberInput] = useState('')
  const [cardName, setCardNameInput] = useState('')

  const onChangeCardName = event => {
    setCardNameInput(event.target.value)
  }

  const onChangeCardNumber = event => {
    setCardNumberInput(event.target.value)
  }

  return (
    <AppContainer>
      <CreditCartBackground>
        <CreditCardHeading>CREDIT CARD</CreditCardHeading>
        <CreditCardContainer data-testid="creditCard">
          <CardNumber>{cardNumber}</CardNumber>
          <CardHolderName>CARDHOLDER NAME</CardHolderName>
          <CardName>{cardName.toUpperCase()}</CardName>
        </CreditCardContainer>
      </CreditCartBackground>
      <PaymentMethodCard>
        <PaymentHeading>Payment Method</PaymentHeading>
        <InputContainer>
          <PaymentCardNumberInput
            type="text"
            value={cardNumber}
            onChange={onChangeCardNumber}
            placeholder="Card Number"
          />
          <PaymentCardNameInput
            type="text"
            value={cardName}
            onChange={onChangeCardName}
            placeholder="Cardholder Name"
          />
        </InputContainer>
      </PaymentMethodCard>
    </AppContainer>
  )
}
export default CreditCard
