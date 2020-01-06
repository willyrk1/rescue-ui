import React from 'react'

const DonateButton = () =>
  <form action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_blank'>
    <input name='cmd' type='hidden' value='_s-xclick' />
    <input name='hosted_button_id' type='hidden' value='SZVEZAVGVGEM6' />
    <input
      alt='PayPal - The safer, easier way to pay online!'
      type='image'
      border='0'
      name='submit'
      src='https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif'
    />
    <img
      alt=''
      border='0'
      height='1'
      width='1'
      src='https://www.paypalobjects.com/en_US/i/scr/pixel.gif'
    />
  </form>

  export default DonateButton
