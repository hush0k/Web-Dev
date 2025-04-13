from django.db import models

# Create your models here.
class Label(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    city = models.CharField(max_length=100)
    address = models.TextField()

    def __str__(self):
        return self.name

class Artist(models.Model):
    name = models.CharField(max_length=100)
    bio = models.TextField()
    monthly_income = models.FloatField()
    label = models.ForeignKey(Label, on_delete=models.CASCADE, related_name='artists')

    def __str__(self):
        return self.name
