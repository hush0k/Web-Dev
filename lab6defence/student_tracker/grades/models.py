from django.db import models
import json

class Student(models.Model):
    name = models.CharField(max_length=100)
    score = models.JSONField(default=list)

    def get_avg_score(self):
        if not self.score:
            return 0
        return  sum(self.score)/len(self.score)

    def get_top_score(self):
        if not self.score:
            return 0
        return max(self.score)

    def __str__(self):
        return self.name