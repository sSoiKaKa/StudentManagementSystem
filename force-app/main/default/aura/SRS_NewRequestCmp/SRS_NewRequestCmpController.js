/* eslint-disable no-console */
({
  init: function (cmp, event, helper) {
    console.log("init...");
    helper.getStudentInformation(cmp);
    helper.setVisibleFieldList(cmp, helper);
    // Prepare a new record from template
    cmp.find("requestRecordCreator").getNewRecord(
      "Request__c", // sObject type (objectApiName)
      null, // recordTypeId
      false, // skip cache?
      $A.getCallback(function () {
        var rec = cmp.get("v.newRequestRecord");
        var error = cmp.get("v.newRequestError");
        if (error || rec === null) {
          console.log("Error initializing record template: " + error);
          return;
        }
        console.log("Record template initialized: " + rec.apiName);
      })
    );
    // set up navigation for closing
    var pageReference = {
      type: "standard__objectPage",
      attributes: {
        objectApiName: "Request__c",
        actionName: "home"
      }
    };
    cmp.set("v.pageReference", pageReference);
  },
  onRecordLoad: function () {
    // cmp.set("v.newRequestFields.Student__c", "a005g000036Gw5GAAS");
  },
  onCreateSuccess: function () {},
  onCreateError: function () {},
  handleExit: function (cmp) {
    cmp.find("navService").navigate(cmp.get("v.pageReference"), true);
  },
  onContinue: function (cmp) {
    cmp.set("v.newRequestFields.Id", cmp.get("v.recordId"));
    cmp.find("requestRecordCreator").saveRecord(function (saveResult) {
      if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
        // record is saved successfully
        var resultsToast = $A.get("e.force:showToast");
        resultsToast.setParams({
          title: "Saved",
          message: "The record was created."
        });
        resultsToast.fire();
      } else if (saveResult.state === "INCOMPLETE") {
        // handle the incomplete state
        console.log("User is offline, device doesn't support drafts.");
      } else if (saveResult.state === "ERROR") {
        // handle the error state
        console.log(
          "Problem saving contact, error: " + JSON.stringify(saveResult.error)
        );
      } else {
        console.log(
          "Unknown problem, state: " +
            saveResult.state +
            ", error: " +
            JSON.stringify(saveResult.error)
        );
      }
    });
  },
  onRequestHeaderChanged: function (cmp, event, helper) {
    var requestHeader = cmp.get("v.requestHeader");
    var lsVisibleFields = cmp.get("v.lsVisibleFields");
    var lsVisibleFieldsWHeader = lsVisibleFields.find(function (element) {
      return element.requestHeader === requestHeader;
    });
    console.log("lsVisibleFieldsWHeader: ", lsVisibleFieldsWHeader);
    cmp.set("v.lsVisibleFieldsWHeader", lsVisibleFieldsWHeader.visibleFields);
  }
});
