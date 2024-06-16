import { ITodo } from "./ITodo";
export interface IManageTodoListRender {
  liquidTodoList: ITodo[];
  solidTodoList: ITodo[];
  renderLiquidTodoList: boolean;
  textFilterForLiquidTodoList: string;
}
