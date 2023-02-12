type IButtonProps = {
  name: string;
  handler: (ev: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button(props: IButtonProps) {
  return (
    <>
      <button
        type="submit"
        id={props.name}
        onClick={props.handler}
        className="inline-flex w-fit justify-center rounded-md border bg-white py-0.5 px-5 font-medium text-gray-800 shadow-sm hover:bg-gray-800 hover:text-white sm:text-base"
      >
        {props.name}
      </button>
    </>
  );
}
