def pattern(n):
    if n < 1:
        return ""
    output = []
    for i in range(1, n+1):
       output.append(str(i) * i) #convert to string repeat with multiply operator *
    return "\n".join(output) #backwards from js
    
print(pattern(3))