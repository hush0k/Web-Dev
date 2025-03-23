n = int(input())
t = False
i = 0
while 2**i <= n:
    if 2**i == n:
        t = True
        break
    i += 1
if not t:
    print('NO')
else:
    print('YES')