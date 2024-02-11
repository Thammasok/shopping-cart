'use client'

import NotificationInApplication from '@/app/orders/completed/components/notification-in-application'
import NotificationInputEmail from '@/app/orders/completed/components/notification-input-email'
import NotificationInputMobile from '@/app/orders/completed/components/notification-input-mobile'
import Button from '@/components/button/button'
import Header2 from '@/components/typography/header2'
import Text from '@/components/typography/text'

// ----------------------------------------------------------------------

const Notification = () => {
  return (
    <div>
      <Header2 className="mb-0">Notifications</Header2>
      <Text size="sm" className="mb-5 text-gray-300">
        Please enter your email or mobile number for send notification.
      </Text>

      <NotificationInputEmail />
      <NotificationInputMobile />

      <NotificationInApplication />
      <Button>Send Notification</Button>
    </div>
  )
}

export default Notification
