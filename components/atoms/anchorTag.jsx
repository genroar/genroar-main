import PropTypes from 'prop-types';

const AnchorTag = ({ href, children, variant }) => {

  let anchorStyle = ""

  switch (variant) {
    case 'footertag':
      anchorStyle = "text-[13px] cursor-pointer text-[#747474] hover:text-[#ff6a28] font-normal "
      break;
    case "productName":
      anchorStyle = "text-[12px] cursor-pointer text-[#747474] hover:text-[#ff6a28] font-normal "
      break;
    case "discover":
      anchorStyle = "text-[16px] cursor-pointer text-[#747474] hover:text-[#ff6a28] font-normal "
      break;
  }

  return (
    <a className={`${anchorStyle}`} href={href}>{children}</a>
  )
}

AnchorTag.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}

export default AnchorTag