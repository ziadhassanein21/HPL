import os
import re

root_dir = r'c:\Users\Ziad\Desktop\Freelance projects\HPL'
exclude_dirs = {'.next', 'node_modules', '.git', 'public', 'scratch'}
exclude_files = {'logo.png'}

# Regex to find .jpg, .jpeg, .png references in quotes
pattern = re.compile(r'["\']([^"\']+\.(jpg|jpeg|png))["\']', re.IGNORECASE)

def should_replace(match_str):
    if match_str.lower().endswith('logo.png'):
        return False
    return True

for dirpath, dirnames, filenames in os.walk(root_dir):
    # Skip excluded directories
    dirnames[:] = [d for d in dirnames if d not in exclude_dirs]
    
    for filename in filenames:
        if filename.endswith(('.js', '.json', '.css', '.md')):
            file_path = os.path.join(dirpath, filename)
            
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = content
            matches = pattern.findall(content)
            
            for match in matches:
                full_match = match[0]
                if should_replace(full_match):
                    # Replace extension with .webp
                    base = os.path.splitext(full_match)[0]
                    new_ref = f"{base}.webp"
                    new_content = new_content.replace(full_match, new_ref)
            
            if new_content != content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated references in {file_path}")
