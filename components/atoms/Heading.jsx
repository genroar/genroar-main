import PropTypes from "prop-types";

const Heading = ({ level, children }) => {
  const HeadingTag = `h${level}`;

  const getHeadingStyles = (level) => {
    switch (level) {
      case "1":
        return " text-[48px] leading-[54px] font-semibold textt-[#242424] s";
      case "2":
        return "text-[36px] leading-[38px] text-semibold text-[#242424] ";
      case "3":
        return "text-[16px] leading-[24px] font-semibold text-[#242424] ";
      case "4":
        return "text-[20px] text-medium text-gray-700 ";
      case "5":
        return " text-medium text-gray-700 ";
      case "6":
        return "text-[13px] leading-[24px] text-normal text-[#242424]";
      case "7":
        return "text-[13px] leading-[24px] text-normal text-[#747474]";
      case "8":
        return "text-[18px] leading-[20px] text-normal text-[#747474]";
      case "9":
        return "text-[22px] leading-[22px] font-[500] text-normal text-[#212121]";

      default:
        return "text-lg";
    }
  };

  const headingStyles = getHeadingStyles(level);

  return <HeadingTag className={headingStyles}>{children}</HeadingTag>;
};

Heading.propTypes = {
  level: PropTypes.oneOf(["1", "2", "3", "4", "5", "6"]).isRequired,
};

export default Heading;