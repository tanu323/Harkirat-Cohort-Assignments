import React from 'react'
import Mybutton from './button.jsx';
import TodoForm from './todoForm.jsx';

const Header = () => {
    const [showTodoForm, setShowTodoForm] = useState(false);

    const createNewTodo = () => {
        setShowTodoForm(true);
    }
    return (
        <header class="bg-dark space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
            <div class="flex items-center justify-between">
                <Mybutton
                    buttonText="New"
                    onClickHandler={createNewTodo}
                    buttonWidth={30}
                    buttonHeight={30}
                />
                {/* Render TodoForm when showTodoForm is true */}
                {showTodoForm && <TodoForm setShowTodoForm={setShowTodoForm} />}
            </div>
        </header>
    )
}

export default Header;

