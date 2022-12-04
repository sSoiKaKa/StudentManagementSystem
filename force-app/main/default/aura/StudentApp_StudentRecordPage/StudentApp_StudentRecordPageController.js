/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
({
  init: function (cmp, event, helper) {
    console.log("init: ");
    var action = cmp.get("c.getStudentInfoForCurrentUser");
    action.setCallback(this, function (response) {
      var state = response.getState();
      console.log("state: ", state);
      console.log("response: ", response);
      if (state === "SUCCESS") {
        var returnValue = response.getReturnValue();
        var studentInfo = JSON.parse(returnValue);
        console.log("studentInfo: ", studentInfo);
        if (returnValue) {
          cmp.set("v.studentInfo", studentInfo);
        }
      } else {
        console.log("Failed.");
        var errors = response.getError();
        console.log("Error: ", errors);
      }
    });
    $A.enqueueAction(action);
  },
  openNewModal: function (cmp, event, helper) {
    cmp.set("v.isModalOpen", true);
  }
});
