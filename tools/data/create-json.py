#!/usr/bin/python3

import pandas as pd
import json
import hashlib
import sys
import datetime

MOD = 643847

files = {
    "Workshops.csv": ("Workshops", "Speaker_Ids", True, "Speaker email(s)", ["Date", "Start Time", "End Time", "Title", "Topic", "Event description", "Room (capacity)"]),
    "Instructors.csv": ("Instructors", "Speaker_Id", True, "Speaker Email", ["Speaker name", "Bio", "Headshot (public URL preferred)", "LinkedIn", "Website"]),
    "Events.csv": ("Events", "Speaker_Ids", True, "Speaker email(s)", ["Date", "Start Time", "End Time", "Title", "Topic", "Event description", "Room (capacity)"]),
    "Speakers.csv": ("Speakers", "Speaker_Id", True, "Speaker Email", ["Speaker name", "Bio", "Headshot (public URL preferred)", "LinkedIn", "Website"])
}

renames = {
    "Start Time": "Time_Start",
    "End Time": "Time_End",
    "Event description": "Description",
    "Room (capacity)": "Room",
    "Speaker name": "Name",
    "Headshot (public URL preferred)": "Headshot",
}

ofile = "data.json"

def process_data(file_name, df_fields, key_field, one_id = False, id_field_name = "ids"):
    df = pd.read_csv(file_name, keep_default_na=False, skip_blank_lines=True)
    fields = df_fields.copy()
    fields.append(key_field)
    df = df[fields]

    def hash_ids(ids):
        if pd.isna(ids):
            return []
        id_list = [i.strip() for i in ids.split(',')]

        hashed_ids = [hash(i) % MOD for i in id_list]
        if one_id and len(hashed_ids) > 0:
            return hashed_ids[0]
        return hashed_ids

    df[id_field_name] = df[key_field].apply(hash_ids)
    new_fields = df_fields.copy()
    new_fields.append(id_field_name)

    def process_dates(date_str, time_str):
        date_obj = datetime.datetime.strptime(date_str, "%m/%d/%Y")
        time_obj = datetime.datetime.strptime(time_str, "%I:%M %p")

        combined_datetime = date_obj.replace(
            hour=time_obj.hour,
            minute=time_obj.minute,
            second=time_obj.second,
        )

        iso_format = combined_datetime.isoformat()
        return iso_format

    df = df[new_fields]
    df.rename(columns=renames, inplace=True)

    new_order = [id_field_name] + [col for col in df.columns if col != id_field_name]
    df = df[new_order]

    if "Date" in df.columns:
        df['Time_Start'] = df.apply(lambda row: process_dates(row['Date'], row['Time_Start']), axis=1)
        df['Time_End'] = df.apply(lambda row: process_dates(row['Date'], row['Time_End']), axis=1)

        df = df.drop(columns=['Date'])
    
    data = df.to_dict(orient="records")
    return data

output_data = {}
for f in files:
    data = process_data(f, files[f][4], files[f][3], files[f][2], files[f][1])
    output_data[files[f][0]] = data

with open(ofile, "w") as json_file:
    json.dump(output_data, json_file, indent=4)

print(f"JSON file '{ofile}' has been created.")