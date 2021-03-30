Feature: API Rest testing for pets endpoint
  Scenario: Verify All pet with status Available 
    Given I validate the pet endpoint
    Then I should see all pets with status Available

  Scenario: Verify POST new pet as Available
    Given I post new pet as Available 
    Then I should see new pet created

  Scenario: Verify UPDATE pet as Available to Sold
    Given I update a pet from Available to Sold
    Then I should see pet updated

  Scenario: Verify DELETE a pet 
    Given I delete a pet already created
