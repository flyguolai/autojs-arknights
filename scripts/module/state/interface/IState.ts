import { IContext } from "./IContext";

export interface IState{
    context: IContext;
    checkState: () => void
}
