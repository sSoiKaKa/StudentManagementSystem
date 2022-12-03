/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
({
  generateDataForEachRequest: function (cmp, event, helper) {
    var requestHeader = cmp.get("v.requestHeader");
    switch (requestHeader) {
      case "Student Card Re-issuance":
        cmp.set("v.cardTitle", "Your Student Card Information");
        break;
      case "Semester Transcript Issuance":
        cmp.set("v.cardTitle", "Semester Transcript");
        break;
      case "Academic Year Transcript Issuance":
        helper.getAcademicYearTranscriptData(cmp, event, helper);
        break;
      default:
        break;
    }
  },
  getAcademicYearTranscriptData: function (cmp, event, helper) {
    console.log('getAcademicYearTranscriptData...');
    var studentInfo = cmp.get("v.studentInfo");
    var studentId = studentInfo.Id;
    var admissionYear = studentInfo.Admission_Day__c.substring(0, 4);
  }
});
