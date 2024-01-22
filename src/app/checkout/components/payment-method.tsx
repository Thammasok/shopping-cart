'use client'

import MastercardIcon from '@/components/icons/mastercard'
import VisaIcon from '@/components/icons/visa'
import InputField from '@/components/input-field'
import {
  formatCVC,
  formatCreditCardNumber,
  formatExpirationDate
} from '@/utils/credit-cart-format'
import Image from 'next/image'
import { useState } from 'react'

// ----------------------------------------------------------------------

const CreditCardProvider = {
  VISA: 'VISA',
  MASTERCARD: 'MASTERCARD'
}

type CardInfoTypes = {
  number: string
  name: string
  expiry: string
  cvc: string
  issuer: string
  focused: string
  formData: null
}

const PaymentMethod = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit-card')
  const [cardProvider, setCardProvider] = useState('')
  const [cardInfo, setCardInfo] = useState<CardInfoTypes>({
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    issuer: '',
    focused: '',
    formData: null
  })

  const handlePaymentMethodChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPaymentMethod(event.target.value)
  }

  const handleInputFocus = ({ target }: React.FocusEvent<HTMLInputElement>) => {
    setCardInfo({
      ...cardInfo,
      focused: target.name
    })
  }

  const handleCardNumberChange = ({
    target
  }: React.ChangeEvent<HTMLInputElement>) => {
    let value: string | undefined = ''

    if (target.name === 'number') {
      if (target.value.startsWith('5')) {
        setCardProvider(CreditCardProvider.MASTERCARD)
      }

      if (target.value.startsWith('4')) {
        setCardProvider(CreditCardProvider.VISA)
      }

      target.value = formatCreditCardNumber(target.value)
      setCardInfo({ ...cardInfo, number: target.value })
    } else if (target.name === 'expiry') {
      target.value = formatExpirationDate(target.value)
      setCardInfo({ ...cardInfo, expiry: target.value })
    } else if (target.name === 'cvc') {
      target.value = formatCVC(target.value)
      setCardInfo({ ...cardInfo, cvc: target.value })
    }
  }

  return (
    <div className='mb-6 border-b border-gray-200 pb-2'>
      <h3 className='mb-5 text-lg font-medium text-gray-90'>Payment</h3>
      <div className='w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6'>
        <div className='w-full p-3 border-b border-gray-200'>
          <div>
            <label
              htmlFor='payment-credit-card'
              className='flex items-center cursor-pointer text-sm font-bold text-gray-900'
            >
              <input
                id='payment-credit-card'
                type='radio'
                name='payment-method'
                value='credit-card'
                className='form-radio h-5 w-5 text-indigo-500 mr-2'
                onChange={handlePaymentMethodChange}
                checked={paymentMethod === 'credit-card'}
              />
              Credit Card / Debit Card
            </label>
          </div>
          <div className={paymentMethod === 'credit-card' ? 'mt-5' : 'hidden'}>
            <InputField
              type='text'
              label='Name on card'
              name='name'
              placeholder='John Smith'
              onChange={handleCardNumberChange}
              onFocus={handleInputFocus}
            />

            <div className='mb-3 -mx-2 flex items-center'>
              <div className='px-2 w-3/4'>
                <InputField
                  type='text'
                  label='Card number'
                  name='number'
                  placeholder='0000 0000 0000 0000'
                  pattern='[\d| ]{16,22}'
                  maxLength={19}
                  onChange={handleCardNumberChange}
                  onFocus={handleInputFocus}
                />
              </div>
              <div className='px-2 w-1/4'>
                <div className='flex items-center gap-2 mt-5'>
                  <VisaIcon
                    width={48}
                    height={32}
                    className={
                      cardProvider !== CreditCardProvider.VISA
                        ? 'grayscale'
                        : ''
                    }
                  />
                  <MastercardIcon
                    width={56}
                    height={32}
                    className={
                      cardProvider !== CreditCardProvider.MASTERCARD
                        ? 'grayscale'
                        : ''
                    }
                  />
                </div>
              </div>
            </div>

            <div className='mb-3 -mx-2 flex items-end'>
              <div className='px-2 w-1/3'>
                <InputField
                  type='text'
                  label='Expiration date'
                  name='expiry'
                  placeholder='00/00'
                  onChange={handleCardNumberChange}
                  onFocus={handleInputFocus}
                />
              </div>
              <div className='px-2 w-1/3'>
                <InputField
                  type='text'
                  label='Security code'
                  name='cvc'
                  placeholder='000'
                  onChange={handleCardNumberChange}
                  onFocus={handleInputFocus}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='w-full p-3'>
          <div>
            <label
              htmlFor='payment-linepay'
              className='flex items-center cursor-pointer text-sm font-bold text-gray-900'
            >
              <input
                id='payment-linepay'
                type='radio'
                name='payment-method'
                value='linepay'
                className='form-radio h-5 w-5 text-indigo-500 mr-2'
                onChange={handlePaymentMethodChange}
                checked={paymentMethod === 'linepay'}
              />
              Line Pay
            </label>
          </div>
          <div className={paymentMethod === 'linepay' ? 'mt-2' : 'hidden'}>
            <Image
              src='/qr-code-line-pay.png'
              width={290}
              height={300}
              alt='qr code line pay'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentMethod
