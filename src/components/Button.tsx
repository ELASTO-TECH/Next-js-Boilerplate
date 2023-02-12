type IButtonProps = {
  name: string;
  id: string;
  text: string;
  className?: string;
  handler?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button(props: IButtonProps) {
  return (
    <>
      <button
        type="submit"
        id={props.name}
        onClick={props.handler}
        className={`${props.className} inline-flex w-fit justify-center rounded-md border bg-white py-0.5 px-5 text-base font-medium text-gray-800 shadow-sm hover:bg-gray-800 hover:text-white`}
      >
        {props.text}
      </button>
    </>
  );
}
