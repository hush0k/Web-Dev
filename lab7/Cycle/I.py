import math

n = int(input())
s = 0

for i in range(1, int(math.sqrt(n)) + 1):
    if n % i == 0:
        s += 2 if i != n // i else 1 

print(s)
