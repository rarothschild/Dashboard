from django.db import models
from django.conf import settings

# Create your models here.
class Ledger(models.Model):
    payer = models.CharField(default="", max_length=50)
    payDate = models.DateTimeField(auto_now_add=False)
    payAmount = models.IntegerField(null=False, default=0)
    fromAccount = models.CharField(default="", max_length=50)

class Utility(models.Model):
    company = models.CharField(default="", max_length=50)
    #user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    payDate = models.DateTimeField(auto_now_add=False)
    #ledger = models.ForeignKey(ledger, on_delete=models.CASCADE)

class Home(models.Model):
    address = models.CharField(default="", max_length=50)
    morgage = models.IntegerField(default=0)
    rent = models.IntegerField(default=0)
    owners = models.ManyToManyField(settings.AUTH_USER_MODEL, blank=True, related_name='owners')
    renters = models.ManyToManyField(settings.AUTH_USER_MODEL, blank=True, related_name='renters')
    #utilities = models.ForeignKey(utility,on_delete=models.CASCADE)