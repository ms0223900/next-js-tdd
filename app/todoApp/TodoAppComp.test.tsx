import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { TodoListApp } from "./TodoListApp";

describe('Todo App component tests', () => {
    async function givenRender() {
        await render(
            <TodoListApp />
        )
    }

    it('should render elements', async () => {
        await givenRender()

        expect(await screen.findByTestId('addButton')).toBeInTheDocument()
    })

    it('should add todo', async () => {
        await givenRender()

        const todoInput = await screen.findByTestId('todoInput');
        fireEvent.input(todoInput, {
            target: {
                value: 'hi'
            }
        })

        const addButton = await screen.findByTestId('addButton');
        fireEvent.click(addButton)

        await waitFor(() => {
            expect(screen.getByTestId('todo')).toBeInTheDocument()
            expect(screen.getByTestId('todo').innerHTML).toEqual('hi')
        })
    })

    it('should clear input after adding todo', async () => {
        await givenRender()

        const todoInput = await screen.findByTestId('todoInput');
        fireEvent.input(todoInput, {
            target: {
                value: 'hi'
            }
        })

        const addButton = await screen.findByTestId('addButton');
        fireEvent.click(addButton)

        await waitFor(() => {
            expect(screen.getByTestId('todo')).toBeInTheDocument()
            expect(( screen.getByTestId('todoInput') as HTMLInputElement ).value).toEqual('')
        })
    })



    async function givenInput(todoContent: string) {
        const todoInput = await screen.findByTestId('todoInput');
        fireEvent.change(todoInput, {
            target: {
                value: todoContent
            }
        })
    }

    async function whenClickAddButton() {
        const addButton = await screen.findByTestId('addButton');
        fireEvent.click(addButton)
    }

    it('should add several todos', async () => {
        await givenRender()

        await givenInput('hi');
        await whenClickAddButton();

        await givenInput('hey');
        await whenClickAddButton();

        await givenInput('hooo');
        await whenClickAddButton();

        await waitFor(async () => {
            expect(await screen.findAllByTestId('todo')).toHaveLength(3)
        })
    })

    it('should delete todo', async () => {
        await givenRender()

        await givenInput('hi');
        await whenClickAddButton();

        await givenInput('hooo');
        await whenClickAddButton();

        await waitFor(async () => {
            expect(await screen.findAllByTestId('todo')).toHaveLength(2)
        })

        const deleteTodoBtn = await screen.findAllByTestId('deleteTodoBtn');
        fireEvent.click(deleteTodoBtn[1])

        await waitFor(async () => {
            expect(await screen.findAllByTestId('todo')).toHaveLength(1)
        })
    })

    it('should toggle check todo', async () => {
        await givenRender()

        await givenInput('hi');
        await whenClickAddButton();

        const todoCheckboxes = await screen.findAllByTestId('todoCheckbox');
        fireEvent.change(todoCheckboxes[0], {
            target: {
                checked: true,
            }
        })

        await waitFor(async () => {
            expect((todoCheckboxes[0] as HTMLInputElement).checked).toBeTruthy()
            expect(await screen.findAllByTestId('todo')).toHaveLength(1)
        })
    })

    it('should edit todo content', async () => {
        await givenRender()

        await givenInput('hi');
        await whenClickAddButton();

        const todoEL = await screen.findByTestId('todo');
        fireEvent.dblClick(todoEL)

        const todoContentInput = await screen.findByTestId('todoContentInput');
        fireEvent.change(todoContentInput, {
            target: {
                value: 'heyyyyyy'
            }
        })
        const confirmEditBtn = await screen.findByTestId('confirmEditBtn');
        fireEvent.click(confirmEditBtn)

        await waitFor(async () => {
            expect(await screen.findByTestId('todo')).toHaveTextContent('heyyyyyy')
        })
    })



})