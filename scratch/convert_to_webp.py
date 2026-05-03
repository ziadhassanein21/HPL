import os
from PIL import Image

image_dir = r'c:\Users\Ziad\Desktop\Freelance projects\HPL\public\Images'
exclude = ['logo.png']

for filename in os.listdir(image_dir):
    if filename in exclude:
        continue
    
    if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
        file_path = os.path.join(image_dir, filename)
        try:
            with Image.open(file_path) as img:
                # Convert to WebP
                base_name = os.path.splitext(filename)[0]
                new_filename = f"{base_name}.webp"
                new_path = os.path.join(image_dir, new_filename)
                
                # If the image is RGBA, convert to RGB for JPG/JPEG to handle it better, 
                # but WebP supports transparency so we keep it.
                img.save(new_path, 'WEBP', quality=85)
                print(f"Converted {filename} to {new_filename}")
                
                # We don't delete original yet, we'll do it after verifying code updates
        except Exception as e:
            print(f"Failed to convert {filename}: {e}")
