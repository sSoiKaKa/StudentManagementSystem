({
  setVisibleFieldList: function (cmp) {
    var lsVisibleFields = [];
    lsVisibleFields.push({
      requestType: "Request",
      requestHeader: "Student Card Re-issuance",
      visibleFields: [{ fieldApi: "Reason__c", disabled: false }]
    });
    lsVisibleFields.push({
      requestType: "Request",
      requestHeader: "Application for Graduation Recognition",
      visibleFields: [{ fieldApi: "Academic_Term__c", disabled: false }]
    });
    lsVisibleFields.push({
      requestType: "Request",
      requestHeader: "Application for Deferred Graduation",
      visibleFields: []
    });
    lsVisibleFields.push({
      requestType: "Request",
      requestHeader: "Application for Study Promotion Scholarship",
      visibleFields: [
        { fieldApi: "Academic_Term__c", disabled: false },
        { fieldApi: "Note__c", disabled: false }
      ]
    });
    lsVisibleFields.push({
      requestType: "Request",
      requestHeader: "Second Program Registration",
      visibleFields: [
        { fieldApi: "Academic_Term__c", disabled: false },
        { fieldApi: "Faculty__c", disabled: false },
        { fieldApi: "Major__c", disabled: false }
      ]
    });
    lsVisibleFields.push({
      requestType: "Request",
      requestHeader: "Handling the Procedure for University Dropout",
      visibleFields: [{ fieldApi: "Reason__c", disabled: false }]
    });
    lsVisibleFields.push({
      requestType: "Request & Issue Written Confirmation",
      requestHeader: "Semester Transcript Issuance",
      visibleFields: [
        { fieldApi: "Is_Free_Issuance_Available__c", disabled: true },
        { fieldApi: "Number_of_Free_Issuance__c", disabled: false },
        { fieldApi: "Issuance_type__c", disabled: false },
        { fieldApi: "Academic_Term__c", disabled: false },
        { fieldApi: "Quantity__c", disabled: false },
        { fieldApi: "Fee__c", disabled: false },
        { fieldApi: "Note__c", disabled: false }
      ]
    });
    lsVisibleFields.push({
      requestType: "Request & Issue Written Confirmation",
      requestHeader: "Academic Year Transcript Issuance",
      visibleFields: [
        { fieldApi: "Is_Free_Issuance_Available__c", disabled: true },
        { fieldApi: "Academic_Term__c", disabled: false },
        { fieldApi: "Quantity__c", disabled: false },
        { fieldApi: "Fee__c", disabled: false },
        { fieldApi: "Note__c", disabled: false }
      ]
    });
    lsVisibleFields.push({
      requestType: "Request & Issue Written Confirmation",
      requestHeader: "Academic Record Transcript Issuance",
      visibleFields: [
        { fieldApi: "Is_Free_Issuance_Available__c", disabled: true },
        { fieldApi: "Quantity__c", disabled: false },
        { fieldApi: "Fee__c", disabled: false },
        { fieldApi: "Note__c", disabled: false }
      ]
    });
    lsVisibleFields.push({
      requestType: "Request & Issue Written Confirmation",
      requestHeader: "Training Point Transcript Issuance",
      visibleFields: [
        { fieldApi: "Is_Free_Issuance_Available__c", disabled: true },
        { fieldApi: "Quantity__c", disabled: false },
        { fieldApi: "Fee__c", disabled: false },
        { fieldApi: "Note__c", disabled: false }
      ]
    });
    lsVisibleFields.push({
      requestType: "Request & Issue Written Confirmation",
      requestHeader: "Written Confirmation for Military Service Postponement",
      visibleFields: [
        { fieldApi: "Is_Free_Issuance_Available__c", disabled: true },
        { fieldApi: "Number_of_Free_Issuance__c", disabled: false },
        { fieldApi: "Issuance_type__c", disabled: false },
        { fieldApi: "Quantity__c", disabled: false },
        { fieldApi: "Fee__c", disabled: false },
        { fieldApi: "Note__c", disabled: false }
      ]
    });
    lsVisibleFields.push({
      requestType: "Request & Issue Written Confirmation",
      requestHeader: "Student Confirmation",
      visibleFields: [
        { fieldApi: "Is_Free_Issuance_Available__c", disabled: true },
        { fieldApi: "Number_of_Free_Issuance__c", disabled: false },
        { fieldApi: "Issuance_type__c", disabled: false },
        { fieldApi: "Quantity__c", disabled: false },
        { fieldApi: "Fee__c", disabled: false },
        { fieldApi: "Note__c", disabled: false }
      ]
    });
    lsVisibleFields.push({
      requestType: "Request & Issue Written Confirmation",
      requestHeader: "Student Loan Confirmation",
      visibleFields: [
        { fieldApi: "Is_Free_Issuance_Available__c", disabled: true },
        { fieldApi: "Number_of_Free_Issuance__c", disabled: false },
        { fieldApi: "Issuance_type__c", disabled: false },
        { fieldApi: "Quantity__c", disabled: false },
        { fieldApi: "Fee__c", disabled: false },
        { fieldApi: "Note__c", disabled: false }
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
      visibleFields: [
        { fieldApi: "Academic_Term__c", disabled: false },
        { fieldApi: "Subject__c", disabled: false }
      ]
    });
    lsVisibleFields.push({
      requestType: "Score Review",
      requestHeader: "Score Review Request",
      visibleFields: [
        { fieldApi: "Subject__c", disabled: false },
        { fieldApi: "Note__c", disabled: false }
      ]
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
        { fieldApi: "Academic_Term__c", disabled: false },
        { fieldApi: "Note__c", disabled: false },
        { fieldApi: "Submitting_Date__c", disabled: false },
        { fieldApi: "Due_date__c", disabled: false }
      ]
    });
    cmp.set("v.lsVisibleFields", lsVisibleFields);
  },
  validate: function () {
    return true;
  }
});
