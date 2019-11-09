import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Túl rövid")
    .max(70, "Túl hosszú"),
  userName: Yup.string()
    .min(2, "Túl rövid")
    .max(70, "Túl hosszú")
    .required("Kötelező mező")
    .trim(),
  email: Yup.string()
    .email("Hibás email forma")
    .required("Kötelező mező"),
  numberText: Yup.number().integer("Nem számformátum"),
  number: Yup.number().truncate(),
  age: Yup.string()
    // eslint-disable-next-line
    .matches(/^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/, "Hibás formátum")
    .max(12, "Nem létezik")
    .min(1, "Nem létezik")
    .required("Kötelező mező"),
  password: Yup.string()
    .min(6, "Túl rövid")
    .required("Kötelező mező")
    .matches(/[a-z]/, "Minimum 1 kisbetű")
    .matches(/[A-Z]/, "Minimum 1 nagybetű"),
  repassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Nem egyezik a két jelszó"
  )
});

export const generalValidation = (
  prop?: Yup.ObjectSchema
): Yup.ObjectSchema => {
  return prop ? prop : SignupSchema;
};
