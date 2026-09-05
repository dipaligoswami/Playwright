import { test, expect } from '../../fixtures/test-fixtures';
import { connectToDatabase } from '../../helpers/database';


test.describe('DB connection smoke', { tag: '@smoke' }, () => {
    test('Verify that database connection is successful', async ({ page, loginPage, gotoAndAssert, testData }) => {
        const connection = await connectToDatabase();
        const [rows]:any = await connection.execute('SELECT * FROM production.users where mobile_number = ?', [testData.adminMobile]);
        console.log('Rows: ', rows[0].loginotp);

        await connection.end();
    });
});