from random import random
from django.db import models
import string
import random
# Create your models here.
def gen_unique_code():
    length = 6
    while True:
        code = ''.join(random.choices(string.ascii_uppercase),k=length)

class user(models.Model):
    userID = models.CharField(default=gen_unique_code, max_length=6)
    name = models.CharField(default="", max_length=50)
    rentOffset = models.IntegerField(null=False, default=0)

class ledger(models.Model):
    payer = models.CharField(default="", max_length=50)
    payDate = models.DateTimeField(auto_now_add=False)
    payAmount = models.IntegerField(null=False, default=0)
    fromAccount = models.CharField(default="", max_length=50)

class utility(models.Model):
    company = models.CharField(default="", max_length=50)
    payBy = models.ForeignKey(user,on_delete=models.CASCADE)
    payDate = models.DateTimeField(auto_now_add=False)
    ledger = models.ForeignKey(ledger,on_delete=models.CASCADE)

class house(models.Model):
    address = models.CharField(default="", max_length=50)
    residents = models.ForeignKey(user,on_delete=models.CASCADE,blank=True,null=True)
    utilities = models.ForeignKey(utility,on_delete=models.CASCADE,blank=True,null=True)

    
