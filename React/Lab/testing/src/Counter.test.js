import {fireEvent, render, screen} from "@testing-library/react"
import Counter from "./Components/Counter"

test("initial state check", () => {
    //render and store the rendered ele to be checked
    render(<Counter></Counter>)
    const countVal = screen.getByText(10);
    const plusText = screen.getByText("+");
    const minusText = screen.getByText("-");

    //assertion
    expect(countVal).toBeInTheDocument();
    expect(plusText).toBeInTheDocument();
    expect(minusText).toBeInTheDocument();

})

test("increment count", () => {
    //render and store the rendered ele to be checked
    render(<Counter></Counter>)
    const plusText = screen.getByText("+");
    fireEvent.click(plusText)
    const countVal = screen.getByText(19);

    //assertion
    expect(countVal).toBeInTheDocument();

})