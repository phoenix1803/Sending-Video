import time
import subprocess

def run_task():

    print("Running task...")
    time.sleep(5)  
    print("Task completed.")

def notify_whatsapp_bot():
    subprocess.run(["node", "sendVideo.js"])

if __name__ == "__main__":
    run_task()
    notify_whatsapp_bot()
