type TProps = {
  text: string;
  actionText: string;
  handleClick: () => void;
}
export const NoDataTable = ({ text, actionText, handleClick }:TProps) => {
  return (
    <div className="flex gap-2">
      <p>{text}</p>
      <a className="text-blue-400 hover:text-blue-500 hover:underline cursor-pointer"
        onClick={handleClick}>{actionText}</a>
    </div>
  )
}
