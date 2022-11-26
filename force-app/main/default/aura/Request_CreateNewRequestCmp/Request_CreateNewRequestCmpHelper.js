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
  },
  processDataForEachRequestHeader: function (cmp) {
    console.log("processDataForEachRequestHeader...");
    var requestHeader = cmp.get("v.requestHeader");
    switch (requestHeader) {
      case "Application for Graduation Recognition":
        this.generateTerm(cmp);
        break;
      case "Application for Study Promotion Scholarship":
        this.generateTerm(cmp);
        break;
      case "Second Program Registration":
        this.generateTerm(cmp);
        break;
      case "Semester Transcript Issuance":
        this.generateTerm(cmp);
        break;
      default:
        break;
    }
  },
  generateTerm: function (cmp) {
    var lsTerms = [];
    var currentTime = new Date();
    var currentYear = currentTime.getFullYear();
    var currentMonth = currentTime.getMonth();
    var numberOfTerms = 8;
    var numOfYear = 2;
    var termOrder = 1;
    if (currentMonth < 8) {
      numOfYear = 3;
    }
    for (var i = numberOfTerms; i > 0; i--) {
      var yearTerm1 = currentYear - numOfYear;
      var yearTerm2 = yearTerm1 + 1;
      var termString = "";
      if (termOrder === 3) {
        termString = "Summer Term of Year " + yearTerm1 + "-" + yearTerm2;
      } else {
        termString =
          "Term No." + termOrder + " of Year " + yearTerm1 + "-" + yearTerm2;
      }
      lsTerms.push(termString);
      if (termOrder === 3) {
        termOrder = 1;
        numOfYear--;
      } else {
        termOrder++;
      }
    }
    console.log("lsTerms: ", lsTerms);
    cmp.set("v.lsTerms", lsTerms);
  },
  showSuccessMessage: function (msg) {
    var toastEvent = $A.get("e.force:showToast");
    toastEvent.setParams({
      type: "success",
      message: msg
    });
    toastEvent.fire();
  },
  showErrorMessage: function (errorMessage) {
    var toastEvent = $A.get("e.force:showToast");
    toastEvent.setParams({
      type: "error",
      message: errorMessage
    });
    toastEvent.fire();
  }
});
