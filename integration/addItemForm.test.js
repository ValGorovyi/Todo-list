describe('addItemForm', () => {
    it('base example visible test', async () => {
        await page.goto('http://localhost:6006/iframe.html?id=additemform--add-item-form-base-example&viewMode=story')
        const image = await page.screenshot()

        expect(image).toMatchImageSnapshot()
    })
})