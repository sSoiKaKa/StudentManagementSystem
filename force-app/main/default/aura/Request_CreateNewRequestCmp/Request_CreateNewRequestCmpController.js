/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
({
  init: function (cmp, event, helper) {
    console.log("init...");
    helper.setVisibleFieldList(cmp, helper);
  },
  onRecordLoad: function () {},
  onCreateSuccess: function () {},
  onCreateError: function () {},
  handleExit: function () {},
  onSave: function () {},
  onRequestHeaderChanged: function (cmp) {
    var requestHeader = cmp.get("v.requestHeader");
    var lsVisibleFields = cmp.get("v.lsVisibleFields");
    var lsVisibleFieldsWHeader = lsVisibleFields.find(function (element) {
      return element.requestHeader === requestHeader;
    });
    console.log("lsVisibleFieldsWHeader: ", lsVisibleFieldsWHeader);
    cmp.set("v.lsVisibleFieldsWHeader", lsVisibleFieldsWHeader.visibleFields);
  },
  onRecordUpdated: function (cmp) {
    console.log("onRecordUpdated...");
    var requestData = cmp.get("v.requestFields");
    var requestHeader = requestData.Request_Header__c;
    var lsVisibleFields = cmp.get("v.lsVisibleFields");
    var lsVisibleFieldsWHeader = lsVisibleFields.find(function (element) {
      return element.requestHeader === requestHeader;
    });
    cmp.set("v.lsVisibleFieldsWHeader", lsVisibleFieldsWHeader.visibleFields);
    cmp.set("v.requestHeader", requestHeader);
    console.log(
      "lsVisibleFieldsWHeader: ",
      cmp.get("v.lsVisibleFieldsWHeader")
    );
  },
  onSubmit: function (cmp, event, helper) {
    console.log("onSubmit...");
    event.preventDefault();
    var isValid = helper.validate();
    console.log("isValid: ", isValid);
    if (isValid) {
      console.log("Request is Valid");
      cmp.find("recordEditForm").submit(function (result) {
        console.log("state: ", result.state);
      });
      var msg = "Submit Request successfully.";
      var toastEvent = $A.get("e.force:showToast");
      toastEvent.setParams({
        type: "success",
        message: msg
      });
      toastEvent.fire();
      $A.get("e.force:refreshView").fire();
    }
  },
  onDelete: function () {}
});
