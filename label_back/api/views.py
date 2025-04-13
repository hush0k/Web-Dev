from django.shortcuts import render
from rest_framework import generics
from .models import *
from .serializers import *

# Create your views here.
class LabelListAPIView(generics.ListCreateAPIView):
    queryset = Label.objects.all()
    serializer_class = LabelSerializer

class LabelDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Label.objects.all()
    serializer_class = LabelSerializer

class LabelArtistAPIView(generics.ListAPIView):
    serializer_class = ArtistSerializer

    def get_queryset(self):
        label_id = self.kwargs['label_id']
        return Artist.objects.filter(id=label_id)

class ArtistListAPIView(generics.ListCreateAPIView):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer

class ArtistDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer

class ArtistTopTenAPIView(generics.ListAPIView):
    serializer_class = ArtistSerializer

    def get_queryset(self):
        return Artist.objects.order_by('-monthly_income')[:10]