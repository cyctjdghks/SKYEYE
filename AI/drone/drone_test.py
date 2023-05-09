from djitellopy import Tello
from datetime import datetime
import keyboard
import cv2
import time



def takeoff():
    tello.takeoff()
    print("Takeoff")

def land():
    tello.land()
    print("Landing")

def move_up():
    tello.move_up(30)
    print("Moving Up")

def move_down():
    tello.move_down(30)
    print("Moving Down")
    
def move_forward():
    tello.move_forward(30)
    print("Moving Forward")

def move_backward():
    tello.move_backward(30)
    print("Moving Backward")
    
def move_backward():
    tello.move_back(30)
    print("Moving Backward")

def move_left():
    tello.move_left(30)
    print("Moving Left")

def move_right():
    tello.move_right(30)
    print("Moving Right")

def rotate_left():
    tello.rotate_counter_clockwise(45)
    print("Rotating Left")

def rotate_right():
    tello.rotate_counter_clockwise(45)
    print("Rotating Right")

def video_test():
    
    while True:
        frame = tello.get_frame_read().frame
        cv2.imshow("Tello Video Stream", frame)
        
        key = cv2.waitKey(1) & 0xff
        if key == 27: # ESC key to quit
            break
    

def video_off():
    tello.streamoff()
    cv2.destroyAllWindows()


def stop():
    tello.send_rc_control(0, 0, 0, 0)
    print("Stop")

def control():
    keyboard.add_hotkey('u', takeoff)
    keyboard.add_hotkey('j', land)
    keyboard.add_hotkey('up', move_forward)   # 앞으로가기
    keyboard.add_hotkey('down', move_backward)  # 뒤로 가기
    keyboard.add_hotkey('w', move_up)       # 위로 올라가지
    keyboard.add_hotkey('s', move_down)  # 밑으로 내려가기
    keyboard.add_hotkey('left', move_left) # 왼쪽으로가기
    keyboard.add_hotkey('right', move_right) # 오른쪽으로가기
    keyboard.add_hotkey('a', rotate_left) # 왼쪽 회전
    keyboard.add_hotkey('d', rotate_right)# 오른쪽 회전
    keyboard.add_hotkey('s', stop) # 정지
    keyboard.add_hotkey('v', video_test) # 비디오시작
    keyboard.add_hotkey('b', video_off) # 비디오 꺼짐
    
    

    print("Press 'u' to takeoff")
    print("Press 'j' to land")
    print("Use arrow keys to move")
    print("Press 'a' to rotate left")
    print("Press 'd' to rotate right")
    print("Press 's' to stop")

    keyboard.wait()

tello = Tello()

tello.connect()
print(tello.get_battery())
tello.streamon()

control()

