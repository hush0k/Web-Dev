firstHour = int(input())
firstMinute = int(input())
firstSecond = int(input())
secondHour = int(input())
secondMinute = int(input())
secondSecond = int(input())

hours = secondHour - firstHour
minutes = secondMinute - firstMinute
seconds = secondSecond - firstSecond

result = hours*3600 + minutes*60 + seconds
print(result)