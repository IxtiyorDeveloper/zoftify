import {combineReducers} from "@reduxjs/toolkit"

/** reducers */
import ui from "./ui/ui"

/** Main reducer function */
export default combineReducers({ui})

/** Export selectors and action functions */
export * from "./ui/ui"
