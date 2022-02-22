import React from "react";
import { fireEvent, render } from "@testing-library/react"; //react-testing-library;
import TodoFrom from "./TodoForm";

describe('<TodoFrom />', () => {
    it('has input and a button', () => {
        const {getByText, getByPlaceholderText} = render(<TodoFrom />);
        getByPlaceholderText('할 일을 입력하세요~'); //input 있는 지 없는지
        getByText('등록'); // button이 있는지 없는지
    })
    it('change input', () => {
        const {getByPlaceholderText} = render(<TodoFrom />);
        const input = getByPlaceholderText('할 일을 입력하세요~');
        fireEvent.change(input, {target: {value: 'TDD 배우기'}});
        expect(input).toHaveAttribute('value', 'TDD 배우기');
    })
})