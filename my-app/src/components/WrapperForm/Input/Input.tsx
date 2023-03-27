import s from "./Input.module.scss";

interface TypeProps {
  name: string;
  type: string;
  placeholder: string;
  state: any;
  label:string
  error: string ;
}

const RegistPage = (props: TypeProps) => {
  return (
    <div className={s.wrapper} id={`wrapper-${props.name}`}>
      <label className={s.label} form={props.name}>{props.label}</label>
      <input
        className={`${s.input}  ${props.error!==''? s.red:''}`}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        onChange={(e) => {
          props.state(e.target.value);
        }}
      />
      <p className={s.error}>{props.error}</p>
    </div>
  );
};

export default RegistPage;
