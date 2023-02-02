describe('Elements Commands', () => {

    it('Filling form', async () => {
        browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        browser.maximizeWindow()
        await browser.pause(5000)
        const username = await $("input[class='oxd-input oxd-input--focus']")

        await browser.pause(3000)

        await username.setValue("admin")

        await browser.pause(1000)

        const value = await username.getValue()

        console.log("Username is ",value);

        const password = await $("input[class='oxd-input oxd-input--active']")

        await password.setValue("admin123")

        await browser.pause(1000)

        const value2= await password.getValue()

        console.log("Password is ",value2);

        await browser.pause(1000)

        const loginButton = await $("button[class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']")

        const displaystatus= await loginButton.isDisplayed()

        const enablestatus= await loginButton.isEnabled()

        const clickstatus= await loginButton.isClickable()

        console.log("Displayed?",displaystatus);
        console.log("Enabled?",enablestatus);
        console.log("Clickable?",clickstatus);

        await expect(loginButton).toBeClickable()
        await expect(loginButton).toBeEnabled()
        await expect(loginButton).toBeDisplayed()

        const loginButtonValue= await loginButton.getAttribute("submit")

        console.log("Button text is ", loginButtonValue)

        const loginButtonCSSValue = loginButton.getCSSProperty("font-style:")
        console.log("Button font style is ",loginButtonCSSValue);

        loginButton.click()

        expect(browser).toHaveUrlContaining('dashboard')
        await browser.pause(5000)




        




    });
    
});