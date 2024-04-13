import { useField } from 'formik';
import { Label, TextInput } from 'flowbite-react';

type TProps = {
  label: string;
  name: string;
  placeholder: string;
  id?: string;
}

export const FormikFlowbiteTextInput = ({ label, ...props }: TProps) => {
  
    const [field, meta, helpers] = useField(props);
    
    return (
        <div>
        <Label htmlFor={props.id || props.name} value={label} className="mb-2 block" />
            <TextInput
                {...field}
                {...props}
                onChange={(e) => helpers.setValue(e.target.value)}
                onBlur={() => helpers.setTouched(true)}
                // errorMessage={meta.touched ? meta.error : undefined}
            />
            {meta.touched && meta.error ? (
                <div className="text-red-500 text-sm">{meta.error}</div>
        ) : null}
        </div>
    );
};
