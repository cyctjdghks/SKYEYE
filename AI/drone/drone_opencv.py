import cv2
import numpy as np
from djitellopy import Tello
import time

# Tello 객체 생성
tello = Tello()

# 드론 연결
tello.connect()

# 배터리 정보 출력
print("Battery:", tello.get_battery())

# 비디오 스트리밍 시작
tello.streamon()

# 비디오 캡처 객체 생성
cap = cv2.VideoCapture("udp://@0.0.0.0:11111")

# 메인 루프
while True:
    # 프레임 받기
    ret, frame = cap.read()

    # 프레임이 없으면 루프 종료
    if not ret:
        break

    # 프레임 출력
    cv2.imshow("Tello Camera", frame)

    # 'q' 키를 누르면 루프 종료
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# 비디오 캡처 객체 해제
cap.release()

# 창 닫기
cv2.destroyAllWindows()

# 드론 종료
tello.end()
