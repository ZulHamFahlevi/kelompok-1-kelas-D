import "./container.css";

const Container = (props) => {
  const { children, style, className } = props;

  return (
    <div className={`container ${className || ""}`} style={style}>
      {children}
    </div>
  );
};

export default Container;
