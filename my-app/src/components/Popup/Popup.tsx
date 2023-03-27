import s from "./Popup.module.scss";
import svg from "../../images/tick.svg";
interface TypeProps {
  active: boolean;
  setActive: any;
}

const Popup = (props: TypeProps) => {
  return (
    <div
      className={props.active ? s.modal : s.none}
      onClick={() => {
        props.setActive(false);
      }}
    >
      <div className={s.content}>
        <img src={svg} alt="svg" />
        <p>Регистрация прошла успешно!!!</p>
      </div>
    </div>
  );
};

export default Popup;
