from PIL import Image, ImageFilter

before = Image.open("week06_astronaut.bmp")
after = before.filter(ImageFilter.FIND_EDGES)
after.save("out.bmp")