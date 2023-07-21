import styled from "@emotion/styled";
import { Field } from "formik";

export const Input = styled(Field)`
    height: 30px;
    font-size: 20px;
    margin-bottom: 10px;
    margin-right: 10px;
`;

export const ErrorNotification = styled.span`
    font-weight: bold;
    color: #e65c5c;
`;

export const Button = styled.button`
    display: inline-block;
    margin-bottom: 40px;
    padding: 10px 15px;
    font-size: 20px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    color: #fff;
    background-color: #3e4f96;
    border: none;
    border-radius: 15px;
    box-shadow: 0 6px #999;
    &:hover {
        background-color: #324285
    }
    &:active {
        background-color: #324285;
        box-shadow: 0 3px #666;
        transform: translateY(4px);
    }
`;