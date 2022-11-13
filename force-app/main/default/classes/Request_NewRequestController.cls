/**
 * @description       :
 * @author            : Tuan Tran
 * @group             :
 * @last modified on  : 11-13-2022
 * @last modified by  : Tuan Tran
 **/
public without sharing class Request_NewRequestController {
  @AuraEnabled
  public static Student__c getStudentInformation() {
    try {
      String userId = UserInfo.getUserId();
      System.debug('userId: ' + userId);
      Student__c student = [
        SELECT
          Id,
          Name,
          Student_Name__c,
          Date_Of_Birth__c,
          Acitvity_Class__r.Class_Name__c,
          Faculty__r.Faculty_Name__c,
          (
            SELECT Id, Name, Admission_Year__c, Id_Input__c, Is_Valid__c
            FROM Student_Cards__r
          )
        FROM Student__c
        WHERE User__c = :userId
      ];
      return student;
    } catch (Exception e) {
      System.debug('Fail to get Student Information: ' + e.getMessage());
      return null;
    }
  }
}
