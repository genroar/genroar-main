import PropTypes from 'prop-types';

const AnchorTag = ({ href, children, variant }) => {
  let anchorStyle = "";

  switch (variant) {
    case 'footertag':
      anchorStyle = "text-[13px] cursor-pointer text-[#747474] hover:text-[#ff6a28] font-normal ";
      break;
    case "productName":
      anchorStyle = "text-[12px] cursor-pointer text-[#747474] hover:text-[#ff6a28] font-normal ";
      break;
    case "discover":
      anchorStyle = "text-[16px] cursor-pointer text-[#747474] hover:text-[#ff6a28] font-normal ";
      break;
    case "success":
      anchorStyle = "text-[14px] cursor-pointer text-[#747474] hover:text-[#ff6a28] ";
      break;
    case "login":
      anchorStyle = "text-[12px] hover:text-[#ff6a28] font-[400] text-[#747474] cursor-pointer";
      break;
    case "Header":
      anchorStyle = "leading-[50px] hover:text-[#ff6a28] cursor-pointer text-[#242424] text-[13px] font-[500]";
      break;
    case "Headerh":
      anchorStyle = "leading-[40px] hover:text-[#ff6a28] cursor-pointer text-[#747474] text-[14px] font-[500]";
      break;
    case "login Password":
      anchorStyle = "text-[15px] text-[#ff6a28] leading-[39px] font-[400]";
      break;
    default:
      anchorStyle = "";
  }

  return (
    <a className={`${anchorStyle}`} href={href}>{children}</a>
  );
};

AnchorTag.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  variant: PropTypes.string // Define the type for variant
};

AnchorTag.defaultProps = {
  variant: ''
};

export default AnchorTag;
