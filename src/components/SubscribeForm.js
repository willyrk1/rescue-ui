import React from 'react'
import Select from 'react-select'

const SubscribeForm = ({ className }) => {
  const options = [10, 25, 50, 100, 200].map(amount => ({
    value: `$${amount} per Month`,
    label: `$${amount} per Month : $${amount}.00 USD - monthly`,
  }))
  return (
    <form
      action="https://www.paypal.com/cgi-bin/webscr"
      method="post"
      target="_blank"
      className={className}
    >
      <Select
        name="os0"
        options={options}
        defaultValue={options[2]}
        className={className}
      />
      <input name="on0" type="hidden" value="Donation Levels" />
      <input name="cmd" type="hidden" value="_s-xclick" />
      <input name="hosted_button_id" type="hidden" value="7238N3BAT93DA" />
      <input name="currency_code" type="hidden" value="USD" />
      <input
        alt="PayPal - The safer, easier way to pay online!"
        border="0"
        name="submit"
        src="https://www.paypalobjects.com/en_US/i/btn/btn_subscribeCC_LG.gif"
        type="image"
      />
      <img
        alt=""
        border="0"
        height="1"
        width="1"
        src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
      />
    </form>
  )
}

export default SubscribeForm
