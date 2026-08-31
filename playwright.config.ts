import dotenv from 'dotenv';
import { defineConfig, devices } from '@playwright/test';

dotenv.config();

const timestamp = new Date()
  .toISOString()
  .replace(/[:.]/g, '-');

export default defineConfig({
  testDir: './tests',

  /* Parallel execution */
  fullyParallel: true,

  /* Safety */
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  /* REPORTING (VERY IMPORTANT FOR PROOF) */
  reporter: [
    ['html',  { outputFolder: `playwright-report/login-${timestamp}`, open: 'never' }], 
    ['json', { outputFile: 'test-results/results.json' }],
  ],

  /* GLOBAL TEST SETTINGS */
  use: {

    screenshot: 'on',              
    video: 'retain-on-failure',    
    trace: 'on-first-retry',       

    actionTimeout: 15000,
    navigationTimeout: 30000,
  },

  /* BROWSERS */
  projects: [
  {
    name: 'Main-Domain',
    use: {
      ...devices['Desktop Chrome'],
      baseURL: 'https://app.nrichlearning.com',
    },
  },
  // {
  //   name: 'On-Domain',
  //   use: {
  //     ...devices['Desktop Chrome'],
  //     baseURL: 'https://lms.simplelms.in',
  //   },
  // },
  // {
  //   name: 'Sub-Domain',
  //   use: {
  //     baseURL: 'https://studyinstitute.nrichlearning.co.in/',
  //   },
  // },
],
});
