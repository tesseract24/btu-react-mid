export const LoginInputs = {
  email: {
    htmlFor: "inputEmail",
    labelClassName: "sr-only custom--label",
    labelText: "Email address",
    type: "text",
    id: "inputEmail",
    className: "form-control",
    placeholder: "Email username",
    name: "email",
    required: true,
    autoFocus: true,
  },
  password: {
    htmlFor: "inputPassword",
    labelClassName: "sr-only custom--label",
    labelText: "Password",
    type: "password",
    id: "inputPassword",
    className: "form-control",
    name: "password",
    placeholder: "Password",
    required: true,
    autoFocus: false,
  },
};
