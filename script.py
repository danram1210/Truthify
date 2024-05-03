import pandas as pd
import sqlite3

# Read data from CSV file
<<<<<<< HEAD
csv_file = '/Users/Ezra/Documents/CS50/Truthify/CS50data.csv'  # Update with the path to your CSV file
=======
csv_file = '/Users/apatino/truthify/Truthify/Truthify/disinformation_domains_clean.csv'  # Update with the path to your CSV file
df = pd.read_csv(csv_file)

print("hello")

# Create a new SQLite database
conn = sqlite3.connect('truthify.db')

# Write data to SQLite database
df.to_sql('data', conn, if_exists='replace', index=False)

# Close connection
conn.close()






