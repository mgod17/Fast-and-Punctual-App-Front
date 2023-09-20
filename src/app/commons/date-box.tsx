interface Props {
  day: string;
  dayNumber: number;
  isSelected: boolean;
  onClick: () => void;
}
const DateBox = ({ day, dayNumber, isSelected, onClick }: Props) => {
  const backgroundClass = isSelected ? "bg-green" : "";
  return (
    <div
      className={`flex flex-col items-center box-border mr-1 rounded-xl w-10 h-50 border border-indigo-600 ${backgroundClass}`}
      onClick={onClick}
    >
      <h3>{day}</h3>
      <p className="font-bold"> {dayNumber} </p>
    </div>
  );
};
export default DateBox;
