# Open the file in binary read mode
with open("example.txt", "rb") as f:
    # Read the first 10 bytes from the file
    content = f.read(10)
    print("Initial content:", content.decode('utf-8'))  # Decode bytes to string
    
    # Move the file pointer 10 bytes ahead from the current position
    f.seek(10, 1)
    
    print("Content after seeking 10 bytes ahead:", content.decode('utf-8'))  # Decode bytes to string
