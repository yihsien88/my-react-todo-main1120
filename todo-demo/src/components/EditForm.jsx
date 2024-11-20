import { useState } from "react"
function EditForm({ todo, editTodo }) {
    //建立input內容的變數
    const [content, setContent] = useState(todo.content);

    const handleSubmit = (e) => {
        //取消事件預設行為
        e.preventDefault();
        //增加todo內容
        editTodo(todo.id, content)
    }
    return (
        <form className="create-form" onSubmit={handleSubmit}>
            <input type="text" 
                value={content}
                onChange={(e) => {
                    setContent(e.target.value);
                }}
            />
            <button type="submit">完成</button>
        </form>
    )
}

export default EditForm