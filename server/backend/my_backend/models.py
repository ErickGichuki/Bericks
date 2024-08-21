from django.db import models

class User(models.Model):
    username = models.CharField(max_length=20, unique=True)
    email = models.CharField(max_length=30, unique=True)
    password = models.CharField(max_length=20)

class Products(models):
    category = models.CharField(max_length=50)
    title = models.CharField(max_length=30)
    description = models.TextField
