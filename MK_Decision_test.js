Feature('MK Decision');

Scenario('test something', ({ I, mk }) => {
	I.amOnPage('https://close-dashboard.alpha.mkdecision.com/requests');
	I.fillField('//input[@autofocus]', 'credit.manager@mkdecision.com');
	I.fillField('//input[@id="password"]', 'MKtraining2020!');
	I.click('Sign In');	
	I.see('Pipeline');
        I.click('//span[@class="MuiTypography-root MuiListItemText-primary MuiTypography-subtitle2"]');
	I.see('Orders');
        I.click('//*[@id="root"]/div/header/div[2]/div/button');
	I.see('Statuses');

        I.click('//input[@name="referrerId"]');
        I.click('MK Credit Cards');
        I.click('Apply');
});
