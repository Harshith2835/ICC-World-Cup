import matplotlib.pyplot as plt
import pandas as pd

l=["Ishan Kishan","KL Rahul","Rishabh Pant","Rohit Sharma","Ruturaj Gaikwad","Sanju Samson","Shikhar Dhawan","Shreyas Iyer","Shubhman Gill","Suryakumar Yadav","Virat Kohli"]
for i in l:
    for j in l:
        if i!=j:
            df1=pd.read_excel(f"Indian Batsmen/{i}.xlsx")
            df2=pd.read_excel(f"Indian Batsmen/{j}.xlsx")
            # x=df.Year
            # y=df.Runs
            plt.title(f"{i} vs {j} Stats")
            plt.xlabel("Year")
            plt.ylabel("Runs")
            plt.plot(df1.Year,df1.Runs)
            plt.plot(df2.Year,df2.Runs)
            plt.legend([f"{i}",f"{j}"],loc="upper left")
            plt.savefig(f"{i} vs {j}")
            plt.figure()