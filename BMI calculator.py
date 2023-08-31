import math
weight=float(input("Enter Your Weight By KG \n")) # ask the user to enter weight
hight=float(input("Enter Your Hight By M \n"))    # ask the user to enter hight


def calculate_bmi(weight,hight): #function to calculate the BMI 

    global bmi  #use global key word to anable access from interpret_bmi()function
    bmi= weight/(hight*hight)

    return bmi

def interpret_bmi(bmi): #function to interpre the BMI
 if bmi<18.2:
    print("Under Weight")

 elif bmi == 18.5 or bmi < 25:
    print ("Normal Weight")

 elif bmi == 25 or bmi <30:
    print("Over Weight")

 else:
    print("Obses")

calculate_bmi(weight,hight)
interpret_bmi(bmi)