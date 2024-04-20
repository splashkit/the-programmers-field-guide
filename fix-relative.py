import os
rootdir = '/workspaces/the-programmers-field-guide/book'

for subdir, dirs, files in os.walk(rootdir):
    for file in files:
        if file.endswith(".md") or file.endswith(".mdx"):
            fname = os.path.join(subdir, file)
            print(f"Processing {fname}")
            bookPath = subdir.removeprefix("/workspaces/the-programmers-field-guide/book").split('/')
            depth = len(bookPath)
            maxDepth = depth
            # Opening the file in read and write mode 
            with open(fname,'r+') as f: 
        
                # Reading the file into content
                content = f.read() 

                # Determine replacements
                while depth > 0:
                    search = f"]({'../' * depth}"
                    depth -= 1
                    replacement = f"](/book{'/'.join(bookPath[:(maxDepth - depth)])}/"
                    print(f" - searching for {search} -> {replacement}")
                    
                    # Replacing search text 
                    content = content.replace(search, replacement)
        
                # Move to the start of the file
                f.seek(0)
                
                # Replace file content
                f.write(content)
        
                # Truncating the file size 
                f.truncate()
