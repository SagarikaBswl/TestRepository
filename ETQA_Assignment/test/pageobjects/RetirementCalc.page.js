const Page = require('./page');
//const RetirementCalculator = require('../../testData/RetirementCalculator.json');


class RetirementCalc extends Page {
    
    get retireCalcPageLoad () {
        return $('#dsgint-nav-menu-item-1.1');
    }
    get pageTitlePageLoad () {
        return $('#calculator-intro-section');
    }
    get currentAge () {
        return $('#current-age');
    }
    get retirementAge () {
        return $('#retirement-age');
    }
    get currentAnnualIncome () {
        return $('#current-income');
    }
    get spouseAnnualIncome () {
        return $('#spouse-income');
    }
    get currentTotalSaving () {
        return $('#current-total-savings');
    }
    get currentRetireContrib () {
        return $('#current-annual-savings');
    }
    get annualRetirementContributionIncrease () {
        return $('//input[@id= "savings-increase-rate"]');
    }
    get ssnInputYes () {
        return $('//label[@for= "yes-social-benefits"]');
    }
    get ssnInputNo () {
        return $('//label[@for= "no-social-benefits"]');
    }
    get relationShipLabel () {
        return $('#marital-status-label');
    }
    get marriedCheck () {
        return $('//label[@for= "married"]');
    }
    get singleCheck () {
        return $('//label[@for= "single"]');
    }
    get ssnOverrideAmt () {
        return $('//input[@id= "social-security-override"]');
    }
    get getDefaultValue () {
        return $('//a[contains(text(),"Adjust default values")]');
    }
    get additionAmt () {
        return $('//input[@id= "additional-income"]');
    }
    get yearsofRetirementNeedsLast () {
        return $('//input[@id= "retirement-duration"]');
    }
    get postRetireYes () {
        return $('//label[@for= "include-inflation"]');
    }
    get postRetireNo () {
        return $('//label[@for= "exclude-inflation"]');
    }
    get expectedInflationRate () {
        return $('//input[@id= "expected-inflation-rate"]');
    }
    get percenFinalAnnualIncomeDesired () {
        return $('//input[@id= "retirement-annual-income"]');
    }
    get preRetireInvestmentReturn () {
        return $('//input[@id= "pre-retirement-roi"]');
    }
    get postRetirInveReturn () {
        return $('//input[@id= "post-retirement-roi"]');
    }
    get saveChangesButton () {
        return $('//button[contains(text(),"Save changes")]');//*[@id="retirement-form"]/div[4]/div[2]/div[1]/button
    }
    get submitButton () {
        return $('//button[@data-tag-id="submit"]');//*[@id="default-values-form"]/div[2]/div/div[1]/button
    }
    get resultText () {
        return $('//div[@id="calculator-results-container"]/h3');
    }
    get errorText () {
        return $('p#calculator-input-alert-desc');
    }
    get reportContent () {
        return $('p#result-message');
    }
    get socialSecurityAsText () {
        return $('//label[@for="social-security-override"]');
    }
    get maritalStatusAsText () {
        return $('//legend[@id="marital-status-label"]');
    }
    get clearForm () {
        return $('//button[text()="Clear form"]');
    }

