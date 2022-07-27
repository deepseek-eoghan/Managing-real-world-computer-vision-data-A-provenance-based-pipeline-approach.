from lambda_function import lambda_handler

def main():
    lambda_handler(event={"local_test":True, "data":"deployment/data.json"})

if __name__ == "__main__":
    main()