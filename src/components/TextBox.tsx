type ITextBoxProps = {
  name: string;
  id: string;
  disabled: boolean;
  type: string;
  placeholder: string;
};

export default function TextBox(props: ITextBoxProps) {
  return (
    <>
      <input
        disabled={props.disabled}
        id={props.name}
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        className="w-full rounded-md border border-gray-200 bg-gray-100 px-3 py-1.5 text-gray-800 shadow-sm focus:border-gray-800 sm:text-base"
      />
      {/* <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Oh, snapp!</span> Somse error message.</p> */}
    </>
  );
}
