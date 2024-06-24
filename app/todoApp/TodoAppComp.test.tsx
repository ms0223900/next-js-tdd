import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

function TodoAppComp() {
    return <div>
        <button data-testid="addBtn">Add</button>
    </div>;
}

describe('Todo App Component', function () {
    it('Should have add button.', async () => {
        await render(
            <TodoAppComp />
        )

        expect(screen.getByTestId('addBtn')).toBeInTheDocument()
    });
    //
    // it('Should add one todo, and get one todo.', async () => {
    //     await render(
    //         <TodoAppComp />
    //     )
    //
    //     fireEvent.click( screen.getByTestId('addBtn') )
    //
    //     fireEvent.change(
    //         screen.getByTestId('todoInput'),
    //         { target: {value: 'hi'} }
    //     )
    //
    //     expect(screen.getByText('hi')).toBeInTheDocument()
    // });
    //

});
