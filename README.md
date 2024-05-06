# Truthify
CS50 Final Project - Spring 2024
Made by Ezra Sharpe, Armando Patino, & Daniel Ramirez

For our CS50 Final Project, our group developed a Chrome extension to alert Chrome browser users of potential misinformation present on the sites they visit. In order for the CS50 staff to visualize our Truthify extension in action, there are certain prerequisites that need to be completed:

First, you will need to download our directory files from Gradescope onto your device. You will then need to open Virtual Studio Code (VSC) and upload the Truthify repository files to VSC. Now, because every user's computer files are organized differently you will need to modify one of the repository files in VSC. Open the file “script.py.” You will see something like this at the top of the file: 
--------------------------------------------------------------
# Read data from CSV file
csv_file = '/~path~/Truthify/disinformation_domains_clean.csv'
# Update with the path to your CSV file
--------------------------------------------------------------
As the heading suggests, you will need to update the path to match the location of “disinformation_domains_clean.csv” on your device. This is important as “disinformation_domains_clean.csv” contains the data of safe and unsafe domains that the the Truthify extension uses to crosscheck with the domain the Chrome user opens and visits. Update the path and save this change. 

After downloading and updating the files in VSC, you will need to open up Chrome and proceed to the site chrome://extensions/. In the top right corner of the chrome extensions page you will find a toggle switch that will enable "Developer mode." Upon enabling the developer mode, new features will appear in the top left of the page. Click on the "Load unpacked" feature and you will be prompted to select the extension directory in your computer files; select the same extension directory that you had downloaded and then updated. After doing so, the Truthify extension will be found under the header "All Extensions" as one of your Chrome extensions.

After uploading the Truthify extension to your Chrome, you will want to have it housed next to your search bar as an accessible extension that can be used at all times. If you look to the right of your search bar, you will find an icon shaped like a puzzle piece; once clicked, it will show any and all extensions you have on your Chrome. You will see that Truthify is listed there. Click the pin icon next to the Truthify extension to add the Truthify short cut next to your search bar. Great, now you successfully installed Truthify onto your Chrome browser!

To activate our Truthify extension, you will need to open VSC and open up the repository in an integrated terminal. Once your terminal is open, run flask by typing "flask run" and hit enter; you will have created a local developmental server for our Flask-run application, Truthify. Once done, you will notice that a file called "__pycache__" was created in your Truthify directory. "__pycache__" is a directory that Python creates to store compiled bytecode files; these .pyc files are not meant to be run directly and will crash the Chrome extension if used in your extension. Because of this, you need to delete these files by right-clicking the "__pycache__" repository from your Truthify repository and clicking “delete.”

Your Chrome browser should have noted the changes you have made, in respect to running Flask and deleting the "__pychache__," and your Truthify Chrome extension should now be active and running appropriately. However, if this is not the case, you may need to visit "chrome://extensions" in your Chrome browser once again and reload the Truthify extension by clicking the refresh icon at the bottom right of your Truthify extension information panel.

Our Truthify extension also comes with a push-style notifications feature that notifies the user whether the webpage they just opened is safe or not safe. If not enabled already, this feature can be enabled by opening your computer system's settings and finding your notifications settings. In your notifications settings, there should be a list of applications on your computer and their permissions; find Chrome, turn on notifications for Chrome, and select the type of notification you would like to receive.



