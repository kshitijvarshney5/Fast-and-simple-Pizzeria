import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const classname = "hover_underline text-sm text-blue-300 hover:text-blue-600";

  if (to === "-1")
    return (
      <button className={classname} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={classname}>
      {children}
    </Link>
  );
}

export default LinkButton;
