module.exports = {
    preset: 'jest-puppeteer', 
    testRegex: './*\\.test\\.js$',
    setupFilesAfterEvn: ['./setupTest.js']
}