def xor(x, y):
    return (x or y) and not (x and y)

a = int(input())
b = int(input())
print(xor(a,b))