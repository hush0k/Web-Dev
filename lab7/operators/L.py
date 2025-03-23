n = int(input())

hours = (n // 3600) % 24
minutes = (n % 3600) // 60
seconds = n % 60

print(f"{hours}:{minutes:02}:{seconds:02}")
