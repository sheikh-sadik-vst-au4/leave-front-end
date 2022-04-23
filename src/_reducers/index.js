import { combineReducers } from "redux";
import { authentication } from "./auth.reducer";
import { alert } from "./alert.reducers";
import { leave } from "./leave.reducers";
import { user } from "./user.reducers";
import { common } from "./common.reducers";
import { role } from "./role.reducer";
import { departments } from "./department.reducer";
import { designations } from "./designation.reducer";
import { leaveTypes } from "./leavetype.reducer";
import { holidays } from "./holiday.reducer";

import { employee } from "./employee.reducers";
import {balanceleave} from "./balanceleave.reducers"
import {extrawork} from "./extra.work.reducer"

import { suddenLeave } from "./suddenleave.reducer";

const rootReducer = combineReducers({
  alert,
  authentication,
  common,
  user,
  departments,
  designations,
  employee,
  holidays,
  leave,
  leaveTypes,
  role,
  balanceleave,
  extrawork,
  suddenLeave,
});

export default rootReducer;
