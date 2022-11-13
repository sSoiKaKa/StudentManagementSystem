/* eslint-disable no-console */
({
  setVisibleFieldList: function (cmp) {
    var lsVisibleFields = [];
    lsVisibleFields.push({
      requestType: "Request",
      requestHeader: "Student Card Re-issuance",
      visibleFields: ["isReasonSelected"]
    });
    lsVisibleFields.push({
      requestType: "Request",
      requestHeader: "Application for Graduation Recognition",
      visibleFields: ["isAcademicTermSelected"]
    });
    lsVisibleFields.push({
      requestType: "Request",
      requestHeader: "Application for Deferred Graduation",
      visibleFields: []
    });
    lsVisibleFields.push({
      requestType: "Request",
      requestHeader: "Application for Study Promotion Scholarship",
      visibleFields: ["isAcademicTermSelected", "isNoteSelected"]
    });
    lsVisibleFields.push({
      requestType: "Request",
      requestHeader: "Second Program Registration",
      visibleFields: [
        "isAcademicTermSelected",
        "isFacultySelected",
        "isMajorSelected"
      ]
    });
    lsVisibleFields.push({
      requestType: "Request",
      requestHeader: "Handling the Procedure for University Dropout",
      visibleFields: ["isReasonSelected"]
    });
    lsVisibleFields.push({
      requestType: "Request & Issue Written Confirmation",
      requestHeader: "Semester Transcript Issuance",
      visibleFields: [
        "isIsFreeIssuanceAvailableSelected",
        "isNumberOfFreeIssuanceSelected",
        "isIssuanceTypeSelected",
        "isAcademicTermSelected",
        "isQuantitySelected",
        "isFeeSelected",
        "isNoteSelected"
      ]
    });
    lsVisibleFields.push({
      requestType: "Request & Issue Written Confirmation",
      requestHeader: "Academic Year Transcript Issuance",
      visibleFields: [
        "isIsFreeIssuanceAvailableSelected",
        "isAcademicTermSelected",
        "isQuantitySelected",
        "isFeeSelected",
        "isNoteSelected"
      ]
    });
    lsVisibleFields.push({
      requestType: "Request & Issue Written Confirmation",
      requestHeader: "Academic Record Transcript Issuance",
      visibleFields: [
        "isIsFreeIssuanceAvailableSelected",
        "isQuantitySelected",
        "isFeeSelected",
        "isNoteSelected"
      ]
    });
    lsVisibleFields.push({
      requestType: "Request & Issue Written Confirmation",
      requestHeader: "Training Point Transcript Issuance",
      visibleFields: [
        "isIsFreeIssuanceAvailableSelected",
        "isQuantitySelected",
        "isFeeSelected",
        "isNoteSelected"
      ]
    });
    lsVisibleFields.push({
      requestType: "Request & Issue Written Confirmation",
      requestHeader: "Written Confirmation for Military Service Postponement",
      visibleFields: [
        "isIsFreeIssuanceAvailableSelected",
        "isNumberOfFreeIssuanceSelected",
        "isIssuanceTypeSelected",
        "isQuantitySelected",
        "isFeeSelected",
        "isNoteSelected"
      ]
    });
    lsVisibleFields.push({
      requestType: "Request & Issue Written Confirmation",
      requestHeader: "Student Confirmation",
      visibleFields: [
        "isIsFreeIssuanceAvailableSelected",
        "isNumberOfFreeIssuanceSelected",
        "isIssuanceTypeSelected",
        "isQuantitySelected",
        "isFeeSelected",
        "isNoteSelected"
      ]
    });
    lsVisibleFields.push({
      requestType: "Request & Issue Written Confirmation",
      requestHeader: "Student Loan Confirmation",
      visibleFields: [
        "isIsFreeIssuanceAvailableSelected",
        "isNumberOfFreeIssuanceSelected",
        "isIssuanceTypeSelected",
        "isQuantitySelected",
        "isFeeSelected",
        "isNoteSelected"
      ]
    });
    lsVisibleFields.push({
      requestType: "Support Email, LMS Accounts",
      requestHeader: "Password Reset for Office 365 Account",
      visibleFields: []
    });
    lsVisibleFields.push({
      requestType: "Support Email, LMS Accounts",
      requestHeader: "Password Reset for LMS account",
      visibleFields: []
    });
    lsVisibleFields.push({
      requestType: "Postpone the Exam, Register for Additional Exam",
      requestHeader: "Exam Postponement",
      visibleFields: ["isAcademicTermSelected", "isSubjectSelected"]
    });
    lsVisibleFields.push({
      requestType: "Score Review",
      requestHeader: "Score Review Request",
      visibleFields: ["isSubjectSelected", "isNoteSelected"]
    });
    lsVisibleFields.push({
      requestType: "Take Studying Break",
      requestHeader: "Studying Break Request",
      visibleFields: []
    });
    lsVisibleFields.push({
      requestType: "Return to Study",
      requestHeader: "Study Return Request",
      visibleFields: []
    });
    lsVisibleFields.push({
      requestType: "Defer Paying Tuition Fee",
      requestHeader: "Tuition Fee Payment Deferral",
      visibleFields: [
        "isAcademicTermSelected",
        "isNoteSelected",
        "isSubmittingDateSelected",
        "isDueDateSelected"
      ]
    });
    cmp.set("v.lsVisibleFields", lsVisibleFields);
  },
  getStudentInformation: function (cmp) {
    console.log("getStudentInformation...");
    var action = cmp.get("c.getStudentInformation");
    action.setCallback(this, function (response) {
      var state = response.getState();
      console.log("state: ", state);
      console.log("response: ", response);
      if (state === "SUCCESS") {
        var returnValue = response.getReturnValue();
        console.log("returnValue: ", returnValue);
        if (returnValue) {
          cmp.set("v.studentInfo", returnValue);
          var requestDetailInfo = cmp.find("requestDetailInfo");
          requestDetailInfo.updateStudentInformation(cmp.get("v.studentInfo"));
        }
      } else {
        console.log("Failed.");
        var errors = response.getError();
        console.log("Error: ", errors);
      }
    });
    $A.enqueueAction(action);
  },
  validate: function (cmp) {
    console.log("validate...");
    var isValid = true;
    var requestHeader = cmp.get("v.requestHeader");
    console.log("requestHeader: ", requestHeader);
    switch (requestHeader) {
      case "Student Card Re-issuance":
        var reason = cmp.find("reason").get("v.value");
        console.log("reason: ", reason);
        if (!reason) {
          isValid = false;
          cmp.set(
            "v.submitErrorMessage",
            "Reason field is required. Please complete this field."
          );
        }
        break;
      default:
        break;
    }
    console.log("isValid: ", isValid);
    return isValid;
  }
});
