const RetirementCalculator = require('../../testData/RetirementCalculator.json');
const RetirementCalc = require('../pageobjects/RetirementCalc.page');
const LoginPage = require('../pageobjects/login.page')

describe('Retirement Calculator Scenarios', () => {


    describe('TC001 : Verify if the User is able to submit form with all required fields filled', () => {
        var testData = RetirementCalculator.TC001_AllRequiredFields

        describe('Enter all reqired fields in Retirement Cakculator String', () => {
            it('Launch URL', async () => {
                console.log("Launch Retirement Calcluator Link");
                var url = RetirementCalculator.RetirementCalcLink;
                await LoginPage.openUrl(url);
                console.log("Launched Retirement Calcluator Link");
            })
            it('Enter Current Age', async () => {
                await RetirementCalc.enterCurrentAge(testData.CurrentAge);
            });
            it('Enter valid Retirement Age', async () => {
                await RetirementCalc.enterRetirementAge(testData.RetirementAge);
            });
            it('Enter current Annual Income', async () => {
                await RetirementCalc.enterCurrentAnnualIncome(testData.CurrentAnnualIncome);
            });
            it('Enter current retirement savings', async () => {
                await RetirementCalc.enterCurrentRetirementSavings(testData.CurrentRetirementySavings);
            });
            it('Enter current retirement savings contribution', async () => {
                await RetirementCalc.enterCurrentRetirementContribution(testData.CurrentAnnualRetirementSavings);
            });
            it('Enter rate of increase in annual retirement savings', async () => {
                await RetirementCalc.enterAnnualRetirementContributionIncrease(testData.AnnualRetirementSavingsIncrease);
            });
            it('Enter social security benifits', async () => {
                await RetirementCalc.enterSocialSecurityIncome(testData.SocialSecurityIncome);
            });
            it('Enter valid relationship status', async () => {
                await RetirementCalc.enterMaritalStatus(testData.MaritalStatus);
            });
            it('Hit Submit Button', async () => {
                await RetirementCalc.submitButtonClick();
            });
        });
        describe('check reports', () => {
            it('Verify Results', async () => {
                await RetirementCalc.verifyReport();
            });
        });
    });
    describe('TC002 : Verify if User is able to submit form with all fields filled in ', () => {
        var testData = RetirementCalculator.TC002_AllFieldsInput
        var updateTestData = RetirementCalculator.TC003_UpdateDefaultFields
       describe('Enter Valid Inputs in Retirement Calculator String', () => {
            it('Launch URL', async () => {
                console.log("Launch Retirement Calculator Link");
                var url = RetirementCalculator.RetirementCalcLink;
                await LoginPage.openUrl(url);
            })
            it('Enter Valid Current Age ', async () => {
                await RetirementCalc.enterCurrentAge(testData.CurrentAge);
            });
            it('Enter Valid Reirement Age', async () => {
                await RetirementCalc.enterRetirementAge(testData.RetirementAge);
            });
            it('Enter Valid Current Annual Income', async () => {
                await RetirementCalc.enterCurrentAnnualIncome(testData.CurrentAnnualIncome);
            });
            it('Enter Valid Spouse Annual Income', async () => {
                await RetirementCalc.enterSpouseAnnualIncome(testData.SpouseAnnualIncome);
            });
            it('Enter Valid Current Retirement Saving', async () => {
                await RetirementCalc.enterCurrentRetirementSavings(testData.CurrentRetirementSavings);
            });
            it('Enter Valid Currently saving each year for retirement', async () => {
                await RetirementCalc.enterCurrentRetirementContribution(testData.CurrentAnnualRetirementSavings);
            });
            it('Enter Valid Rate of increase in your savings each year', async () => {
                await RetirementCalc.enterAnnualRetirementContributionIncrease(testData.AnnualRetirementSavingsIncrease);
            });
            it('Enter Valid Social Security benifits', async () => {
                await RetirementCalc.enterSocialSecurityIncome(testData.SocialSecurityIncome);
            });
            it('Enter Valid Relationship Status', async () => {
                await RetirementCalc.enterRelationshipStatus(testData.MaritalStatus);
            });
            it('Enter Valid Social Security Override Amount', async () => {
                await RetirementCalc.enterSocialSecurityOverride(testData.SocialSecurityOverride);
            });
            it('Open Default calculator values', async () => {
                await RetirementCalc.defaultCalcValues();
            });
            it('Enter Valid Additional Income', async () => {
                await RetirementCalc.enterAdditionalIncome(testData.AdditionalIncome);
            });
            it('Enter Valid Years do you plan to depend on retirement income', async () => {
                await RetirementCalc.enterYearsofRetirementNeedsLast(testData.YearsRetirementSavingsLasts);
            }); 
            it('Enter Valid post-retirement income increase with inflation', async () => {
                await RetirementCalc.enterPostRetireIncomeIncWithInflation(testData.PostRetirementIncomeIncWithInflation);
            }); 
            it('Enter Valid Expected inflation rate', async () => {
                await RetirementCalc.enterExpectedInflationRate(testData.ExpectedInflationRate);
            });
            it('Enter Valid Final annual income do you want available in each year of your retirement', async () => {
                await RetirementCalc.enterPercenFinalAnnualIncomeDesired(testData.PartOfAnuIncomeNeedYearlyAfterRetirement);
            });
            it('Enter Valid Pre-retirement investment returnnt', async () => {
                await RetirementCalc.enterPreRetireInvestmentReturn(testData.PreRetirementInvestmentReturn);
            });
            it('Enter Valid Post-retirement investment return', async () => {
                await RetirementCalc.enterPostRetirInveReturn(testData.PostRetirementInvestmentReturn);
            });
            it('Hit Save and Submit Button', async () => {
                await RetirementCalc.saveButtonClick();
                await RetirementCalc.submitButtonClick();
            });
        });
        describe('Check Report', () => {
            it('Verify Results', async () => {
                await RetirementCalc.verifyReport();
            });
        });
    });
    describe('TC003 : Verify if User should be able to update default calculator values ', () => {
        var testData = RetirementCalculator.TC003_UpdateDefaultFields
        it('Launch URL', async () => {
            console.log("Launch Retirement Calculator Link");
            var url = RetirementCalculator.RetirementCalcLink;
            await LoginPage.openUrl(url);
        })
        it('Open Default calculator values', async () => {
            await RetirementCalc.defaultCalcValues();
        });
        it('Enter Valid Additional Income', async () => {
            await RetirementCalc.enterAdditionalIncome(testData.AdditionalIncome);
        });
        it('Enter Valid Years do you plan to depend on retirement income', async () => {
            await RetirementCalc.enterYearsofRetirementNeedsLast(testData.YearsRetirementSavingsLasts);
        }); 
        it('Enter Valid post-retirement income increase with inflation', async () => {
            await RetirementCalc.enterPostRetireIncomeIncWithInflation(testData.PostRetirementIncomeIncWithInflation);
        }); 
        it('Enter Valid Expected inflation rate', async () => {
            await RetirementCalc.enterExpectedInflationRate(testData.ExpectedInflationRate);
        });
        it('Enter Valid Final annual income do you want available in each year of your retirement', async () => {
            await RetirementCalc.enterPercenFinalAnnualIncomeDesired(testData.PartOfAnuIncomeNeedYearlyAfterRetirement);
        });
        it('Enter Valid Pre-retirement investment returnnt', async () => {
            await RetirementCalc.enterPreRetireInvestmentReturn(testData.PreRetirementInvestmentReturn);
        });
        it('Enter Valid Post-retirement investment return', async () => {
            await RetirementCalc.enterPostRetirInveReturn(testData.PostRetirementInvestmentReturn);
        });
        it('Hit Save', async () => {
            await RetirementCalc.saveButtonClick();
        });
        it('Open Default calculator values', async () => {
            await RetirementCalc.defaultCalcValues();
        });
        it('Enter Valid Additional Income', async () => {
            await RetirementCalc.enterAdditionalIncome(testData.UpdatedAdditionalIncome);
        });
        it('Enter Valid Years do you plan to depend on retirement income', async () => {
            await RetirementCalc.enterYearsofRetirementNeedsLast(testData.UpdatedYearsRetirementSavingsLasts);
        });
        it('Hit Save', async () => {
            await RetirementCalc.saveButtonClick();
        });
        it('Verify if the Values are actually saved', async () => {
            await RetirementCalc.verifyDefaultValues( testData.UpdatedYearsRetirementSavingsLasts);
        });
    });
});