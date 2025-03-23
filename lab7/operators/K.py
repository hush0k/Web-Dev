n = int(input())
s = n // 60
k = n % 60

while s >= 24:
    s -= 24

print(s, k)