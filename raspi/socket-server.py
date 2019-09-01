#!/usr/bin/env python3
import signal
signal.signal(signal.SIGINT, signal.SIG_DFL)

#import pigpio
#pi = pigpio.pi()
pins = [10, 11, 12, 13, 14, 15]
import servo_set
servo = servo_set.servo_set(pins)

import asyncio
import websockets

async def main(websocket, path):
    while True:
        text = await websocket.recv()
        if(len(text.split(' '))==2):
            setPWM(int(text.split(' ')[0]), int(text.split(' ')[1]))
        elif(text=='GET_ABSOLUTE'):
            for pin in pins:
                await websocket.send(str(pin)+' '+str(servo.get_position(pin)))
        print(text)

def setPWM(pin, pwm):
    print('PWM '+str(pin)+' '+str(pwm))
    #pi.set_servo_pulsewidth(pin, pwm)
    servo.move(pwm, pin)

start_server = websockets.serve(main, "0.0.0.0", 12345)
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()

#for i in range(10, 15):
#    pi.set_servo_pulsewidth(i, 0)
#pi.stop()
