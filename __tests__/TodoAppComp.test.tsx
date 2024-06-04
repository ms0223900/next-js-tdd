import { render, screen } from "@testing-library/react";
import React from "react";

function TodoApp() {
    return (
        <div>
            <button data-testid={"addButton"}>Add Todo</button>
        </div>
    );
    return null;
}

describe('Todo App component tests', () => {
    it('should render elements', async () => {
        render(
            <TodoApp />
        )
        expect(await screen.findByTestId('addButton')).toBeInTheDocument()
    })
})
