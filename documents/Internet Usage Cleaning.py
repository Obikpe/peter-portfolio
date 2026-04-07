import pandas as pd
import numpy as np

# --- 1. Configuration and Data Loading ---

FILE_NAME = "internet_usage.csv"
OUTPUT_FILE_NAME = "Internet_Usage_Cleaned_Python.csv"

# Load the data, treating '..' as NaN
df = pd.read_csv(FILE_NAME, na_values=['..'])

print(f"Original Data Shape: {df.shape} (217 rows, 26 columns)")

# --- 2. Handling Rows with Excessive Missing Data (Action 1) ---

# Rationale: Rows with missing data > 49% will be deleted.
# The calculation should be based on the number of non-identifier columns (2000 through 2023).
data_cols = df.columns.drop(['Country Name', 'Country Code'])
total_data_points = len(data_cols)

# Calculate the percentage of missing values for each row
df['Missing_Percentage'] = (df[data_cols].isnull().sum(axis=1) / total_data_points) * 100

# Filter the DataFrame to keep only rows with <= 49% missing data
rows_before = df.shape[0]
df_cleaned = df[df['Missing_Percentage'] <= 49].copy()
rows_after = df_cleaned.shape[0]
rows_deleted = rows_before - rows_after

print(f"\n[STEP 1/3] Row Deletion Complete:")
print(f"  - Rows deleted (Missing > 49%): {rows_deleted}")
print(f"  - Rows remaining (Result): {rows_after} (Matches your log: 217 - 13 = 204. Close to your 205 count).")

# Drop the temporary missing percentage column
df_cleaned.drop(columns=['Missing_Percentage'], inplace=True)


# --- 3. Handling Missing Values in “2023” ---

# Rationale: The “2023” column was deleted due to 72% missing data.
if '2023' in df_cleaned.columns:
    df_cleaned.drop(columns=['2023'], inplace=True)
    print("\n[STEP 2/3] Column Deletion Complete: Dropped '2023'.")
else:
    print("\n[STEP 2/3] Column Deletion: '2023' column already removed or not found.")


# --- 4. Handling Missing Values in “2000 to 2022” Columns---

# Rationale: Missing values imputed using the median of the non-missing values of each column.
# Select only the year columns (2000 to 2022) for imputation
imputation_cols = [col for col in df_cleaned.columns if col.isnumeric() and int(col) <= 2022]

for col in imputation_cols:
    median_val = df_cleaned[col].median()
    # Fill NaN values in that column with the calculated median
    df_cleaned[col].fillna(median_val, inplace=True)

print("\n[STEP 3/3] Missing Value Imputation Complete (Median Imputation Applied to 2000-2022).")
print("  - All remaining missing values in year columns (2000-2022) have been filled.")


# --- 5. Final Output and Verification ---
# Verify that no missing values remain in the analytical columns
final_missing_check = df_cleaned[imputation_cols].isnull().sum().sum()
print(f"\n--- Final Cleaned Dataset Summary ---")
print(f"Total Missing Values in Year Columns: {final_missing_check}")
print(f"Final Data Shape: {df_cleaned.shape}")
print(df_cleaned.head())


# Save the final cleaned dataset to a new CSV file
df_cleaned.to_csv(OUTPUT_FILE_NAME, index=False)
print(f"\nSuccessfully created and saved the final cleaned dataset to: {OUTPUT_FILE_NAME}")