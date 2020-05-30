import React from "react"
import InputWrapper from "./input.style"

const Input = ( props ) => {
  if (props.type === "checkbox") {
    return (
      <InputWrapper>
        <label>{props.label}</label>
        <input
          type="checkbox"
          name={props.inputName}
          className={props.className}
          id={props.JSid}
          value={props.value}
          checked={props.isChecked}
          {...props}
        />
      </InputWrapper>
    )
  } else if (props.type === "textarea") {
    return (
      <InputWrapper>
        <label>{props.label}</label>
        <textarea
          name={props.inputName}
          className={props.className}
          id={props.JSid}
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder}
          {...props}
        />
      </InputWrapper>
    )
  } else {
    return (
      <InputWrapper>
        <label>{props.label}</label>
        <input
          type={props.type}
          name={props.inputName}
          className={props.className}
          id={props.JSid}
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder}
          {...props}
        />
      </InputWrapper>
    )
  }
}

export default Input
