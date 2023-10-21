arr = [1, 2, 3, 4, 3]
n = len(arr)
i = 1
j = n - 1

def minOper(arr, i, j):
    if i == j:
        return 0
    minopr = float('inf')
    for k in range(i, j):
        operations = minOper(arr, i, k) + minOper(arr, k + 1, j) + arr[i - 1] * arr[k] * arr[j]
        minopr = min(operations, minopr)
    return minopr

print(minOper(arr, i, j))
