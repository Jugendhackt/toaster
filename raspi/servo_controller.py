import sys
import time
import random
import pigpio

NUM_GPIO=32

MIN_WIDTH=1000
MAX_WIDTH=2000

step = [0]*NUM_GPIO
width = [0]*NUM_GPIO
used = [False]*NUM_GPIO

pi = pigpio.pi()

if not pi.connected:
   exit()

pin = 14
try:
    while True:
        entered = input('Enter command $> ')
        if entered.split(' ')[0] == 'GPIO' and len(entered.split(' '))==2 and entered.split(' ')[1].isdigit():
            pin = int(entered.split(' ')[1])
            print(pin)
        else:
            if entered.isdigit():
                if 500 <= int(float(entered)) <= 2500 or int(float(entered)) == 0:
                    pulsewidth = int(entered)
                    pi.set_servo_pulsewidth(pin, pulsewidth)
                else:
                    print("500 <= PWM <= 2500 ODER PWM = 0")
            else:
                print("Du bist dummm.")

finally:
    for i in range(10, 15):
        pi.set_servo_pulsewidth(i, 0)
    pi.stop()




