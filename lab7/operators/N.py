lessons = int(input())
total_lessons = 0
if lessons % 2 == 0:
    total_lessons = 45*lessons + lessons/2*5 + lessons/2*15 - 15
else:
    total_lessons = 45*lessons + (lessons//2+1)*5 + lessons//2*15 - 5
hours = int(total_lessons//60)
minutes = int(total_lessons%60)

print(9+hours, minutes)