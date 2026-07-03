import { test } from '@playwright/test';
import { SignInPage } from '../../src/pages/SignInPage';
import { HomePage } from '../../src/pages/HomePage';
import { createUser } from '../../src/helpers/createUser';

test.describe('Sign in positive tests', () => {
  let signInPage;
  let homePage;
  let user;

  test.beforeEach(async ({ page, request }) => {
    signInPage = new SignInPage(page);
    homePage = new HomePage(page);

    user = await createUser(request);
  });

  test('Successful `Sign in` flow test', async () => {
    await signInPage.open();
    await signInPage.fillEmailField(user.email);
    await signInPage.fillPasswordField(user.password);
    await signInPage.clickSignInButton();

    await homePage.assertYourFeedTabIsVisible();
  });
});
