import actionsFunction from "./generated/ExamActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import ExamApi from "../../api/ExamApi";
 
 actionsFunction.loadExamList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return ExamApi
     .getExamList()
     .then(list => {
       dispatch(actionsFunction.loadExamSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
