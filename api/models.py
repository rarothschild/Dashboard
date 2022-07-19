from random import random
from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser
import string
import random
# Create your models here.

def gen_unique_code():
    length = 6
    while True:
        code = ''.join(random.choices(string.ascii_uppercase),k=length)

class Ledger(models.Model):
    payer = models.CharField(default="", max_length=50)
    payDate = models.DateTimeField(auto_now_add=False)
    payAmount = models.IntegerField(null=False, default=0)
    fromAccount = models.CharField(default="", max_length=50)

class Utility(models.Model):
    company = models.CharField(default="", max_length=50)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    payDate = models.DateTimeField(auto_now_add=False)
    #ledger = models.ForeignKey(ledger, on_delete=models.CASCADE)

class House(models.Model):
    address = models.CharField(default="", max_length=50)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE,related_name='owner')
    renters = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE,related_name='renters')

    #utilities = models.ForeignKey(utility,on_delete=models.CASCADE)

class UserProfile(AbstractUser):
    pass

    
