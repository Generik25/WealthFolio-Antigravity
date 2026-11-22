import parse_iusn_all
import pages_11_30
import pages_31_50
import pages_51_70
import pages_71_81

with open("scripts/iusn_raw.txt", "w", encoding="utf-8") as f:
    for page in parse_iusn_all.raw_ocr_pages:
        f.write(page + "\n")
    f.write(pages_11_30.text + "\n")
    f.write(pages_31_50.text + "\n")
    f.write(pages_51_70.text + "\n")
    f.write(pages_71_81.text + "\n")

print("Created scripts/iusn_raw.txt successfully!")
