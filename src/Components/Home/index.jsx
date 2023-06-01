
import Page from "../../Pages/Page";
import { TodoProvider } from "../../Context";

const Todo = () => {
  
  return (
    <TodoProvider>
      <Page />
    </TodoProvider>
  );
};
export default Todo;
