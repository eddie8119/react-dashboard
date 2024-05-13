const puppeteer = require('puppeteer');
const { getDocument, queries, waitFor } = require('pptr-testing-library');
const { getByTestId, getByLabelText } = queries;

describe('Create Project e2e test',() => {   
    test('user can create a project', async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('http://localhost:4000');

        
        // Click the "Create Project" button
        const createProjectBtn = await getByTestId(page, 'create-project-btn');
        await createProjectBtn.click();

        // Fill out the form
        // await page.waitForSelector('input[name="name"]');
        // await page.type('input[name="name"]', 'Test Project');
        // // Add other fields as necessary

        // // Submit the form
        // await page.click('button[type="submit"]');

        // // Wait for the new project to appear in the list
        // await page.waitForSelector('.project-list-item'); // Adjust the selector based on your actual project list item

        // // Verify the new project appears in the list
        // const projectListItems = await page.$$('.project-list-item'); // Adjust the selector based on your actual project list item
        // const projectNames = await Promise.all(projectListItems.map(item => item.evaluate(el => el.textContent)));
        // expect(projectNames).toContain('Test Project');

        await browser.close();

    });
});