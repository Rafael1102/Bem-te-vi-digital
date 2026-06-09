from PIL import Image
import os

def check_transparency(path):
    img = Image.open(path)
    if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
        print(f"{path} has transparency.")
        return True
    else:
        print(f"{path} does not have transparency.")
        return False

def remove_background(path, output_path, target_color=(0, 255, 0)):
    # The tool used #00FF00 as temporary background
    img = Image.open(path).convert("RGBA")
    datas = img.getdata()
    
    new_data = []
    for item in datas:
        # Check if color is close to green
        if item[0] < 50 and item[1] > 200 and item[2] < 50:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
    
    img.putdata(new_data)
    img.save(output_path, "PNG")
    print(f"Processed {path} -> {output_path}")

check_transparency("/home/ubuntu/avatar_male.png")
check_transparency("/home/ubuntu/avatar_female.png")

# Even if they have transparency, let's ensure the green is gone if it was used
remove_background("/home/ubuntu/avatar_male.png", "/home/ubuntu/avatar_male_clean.png")
remove_background("/home/ubuntu/avatar_female.png", "/home/ubuntu/avatar_female_clean.png")
