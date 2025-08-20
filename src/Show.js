
import { callUpdateAPI, callGetAllAPI } from "./BackedAPI";

function Show(props) {
  let todoArr = props.todo;
  console.log(JSON.stringify(todoArr));

  async function handleClick(e, todoId) {
    await callUpdateAPI(
      "/update-todo",
      { status: "completed", completionDate: new Date() },
      { 'todoId': todoId }
    );

    let todoList = await callGetAllAPI("/read-todos");
    props.setTodo(todoList);
  }

  const pendingTodos = todoArr.filter((todo) => todo.todoStatus !== "completed");

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-[800px] h-auto bg-black/30 rounded-3xl shadow-2xl mb-[170px] ml-[20px]">
        <h2 className="text-3xl text:center font-extrabold mb-6 text-center text-white pt-[30px]">
          Assigned Tasks
        </h2>

        <hr className="border-t-1 border-white w-[90%] mx-auto mb-[20px]" />

        {pendingTodos.length === 0 ? (
          <p className="text-center text-white pt-[60px]">
            🚫 No task assigned yet!
          </p>
        ) : (
          <table className="w-[720px] ml-[40px] text-white table-auto border border-black rounded-md overflow-hidden">
            <thead>
              <tr className="bg-blue-500 text-left text-white">
                <th className="px-6 py-3 border-b">Todo Title</th>
                <th className="px-6 py-3 border-b">Due Date</th>
                <th className="px-6 py-3 border-b">Status</th>
                <th className="px-6 py-3 border-b text-center">Mark Done</th>
              </tr>
            </thead>

            <tbody>
              {pendingTodos.map((value) => (
                value.status==='pending' && (
<tr key={value.todoId}>
                  <td className="px-6 py-4 text-black border-b bg-white">
                    {value.todoTitle}
                  </td>
                  <td className="px-6 py-4 text-black border-b bg-white">
                    {value.dueDate}
                  </td>
                  <td className="px-6 py-4 text-black border-b bg-white">
                    {value.Status}
                  </td>
                  <td className="px-6 py-4 text-black border-b text-center bg-white">
                    <button
                      onClick={(e) => handleClick(e, value.todoId)}
                      className="inline-flex items-center gap-2 px-3 py-1"
                    >
                      <input
                        type="checkbox"
                        className="
                          appearance-none 
                          w-5 h-7 
                          border-1 border-black rounded 
                          cursor-pointer 
                          hover:bg-white/30 hover:before:content-['✔'] 
                          hover:before:flex hover:before:items-center hover:before:justify-center hover:before:text-white 
                          checked:bg-white checked:before:content-['✔'] checked:before:text-black
                        "
                      />
                    </button>
                  </td>
                </tr>
                )
                
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export { Show };
