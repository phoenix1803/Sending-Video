import time
import subprocess

def run_task():
    # Simulate a task 
    print("Running task...")
    time.sleep(5)  # Adjust
    print("Task completed.")

def notify_whatsapp_bot():
    # Call the js script
    subprocess.run(["node", "sendVideo.js"])

if __name__ == "__main__":
    run_task()
    notify_whatsapp_bot()
