# Cura Health Automation Testing

This is an automation testing framework for the Cura Health website, built using Playwright.

### Prerequisites
Before you begin, make sure you have the following installed:
- Node.js (v14 or later)
- NPM

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/andredananjaya/test_erafone_website.git
   cd test_erafone
   ```

2. **Install dependencies:**
   ```bash
   npm install
   npm i dotenv
   ```

3. **Install Playwright browsers:**
   ```bash
   npx playwright install
   ```

### Environment Setup
Create a `.env` file in the root directory and add the following configuration:
```env
WEB_URL=https://katalon-demo-cura.herokuapp.com/
```
> **Note:** This project uses `dotenv` to manage environment variables. Ensure the `.env` file exists before running tests. Don't forget to add `.env` to your `.gitignore` to keep sensitive data safe.

### How to Run Tests
- **Run tests with the @login tag (Chromium only):**
  ```bash
  npx playwright test --grep @login --project=chromium
  ```
- **Run all tests:**
  ```bash
  npx playwright test --project=chromium 
  ```
- **View test report:**
  ```bash
  npx playwright show-report
  ```

### Project Structure
- **tests/**: Contains test scenario files (e.g., [createAppointment.spec.js](file:///Users/andredananjaya/git/erafone/test_erafone/tests/createAppointment.spec.js)).
- **page-object/**: Contains [pageobject.js](file:///Users/andredananjaya/git/erafone/test_erafone/page-object/pageobject.js) for locators and methods (Page Object Model).
- **helper/**: Contains user data ([datauser.js](file:///Users/andredananjaya/git/erafone/test_erafone/helper/datauser.js)) and randomizer utilities.
- **playwright.config.js**: Main Playwright configuration file.
