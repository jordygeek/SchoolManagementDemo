import { combineReducers } from "redux";

// START IMPORT REDUCERS
import CourseEditReducer from "./CourseEditReducer";
import CourseListReducer from "./CourseListReducer";
import ExamEditReducer from "./ExamEditReducer";
import ExamListReducer from "./ExamListReducer";
import HomeReducer from "./HomeReducer";
import StudentEditReducer from "./StudentEditReducer";
import StudentListReducer from "./StudentListReducer";
import TeacherEditReducer from "./TeacherEditReducer";
import TeacherListReducer from "./TeacherListReducer";

// END IMPORT REDUCERS


// CUSTOM REDUCERS
import LoginReducer from "./LoginReducer";
import ProfileReducer from "./ProfileReducer";
import UserEditReducer from "./UserEditReducer";
import UserListReducer from "./UserListReducer";

const rootReducer = combineReducers({
  
  // INSERT HERE YOUR CUSTOM REDUCERS
  LoginReducer,
  ProfileReducer,
  UserEditReducer,
  UserListReducer,

  // START COMBINE REDUCERS
	CourseEditReducer,
	CourseListReducer,
	ExamEditReducer,
	ExamListReducer,
	HomeReducer,
	StudentEditReducer,
	StudentListReducer,
	TeacherEditReducer,
	TeacherListReducer,
 // END COMBINE REDUCERS

});

export default rootReducer;
