import { createStore } from "redux";
import { rootReducer } from "./root-reducer";
//createStore - эта redux функция чтобы создать store


export const store = createStore(rootReducer)