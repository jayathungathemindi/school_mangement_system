import React from "react";

import { Formik, Form, Field } from "formik";
import { render } from "react-dom";
const curSelection = ["foo"];
const availableSelection = ["foo", "bar", "john"];

const Test = () => {
  return (
    <>
      <Formik
        initialValues={{
          names: curSelection,
        }}
        render={(
          // we need to use setFieldValue from Formik
          { values, setFieldValue }
        ) => (
          <Form>
            <Field
              component="select"
              name="names"
              // You need to set the new field value
              onChange={(evt) =>
                setFieldValue(
                  "names",
                  [].slice
                    .call(evt.target.selectedOptions)
                    .map((option) => option.value)
                )
              }
              multiple={true}
            >
              {availableSelection.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </Field>

            {/* just printing out the values */}
            <hr />
            <strong>{JSON.stringify(values)}</strong>
          </Form>
        )}
      />
    </>
  );
};
export default Test;
