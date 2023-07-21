import styled from "@emotion/styled";

export const Title = styled.h2`
    font-size: 35px;
    color: #174085;
`;

export const List = styled.ul`
    padding-left: 0px;
    list-style: none;
`;

export const Button = styled.button`
    margin-right: 20px;
`;

export const ListItem = styled.li`
    font-weight: bold;
    color: #66635b;
    &:not(:last-child) {
        margin-bottom: 10px;
    }
`;