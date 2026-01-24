# Google Sheets Integration Setup Guide

This guide will help you connect your contact form to Google Sheets.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it **"Rice Mill Contact Inquiries"**
4. Add these column headers in Row 1:
   - **A1**: Timestamp
   - **B1**: Name
   - **C1**: Company
   - **D1**: Email
   - **E1**: Phone
   - **F1**: Rice Variety
   - **G1**: Message

## Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code
3. Paste this script:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Log the incoming data for debugging
    Logger.log('Received data: ' + e.postData.contents);

    const data = JSON.parse(e.postData.contents);

    // Append new row with form data
    sheet.appendRow([
      new Date(),
      data.name || '',
      data.company || '',
      data.email || '',
      data.phone || '',
      data.rice_variety || '',
      data.message || ''
    ]);

    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log('Error: ' + error.toString());
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: 'active',
    message: 'Contact form handler is running'
  })).setMimeType(ContentService.MimeType.JSON);
}
```

4. Click **Save** (disk icon) and give your project a name (e.g., "Contact Form Handler")

## Step 3: Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure deployment settings:
   - **Description**: Contact Form Handler
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
5. Click **Deploy**
6. Click **Authorize access**
7. Choose your Google account
8. Click **Advanced** → **Go to [Project Name] (unsafe)**
9. Click **Allow**
10. **COPY THE WEB APP URL** - it looks like:
    ```
    https://script.google.com/macros/s/XXXXXXXXXXXXXXXXXXXXX/exec
    ```

## Step 4: Add URL to Your Website

1. Open your project's `.env` file
2. Find the line that says `VITE_GOOGLE_SCRIPT_URL=`
3. Paste your Web App URL after the `=` sign:
   ```
   VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/XXXXXXXXXXXXXXXXXXXXX/exec
   ```
4. Save the file
5. Restart your development server (stop and run `npm run dev` again)

## Testing

1. Go to your website's contact form
2. Fill out and submit the form
3. Check your Google Sheet - a new row should appear with the submission data
4. The data will also be saved to your Supabase database

## Troubleshooting

### Data not appearing in Google Sheet?

Follow these steps to diagnose the issue:

#### 1. Check Execution Logs in Google Apps Script
1. Go to your Google Apps Script editor
2. Click **Executions** (clock icon) in the left sidebar
3. Look for recent executions - you should see entries when forms are submitted
4. Click on any execution to see logs and errors
5. If you don't see any executions, the script isn't being called

#### 2. Verify Script Deployment
1. In Google Apps Script, click **Deploy** → **Manage deployments**
2. Make sure the deployment is active and the URL matches what's in your `.env` file
3. Verify these settings:
   - **Execute as**: Me (your email address)
   - **Who has access**: Anyone
4. If you made changes to the script, you MUST click **Deploy** → **New deployment** to get a new version

#### 3. Test the Script URL
1. Open your browser's Developer Console (F12)
2. Go to the Console tab
3. Submit a form and look for these logs:
   - "Google Script URL: ..." (should show your script URL)
   - "Sending data to Google Sheets: ..." (should show your form data)
   - "Google Sheets response status: 302" (redirect) or "200" (success)
4. If you see errors, they'll appear here

#### 4. Common Issues
- **"Script function not found"**: Make sure you saved the script and deployed it as a Web App
- **No data appearing**: Check that you copied the correct deployment URL (it should end with `/exec`)
- **Permission errors**: Make sure you authorized the script to run and set "Who has access" to "Anyone"
- **Old data showing**: If you redeploy, you'll get a NEW URL - make sure to update the .env file with the new URL
- **CORS errors**: This is normal and doesn't prevent data from being saved - check your Google Sheet anyway

#### 5. Manual Test
Test your script URL directly:
1. Open your terminal/command prompt
2. Run this command (replace YOUR_SCRIPT_URL with your actual URL):
```bash
curl -L -d '{"name":"Test","company":"Test Co","email":"test@test.com","phone":"1234567890","rice_variety":"Basmati","message":"Test message"}' YOUR_SCRIPT_URL
```
3. Check your Google Sheet - a new row should appear
4. If this works but the website doesn't, the issue is with the website code

## Important Notes

- Each form submission will create a new row in your Google Sheet
- The timestamp is automatically added when the form is submitted
- Data is sent to both Google Sheets AND Supabase for redundancy
- The Google Sheet acts as a backup and makes it easy to export/share data
