const Heading = ({ title, description }) => {
  return (
    <div className="flex items-center justify-center m-4 p-4">
      <h2 className="  bold-52 lg:bold-52">
        {title}
        {description}
      </h2>
    </div>
  );
};

export default Heading;
