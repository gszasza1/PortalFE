// import React from "react";
// import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// interface FormProps {
//   validationSheme?: Yup.ObjectSchema;
//   onSubmit: Function;
//   submitMessage?: string;
//   header?: string;
// }

// interface NativeProps {
//   [element: string]: string | undefined;
// }

// export const Form: <T1 extends NativeProps>(
//   props: T1,
//   form: FormProps
// ) => React.ReactElement<T1> = (props, form) => {
//   return (
//     <div>
//       {form.header && <h1>{form.header}</h1>}
//       <Formik
//         initialValues={props}
//         validationSchema={
//           props.validationSheme ? props.validationSheme : SignupSchema
//         }
//         onSubmit={(values, actions) => {
//           setTimeout(() => {
//             form.onSubmit(values);
//             actions.setSubmitting(false);
//           }, 1000);
//         }}
//       >
//         <FormikForm>
//           {Object.entries(props).map(entry => {
//             const [key, value] = entry;
//             return (
//               <>
//                 <Field name={key} type={key}></Field>
//                 - + <ErrorMessage name={key} />
//               </>
//             );
//           })}
//           <button type="submit">
//             {form.submitMessage ? form.submitMessage : "Beküldés"}
//           </button>
//         </FormikForm>
//         )}
//       </Formik>
//     </div>
//   );
// };

export const cionst = "ASD";
