def min_num(a, b, c,  d):
    if a < b and a < c and a < d:
        return a
    elif b < a and b < c and b < d:
        return b
    elif c < a and c < b and c < d:
        return c


an = int(input())
bn = int(input())
cn = int(input())
dn = int(input())

print(min_num(an, bn, cn, dn))