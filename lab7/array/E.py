n = int(input())
arr = list(map(int, input().split()))
j = False
for i in range(1, n):
    if arr[i-1] > 0 and arr[i] > 0:
        print('YES')
        j = True
        break
    elif arr[i-1] < 0 and arr[i] < 0:
        print('YES')
        j = True
        break

if not j:
    print('NO')