#!/usr/bin/python3

import pandas as pd
import json
import hashlib
import sys


MOD = 643847

workshop_fields = ["Date", "Start Time", "End Time", "Title", "Topic", "Event description", "Irl?", "Room (capacity)"]
workshop_key_field = "Speaker email(s)"
workshops_df = pd.read_csv("Workshops.csv")

workshop_fields.append(workshop_key_field)
workshops_key_df = workshops_df[[workshop_key_field]]
workshops_df = workshops_df[workshop_fields]

def hash_ids(ids):
    if pd.isna(ids):
        return []
    id_list = [i.strip() for i in ids.split(',')]
    # hashed_ids = [hashlib.sha256(i.strip().encode()).hexdigest() for i in id_list]
    hashed_ids = [hash(i) % MOD for i in id_list]
    return hashed_ids

workshops_key_df["Speaker_Ids"] = workshops_key_df[workshop_key_field].apply(hash_ids)
workshops_key_df.drop(workshop_key_field, axis=1)
print(workshops_key_df)
print(workshops_df)

# workshops_df = pd.concat([workshops_df, workshops_key_df], axis=0, ignore_index=True)

merged_df = pd.merge(workshops_df, workshops_key_df, on=workshop_key_field, how='inner')

print(merged_df)
# print(workshops_df)
# print(workshops_key_df)
sys.exit(1)
workshops_data = workshops_df.to_dict(orient="records")

# instructors_df = pd.read_csv("Instructors.csv")
# instructors_data = instructors_df.to_dict(orient="records")

output_data = {
    "Workshops": workshops_data,
    # "Instructors": instructors_data
}

with open("output.json", "w") as json_file:
    json.dump(output_data, json_file, indent=4)

print("JSON file 'output.json' has been created.")