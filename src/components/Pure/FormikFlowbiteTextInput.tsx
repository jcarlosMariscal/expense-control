import { useField } from 'formik';
import { Label, TextInput } from 'flowbite-react';

type TProps = {
  label: string;
  handleChange: (param: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  placeholder: string;
  id?: string;
}

export const FormikFlowbiteTextInput = ({ label, handleChange, ...props }: TProps) => {
  const [field, meta, helpers] = useField(props);
  return (
    <div>
      <Label htmlFor={props.id || props.name} value={label} className="mb-2 block" />
      <TextInput {...field} {...props}
        onChange={(e) => {
          helpers.setValue(e.target.value)
          handleChange(e)
        }}
        onBlur={() => helpers.setTouched(true)}
        helperText={
          (meta.touched && meta.error) && (
            <span className='text-red-500 text-sm'>Campo requerido</span>
          )
        }
      />
    </div>
  );
};
