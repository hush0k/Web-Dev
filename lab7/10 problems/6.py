if __name__ == '__main__':
    N = int(input())
    arr = []

    for _ in range(N):
        command = input().split()
        cmd = command[0]

        if cmd == 'insert':
            i, e = int(command[1]), int(command[2])
            arr.insert(i, e)
        elif cmd == 'print':
            print(arr)
        elif cmd == 'remove':
            e = int(command[1])
            arr.remove(e)
        elif cmd == 'append':
            e = int(command[1])
            arr.append(e)
        elif cmd == 'sort':
            arr.sort()
        elif cmd == 'pop':
            arr.pop()
        elif cmd == 'reverse':
            arr.reverse()
c