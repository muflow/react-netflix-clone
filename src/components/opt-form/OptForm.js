import React from "react";

import {Container, Input, Break, Button, Text} from "./styles/opt-form";

export default function OptForm({ children, ...restProps }) {
    return(<Container {...restProps}>{children}</Container>

    )
}


OptForm.Input = function OptFormInput({ children, ...restProps }) {
    return(<Input {...restProps}>{children}</Input>)
};

OptForm.Break = function OptFormBreak({ ...restProps }) {
  return <Break {...restProps } />
};

OptForm.Button = function OptFormButton({ children, ...restProps }) {
    return(<Button {...restProps}>{children} <img src="../images/icons/chevron-right.png" alt="Try Now" /></Button>)
}

OptForm.Text = function OptFormText({ children, ...restProps }) {
    return(<Text {...restProps}>{children}</Text>)
}
