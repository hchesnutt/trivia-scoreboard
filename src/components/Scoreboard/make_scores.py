import random
import json


def create_data(num):
  data = []
  cumulative_score = 50

  for i in range(453):
    record = {
      'x': i,
      'y': cumulative_score,
    }
    data.append(record)
    cumulative_score += 5 * round(random.uniform(0, num), 0)

  return data

scores = [
  { "id": "Holy Broman", "color": "red", 'data': create_data(1.1) },
  { "id": "Sandwich", "color": "blue", 'data': create_data(1) }
]

print(scores)

with open('./scores.json', 'w') as file:
  json.dump(scores, file, indent=2)