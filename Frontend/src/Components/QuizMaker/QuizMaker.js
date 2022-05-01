// import React from "react";
// import "../../App.css";
// import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";

// const initialValues = {
//   quizName: "",
//   count: 0,
//   answer: "",
//   type: "",
//   questions: [
//     {
//       questionName: "",
//       type: "",
//       option_1: "",
//       option_2: "",
//       option_3: "",
//       option_4: "",
//     },
//   ],
// };

// const QuizMaker = () => (
//   <div className="container">
//     <h1>Add Quizs</h1>
//     <Formik
//       initialValues={initialValues}
//       onSubmit={async (values) => {
//         await new Promise((r) => setTimeout(r, 500));
//         alert(JSON.stringify(values, null, 2));
//       }}
//     >
//       {({ values }) => (
//         <Form>
//           <FieldArray name="quiz">
//             {({ insert, remove, push }) => (
//               <div>
//                 <label htmlFor={`Quiz Name`}>Quiz Name</label>
//                 <Field name={quizName} placeholder="QuizName" type="text" />
//                 {values.questions.length > 0 &&
//                   values.questions.map((question, index) => (
//                     <div className="row" key={index}>

//                       <div className="col">
//                         <button
//                           type="button"
//                           className="secondary"
//                           onClick={() => remove(index)}
//                         >
//                           X
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 <button
//                   type="button"
//                   className="secondary"
//                   onClick={() => push({ name: "", email: "" })}
//                 >
//                   Add Friend
//                 </button>
//               </div>
//             )}
//           </FieldArray>
//           <button type="submit">Invite</button>
//         </Form>
//       )}
//     </Formik>
//   </div>
// );

// export default QuizMaker;
