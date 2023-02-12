// eslint-disable-next-line import/no-extraneous-dependencies
import { useField } from 'formik';

type ITextBoxProps = {
  name: string;
  id: string;
  disabled?: boolean;
  type: string;
  placeholder: string;
  autoComplete?: string;
  className?: string;
};

export default function TextBox(props: ITextBoxProps) {
  const [field, meta] = useField(props);

  return (
    <>
      <div className={`${props.className} relative flex flex-col`}>
        <input
          {...props}
          {...field}
          className="w-full rounded-md border border-gray-200 bg-gray-100 px-3 py-1.5 text-base text-gray-800 shadow-sm focus:border-gray-800"
        />
      </div>
      {meta.touched && meta.error ? (
        <div className="mt-1 text-xs text-red-500">{meta.error}</div>
      ) : null}
    </>
  );
}
