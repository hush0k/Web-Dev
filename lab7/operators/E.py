v = int(input())
t = int(input())
s = v * t
while s < -108 or s > 108:
    if s < 0:
        s += 109
    else:
        s -= 109
if s < 0:
    s = 109 + s

print(s)