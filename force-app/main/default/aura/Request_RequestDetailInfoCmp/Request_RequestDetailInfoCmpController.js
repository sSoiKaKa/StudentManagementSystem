/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
({
  init: function (cmp, helper) {},
  onRecordUpdated: function (cmp, helper) {
    var requestFields = cmp.get("v.requestFields");
    console.log("requestFields: ", requestFields);
    switch (requestFields.Request_Header__c) {
      case "Student Card Re-issuance":
        cmp.set("v.cardTitle", "Your Student Card Information");
        break;
      default:
        break;
    }
  },
  getStudentInfo: function (cmp, event) {
    console.log("getStudentInfo...");
    var params = event.getParam("arguments");
    if (params) {
      cmp.set("v.studentInfo", params.studentInfoFromParent);
    }
  },
  updateRequestRecord: function (cmp, event, helper) {
    console.log("updateRequestRecord...");
    var params = event.getParam("arguments");
    console.log("params: ", params);
    if (params) {
      cmp.set("v.requestHeader", params.requestHeader);
      cmp.set("v.requestType", params.requestType);
      cmp.set("v.requestFields", params.requestFields);
      helper.generateDataForEachRequest(cmp, event, helper);
    }
  }
});