    async clearTheEntireForm () {
        this.clearForm.waitForClickable()
        this.clearForm.click()
    }
    async enterCurrentAge (age) {
        try {
            await browser.keys('Enter')
            await this.pageTitlePageLoad.waitForDisplayed();
            await this.pageTitlePageLoad.click();
            
            await this.currentAge.waitForDisplayed();
            await this.currentAge.setValue(age);

        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    async enterRetirementAge (age) {
        try{
           
            await this.retirementAge.waitForClickable({timeout: 15000});
            await this.retirementAge.click();
            await this.retirementAge.setValue(age);
           
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
     }

    async enterCurrentAnnualIncome (income) {
        try {
            await this.currentAnnualIncome.waitForClickable({timeout: 15000});
            await this.currentAnnualIncome.click();
            await this.currentAnnualIncome.clearValue();
            await this.currentAnnualIncome.setValue(income); 
            
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    async enterSpouseAnnualIncome (income) {
        try{
           
            await this.spouseAnnualIncome.waitForClickable({timeout: 15000});
            await this.spouseAnnualIncome.click();
            await this.spouseAnnualIncome.clearValue();
            await browser.pause(300)
            await this.spouseAnnualIncome.setValue(income);

        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async enterCurrentRetirementSavings (saving) {
        try{
            if (saving > 0) {
                console.log("Current Retirement Saving should be greater than 0: ",saving);
                await browser.pause(200)
                await this.currentTotalSaving.waitForClickable({timeout: 15000});
                await this.currentTotalSaving.click();
                await this.currentTotalSaving.clearValue();
                await browser.pause(200)
                await this.currentTotalSaving.setValue(saving);
            } else {
                console.log("Invalid Current Retirement Saving : "+saving);
            }

        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async enterCurrentRetirementContribution (saving) {
        try {
            await this.currentRetireContrib.waitForClickable({timeout: 15000});
            await this.currentRetireContrib.click();
            await this.currentRetireContrib.setValue(saving);
            
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async enterAnnualRetirementContributionIncrease (saving) {
        try {
            
            await this.annualRetirementContributionIncrease.waitForClickable({timeout: 15000});
            await this.annualRetirementContributionIncrease.click();
            await this.annualRetirementContributionIncrease.setValue(saving);
                
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
        
    }
    async enterSocialSecurityIncome (ssn) {
        try {
            
            console.log("Social Security benifits is selected as Yes!");
            await this.ssnInputYes.waitForClickable({timeout: 15000});
            await this.ssnInputYes.click();
            
            console.log("Social Security benifits is not selected as No!");
            await this.ssnInputNo.waitForClickable({timeout: 15000});
            await this.ssnInputNo.click();
             
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async enterRelationshipStatus (status) {
        try {
            await this.relationShipLabel.scrollIntoView();
            status = status.toLowerCase();
            console.log("Initial Relationship Status: "+status);
            // Check Relationship Status
            if (status.includes("s")) {
                 console.log("Relationship Status is Single!");
                 await this.singleCheck.waitForClickable({timeout:10000});
                 await this.singleCheck.click();
             }
             else if (status.includes("m")) {
                console.log("Relationship Status is Married!");
                await this.marriedCheck.waitForClickable({timeout:10000});
                await this.marriedCheck.click();
            }else {
                 throw("Invalid input for Relationship Status : "+ status);
             } 
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async enterSocialSecurityOverride (override) {
        try {
            if (override > 0) {
                console.log("Social Security Override Amount should be greater than 0: "+override);  
                await this.ssnOverrideAmt.waitForClickable({timeout: 15000});
                await this.ssnOverrideAmt.click();
                await this.ssnOverrideAmt.setValue(override);
            } else {
            console.log("Invalid Social Security Override Amount : "+override);
            }
            
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async defaultCalcValues () {
        try {
            await this.getDefaultValue.waitForClickable({timeout: 15000});
            await this.getDefaultValue.click();
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async enterAdditionalIncome (override) {
        try {
            
            await browser.pause(200)
            await this.additionAmt.waitForClickable({timeout: 15000});
            await this.additionAmt.click();
        
            await this.additionAmt.setValue(override);
            await browser.pause(2000)
             
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async enterYearsofRetirementNeedsLast (year) {
        try {
            
            await this.yearsofRetirementNeedsLast.waitForClickable({timeout: 15000});
            await this.yearsofRetirementNeedsLast.click();
            await this.yearsofRetirementNeedsLast.setValue(year);
            
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async enterPostRetireIncomeIncWithInflation (status) {
        try {  
            
            console.log("Post-retirement income increase with inflation!");
            await this.postRetireYes.waitForClickable({timeout: 15000});
            await this.postRetireYes.click();
             
            console.log("Post-retirement income doesn't increase with inflation!");
            await this.postRetireNo.waitForClickable({timeout: 15000});
            await this.postRetireNo.click();
            
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async enterExpectedInflationRate (year) {
        try {
            
            await this.expectedInflationRate.waitForClickable({timeout: 15000});
            await this.expectedInflationRate.click();
            await this.expectedInflationRate.setValue(year);
            
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async enterPercenFinalAnnualIncomeDesired (year) {
        try {
            
            await this.percenFinalAnnualIncomeDesired.waitForClickable({timeout: 15000});
            await this.percenFinalAnnualIncomeDesired.click();
            await this.percenFinalAnnualIncomeDesired.setValue(year);
            
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async enterPreRetireInvestmentReturn (rate) {
        try {
            
            await this.preRetireInvestmentReturn.waitForClickable({timeout: 15000});
            await this.preRetireInvestmentReturn.click();
            await this.preRetireInvestmentReturn.setValue(rate);
            
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async enterPostRetirInveReturn (rate) {
        try {
            
            await this.postRetirInveReturn.waitForClickable({timeout:15000});
            await this.postRetirInveReturn.click();
            await this.postRetirInveReturn.setValue(rate);
            
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async saveButtonClick () {
        try {
            console.log("Save Button");
            await this.saveChangesButton.waitForClickable({timeout: 15000});
            await this.saveChangesButton.click();
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async submitButtonClick () {
        try {
                console.log("Submit Button");
                await this.submitButton.waitForClickable();
                await this.submitButton.click();
            
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async verifyReport () {
        try {
            if (await this.errorText.isDisplayed()) {
               console.log(await this.errorText.getText() );
            }else{
            // Verify the successful report
            await browser.pause(2000)
            await this.resultText.waitForDisplayed({timeout: 40000});
            var text = await this.resultText.getText();
            text = text.toLowerCase();
            if (text.includes("result")) {
                // Verify the content of report
               text = await this.reportContent.getText();
               var textLower = text.toLowerCase();
               if (textLower.includes("congrat")) {
                    console.log(text);
               } else {
                    console.log(text);
               }
            }
        
        }    
        } 
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    async socialSecurityAsNo () {
        try {
            await this.ssnInputNo.waitForClickable({timeout:10000});
            await this.ssnInputNo.click();
            if (!(await this.socialSecurityAsText.isDisplayed())) {
                var ssnOverrideStatus = await this.socialSecurityAsText.isDisplayed()
                var maritalStatus = await this.maritalStatusAsText.isDisplayed()
                console.log(ssnOverrideStatus +" : "+maritalStatus);
                if (!ssnOverrideStatus && !maritalStatus) {
                    console.log("Social Security Benifits is selected as No");
                } else {
                    throw("Social Security Benifits is selected as Yes")
                }  
            } 
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    async socialSecurityAsYes () {
        try {
            await this.ssnInputYes.waitForDisplayed();
            await this.ssnInputYes.click();
            await this.socialSecurityAsText.waitForDisplayed();
            var ssnOverrideStatus = await this.socialSecurityAsText.isDisplayed();
            var maritalStatus = await this.maritalStatusAsText.isDisplayed();

            if (ssnOverrideStatus && maritalStatus) {
                console.log("Social Security Benifits is selected as Yes");
            } else {
                throw("Social Security Benifits is selected as No")
            }
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    async verifyDefaultValues (yearsofRetirementNeedsLast) {
        try {
            var text;
            await this.defaultCalcValues();
            // Years for Retirement
            await this.yearsofRetirementNeedsLast.waitForDisplayed({timeout:30000});
            text = await this.yearsofRetirementNeedsLast.getValue();
            console.log(text+"  :  "+yearsofRetirementNeedsLast);
            expect(parseFloat(text)).toEqual(parseFloat(yearsofRetirementNeedsLast));
            console.log( "years of Retirement Needs to last is Saved!");

        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    
}

module.exports = new RetirementCalc();