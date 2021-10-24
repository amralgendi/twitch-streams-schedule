import { months } from "./months";
import("../node_modules/@fortawesome/fontawesome-free/js/all");

function Month({ date }) {
  const changeMonth = (e) => {
    const setting = new Date(date.date);
    setting.setMonth(e.target.dataset.month);
    date.setDate(new Date(setting));
  };
  const prevYear = () => {
    console.log("working");
    const setting = new Date(date.date);
    setting.setFullYear(setting.getFullYear() - 1);
    date.setDate(new Date(setting));
  };
  const nextYear = () => {
    const setting = new Date(date.date);
    setting.setFullYear(setting.getFullYear() + 1);
    date.setDate(new Date(setting));
  };
  return (
    <div className="month">
      <div className="title" className="year">
        <a onClick={prevYear}>
          <i className="fas fa-chevron-left prev"></i>
        </a>
        <div>{date.date.getFullYear()}</div>
        <a onClick={nextYear}>
          <i className="fas fa-chevron-right next"></i>
        </a>
      </div>
      <div className="months">
        {months.map((month, i) => {
          return (
            <div onClick={(e) => changeMonth(e)} data-month={i} key={i}>
              {month}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Month;
