import csv
import json


def csv_to_json(csv_file_path, json_file_path):

	judges = {}

    # Read CSV file
	with open(csv_file_path, 'r') as csv_file:
        # Assuming the CSV has headers
		csv_reader = csv.DictReader(csv_file)

        # Convert CSV to JSON
        # data = [row for row in csv_reader]

		data = []
		last_date = ""
		last_name = ""
		for row in csv_reader:
			if not any(row.values()):
				continue

			if row["Event name/title"] == "Judging & Submission Presentations" or (not row["Event name/title"] and last_name == "Judging & Submission Presentations"):
				row["Event name/title"] = "Judging & Submission Presentations"

				if not row["Speaker name"]:
					continue
				pass
			elif not row["Event name/title"] or not row["Time"]:
				continue

			row["Speaker name"] = row["Speaker name"].strip()
			
			if not row["Date"]:
				row["Date"] = last_date
			else:
				last_date = row["Date"]
			last_name = row["Event name/title"]
			data.append(row)

	data = {"schedule": data}
    # Write JSON file
	with open(json_file_path, 'w') as json_file:
		json.dump(data, json_file, indent=2)

# Example usage
csv_file_path = 'timesheet.csv'
json_file_path = 'data.json'
csv_to_json(csv_file_path, json_file_path)
