'use client'

import FormOtp from '@/app/payment/components/form-otp'
import PaymentText from '@/app/payment/components/payment-text'
import Button from '@/components/button/button'
import Image from '@/components/image'
import Header1 from '@/components/typography/header1'
import Text from '@/components/typography/text'
import config from '@/config'
import dayjs from 'dayjs'

// ----------------------------------------------------------------------

const PaymentView = () => {
  const today = dayjs().format('DD/MM/YYYY')

  return (
    <div className="bg-white">
      <div className="min-h-[100vh] flex flex-col items-center mx-auto max-w-2xl px-4 py-[105px]">
        <Image
          src={config.logo.sckPaymentGateway}
          width={100}
          height={100}
          alt="SCK Payment Gateway"
        />
        <Header1 className="text-green-600 mt-2">SCK Payment Gateway</Header1>
        <Text size="md" className="text-black mt-5">
          Please check the accuracy of your identity verification message. To
          increase security in making this payment transaction.
        </Text>

        <div className="my-10">
          <PaymentText label="Merchant" text="SCK Shopping Mall" />
          <PaymentText label="Amount" text="$87.00" />
          <PaymentText label="Date" text={today} />
          <PaymentText
            label="Card Number"
            text={'1234 1234 1234 0264'.replace(/[0-9](?=([0-9]{4}))/g, '*')}
          />
        </div>

        <FormOtp />

        <div className="flex gap-2 mt-12">
          <Button size="sm" color="primary">
            PAY NOW
          </Button>
          <Button size="sm" color="default">
            Cancle
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PaymentView
