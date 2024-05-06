import pandas as pd
import sqlite3

# Read data from CSV file
csv_file = '/Users/Dan/Truthify/disinformation_domains_clean.csv'  # Update with the path to your CSV file
df = pd.read_csv(csv_file)

print("hello")

# Create a new SQLite database
conn = sqlite3.connect('truthify.db')

# Write data to SQLite database
df.to_sql('data', conn, if_exists='replace', index=False)

# Close connection
conn.close()






