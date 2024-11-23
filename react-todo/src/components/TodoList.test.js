import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoList from '../components/TodoList';


describe('TodoList', () => {
  it('renders initial todos', () => {
    render(<TodoList />);
    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems.length).toBe(2);
  });

  it('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add todo');
    const button = screen.getByRole('button', { name: 'Add' });

    userEvent.type(input, 'Test Todo');
    userEvent.click(button);

    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems.length).toBe(3);
    expect(todoItems[2]).toHaveTextContent('Test Todo');
  });

  it('toggles a todo', () => {
    render(<TodoList />);
    const checkbox = screen.getByRole('checkbox');
    userEvent.click(checkbox);

    const todoText = screen.getByText('Learn React');
    expect(todoText).toHaveStyle({ textDecoration: 'line-through' });
  });

  it('deletes a todo', () => {
    render(<TodoList />);
    const deleteButton = screen.getByRole('button', { name: 'Delete' });
    userEvent.click(deleteButton);

    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems.length).toBe(1);
  });
});