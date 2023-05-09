from djitellopy import Tello
from datetime import datetime
import time

start_time = str(datetime.now())
file_name ="command.txt"
f = open(file_name, "r")
commands = f.readlines()
tello = Tello()

for command in commands:
    if command != '' and command != '\n':
        command = command.rstrip()
        if command.find('delay') != -1:
            sec = float(command.partition('delay')[2])
            print( 'delay %s' % sec)
            time.sleep(sec)
            pass
        else:
            tello.send_read_command(command)

log = tello.get_log()
outFile = open('log.txt', 'w+')
for stat in log:
    stat.print_stats()
    str = stat.return_stats()
    outFile.write(str)