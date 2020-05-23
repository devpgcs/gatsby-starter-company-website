import React from "react"
import InputWrapper from "./input.style"

const Input = ({
  inputType,
  inputName,
  className,
  JSid,
  value,
  onClick,
  onChange,
  isChecked,
  placeholder,
  ...props
}) => {
  if (inputType === "checkbox") {
    return (
      <InputWrapper>
        <input
          type="checkbox"
          name={inputName}
          className={className}
          id={JSid}
          value={value}
          checked={isChecked}
          {...props}
        />
      </InputWrapper>
    )
  } else if (inputType === "textarea") {
    return (
      <InputWrapper>
        <textarea
          name={inputName}
          className={className}
          id={JSid}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          {...props}
        />
      </InputWrapper>
    )
  } else {
    return (
      <InputWrapper>
        <input
          type={inputType}
          name={inputName}
          className={className}
          id={JSid}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          {...props}
        />
      </InputWrapper>
    )
  }
}

export default Input
