/* eslint-disable no-console */
({
  getNotifications: function (cmp, event, helper) {
    console.log("getNotifications: ");
    var action = cmp.get("c.getNotifications");
    action.setCallback(this, function (response) {
      var state = response.getState();
      console.log("state: ", state);
      console.log("response: ", response);
      if (state === "SUCCESS") {
        var returnValue = response.getReturnValue();
        var notifications = JSON.parse(returnValue);
        console.log("notifications: ", notifications);
        if (returnValue) {
          cmp.set("v.notifications", notifications);
        }
      } else {
        console.log("Failed.");
        var errors = response.getError();
        console.log("Error: ", errors);
      }
    });
    $A.enqueueAction(action);
  }
});
