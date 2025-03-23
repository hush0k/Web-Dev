perDay = int(input())
totalDest = int(input())

result = totalDest // perDay + (totalDest % perDay > 0)

print(result)
