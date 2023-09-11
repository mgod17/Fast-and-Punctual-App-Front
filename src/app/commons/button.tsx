interface Props {
  text: string;
  className: string;
}

const Button = ({ text, className }: Props) => {
  return (
    <button className={`${className} rounded-full text-center w-64 h-7 `}>
      {text}
    </button>
  );
};
export default Button;
