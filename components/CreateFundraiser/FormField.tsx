import { useFormikContext } from "formik";
import { FunctionComponent, HTMLInputTypeAttribute } from "react";

interface FormFieldInterface {
  label: string;
  description?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute | "textarea";
  name: string;
  required?: boolean;
  radioOptions?: string[];
}

const FormField: FunctionComponent<FormFieldInterface> = ({
  label,
  description,
  placeholder,
  type = "text",
  name,
  required = false,
  radioOptions,
}) => {
  const { handleBlur, handleChange, errors, touched } = useFormikContext<any>();

  const renderInput = () => {
    switch (type) {
      case "radio":
        return (
          <div className="flex items-center gap-4">
            {radioOptions?.map((option) => (
              <div key={option} className="flex items-center gap-2">
                <input type="radio" name={name} id={option} value={option} />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>
        );
      case "textarea":
        return (
          <textarea
            name={name}
            id={name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={placeholder ?? `Enter a ${label}`}
          ></textarea>
        );
      default:
        return (
          <input
            type={type}
            name={name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={placeholder ?? `Enter a ${label}`}
          />
        );
    }
  };

  return (
    <div>
      <label htmlFor={name}>
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <p className="text-gray-400">{description}</p>
      {renderInput()}
      {errors[name] && touched[name] && (
        <div className="text-red-500">{errors[name] as string}</div>
      )}
    </div>
  );
};
export default FormField;
