/**
 * @description       :
 * @author            : Tuan Tran
 * @group             :
 * @last modified on  : 11-12-2022
 * @last modified by  : Tuan Tran
 **/
public without sharing class Request_NewRequestController {
  @AuraEnabled
  public static Student__c getStudentInformation() {
    try {
      String userId = UserInfo.getUserId();
      System.debug('userId: ' + userId);
      Student__c student = [
        SELECT Id, Name, Student_Name__c
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
