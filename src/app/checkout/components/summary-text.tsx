'use client'

import Text from '@/components/typography/text'
import { converNumber, convertCurrency } from '@/utils/format'

// ----------------------------------------------------------------------

type SummaryTextProps = {
  text: string
  value: number
  format?: string
  size?: string
  className?: string
  unit?: string
}

const SummaryText = ({
  text,
  value,
  format = 'currency',
  size = 'md',
  className = 'font-semibold',
  unit = ''
}: SummaryTextProps) => {
  return (
    <div className="w-full flex mb-3 items-center">
      <div className="flex-grow">
        <Text size={size} className="font-regular">
          {text}
        </Text>
      </div>
      <div className="pl-3">
        <Text className={className}>
          {format === 'number' ? converNumber(value) : convertCurrency(value)}
          {unit && <span className="ml-1">{unit}</span>}
        </Text>
      </div>
    </div>
  )
}

export default SummaryText
