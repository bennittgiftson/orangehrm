describe("Smoke Test",function(){

    it("Verify URL",async function(){

        await browser.url("https://opensource-demo.orangehrmlive.com")
        //console.log("Session id is ",browser.sessionId);
        //console.log("Capabilities",browser.capabilities);
        expect(browser).toHaveUrlContaining('opensource')


    })

    it("Verify Title",async function(){
        await browser.url("https://opensource-demo.orangehrmlive.com")
        expect(browser).toHaveTitle("OrangeHRM")


    })


    it("Verify Login", async function(){
        await browser.url("https://opensource-demo.orangehrmlive.com")
        expect(browser).toHaveTitle("OrangeHRM")
        await $("input[class='oxd-input oxd-input--focus']").setValue("admin")
        await $("input[class='oxd-input oxd-input--active']").setValue("admin123")
        await $("button[class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']").click()
        expect(browser).toHaveUrlContaining('dashboard')
        await browser.pause(5000)


    })
})