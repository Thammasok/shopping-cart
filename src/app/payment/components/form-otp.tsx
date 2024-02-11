'use client'

import Button from '@/components/button/button'
import InputField from '@/components/input-field'
import { isNumber } from '@/utils/format'
import { useState } from 'react'

// ----------------------------------------------------------------------

const FormOtp = () => {
  const [otp, setOtp] = useState(0)

  const handleOtpChange = (e: { target: { value: string } }) => {
    if (isNumber(e.target.value)) {
      setOtp(Number(e.target.value))
    }
  }

  return (
    <div className="-mx-2 flex items-end justify-between">
      <div className="flex-grow px-2 lg:max-w-sm">
        <InputField
          id="otp"
          type="text"
          label="OTP (Ref: YYXX)"
          placeholder="XXXXXX"
          maxLength={6}
          onChange={handleOtpChange}
          value={otp > 0 ? otp : ''}
          required
        />
      </div>
      <div className="px-2 pb-2">
        <Button
          size="sm"
          className="bg-gray-300 text-black hover:bg-gray-400"
          color="default"
        >
          Request OTP
        </Button>
      </div>
    </div>
  )
}

export default FormOtp
