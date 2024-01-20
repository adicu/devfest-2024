import csv
import json


def csv_to_json(csv_file_path, json_file_path):
    # Read CSV file
	with open(csv_file_path, 'r') as csv_file:
        # Assuming the CSV has headers
		csv_reader = csv.DictReader(csv_file)

        # Convert CSV to JSON
        # data = [row for row in csv_reader]

		data = []
		last_date = ""
		for row in csv_reader:
			if not any(row.values()):
				continue
			if not row["Time"]:
				continue
			if not row["Event name"]:
				continue


			if not row["Date"]:
				row["Date"] = last_date
			else:
				last_date = row["Date"]
			data.append(row)

	data = {"schedule": data}
    # Write JSON file
	with open(json_file_path, 'w') as json_file:
		json.dump(data, json_file, indent=2)

# Example usage
csv_file_path = 'timesheet.csv'
json_file_path = 'data.json'
csv_to_json(csv_file_path, json_file_path)
