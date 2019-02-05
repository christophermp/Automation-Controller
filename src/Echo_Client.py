#!/usr/bin/env python3

import socket
import time

HOST = '192.168.0.100'  # The server's hostname or IP address
PORT = 9600        # The port used by the server



with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.connect((HOST, PORT))
    s.sendall(b'run Lights50 \r\n')
    data = s.recv(1024)


time.sleep(10)
print('Received', repr(data))
