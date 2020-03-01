import numpy as np
import cv2

def nothing(x):
    print(x)

img = np.zeros((300,512,3), np.uint8)
cv2.namedWindow('BGR Track')

# window name must be same or it forms another window
cv2.createTrackbar('B', 'BGR Track', 0, 255, nothing)
cv2.createTrackbar('G', 'BGR Track', 0, 255, nothing)
cv2.createTrackbar('R', 'BGR Track', 0, 255, nothing)

while(1):
    cv2.imshow('BGR Track', img)
    key = cv2.waitKey(1) & 0xFF
    if key == 27:   # Esc key ASCII (press to exit
        break

    b = cv2.getTrackbarPos('B', 'BGR Track')
    g = cv2.getTrackbarPos('G', 'BGR Track')
    r = cv2.getTrackbarPos('R', 'BGR Track')
    img[:] = [b, g, r]  #img[:] selects all channels here

cv2.destroyAllWindows()