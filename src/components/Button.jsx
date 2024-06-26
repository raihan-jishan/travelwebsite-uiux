import { Link } from "react-router-dom";

const Button = ({ type, title, icon, variant, full , path}) => {
  return (
    <Link
      to={path}
      className={`flexCenter gap-3 rounded-full border ${variant} ${
        full && "w-full"
      }`}
      type={type}
    >
      {icon && <img src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer ">
        {title}
      </label>
    </Link>
  );
};

export default Button;
